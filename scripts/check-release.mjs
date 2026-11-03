// [design-preview:release-enforcement] Read-only checks; never builds or publishes.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import postcss from 'postcss';
import C from '../dist/contrast-rules.js';
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const manifest=JSON.parse(fs.readFileSync('dist/build-manifest.json'));
assert.equal(fs.readFileSync('styles/site.css','utf8'),fs.readFileSync('dist/site.css','utf8'),'Generated CSS is stale');
const html=fs.readFileSync('dist/index.html','utf8');
assert.equal((html.match(/rel="stylesheet"/g)||[]).length,1,'Main page must use one stylesheet');
for(const [key,file] of [['css','site.css'],['js','site-bundle.js']]){
 const digest=hash(fs.readFileSync('dist/'+file)).slice(0,16);
 assert.equal(manifest.assets[key],digest);
 assert(html.includes(file+'?v='+digest),'Content-addressed asset URL is stale: '+file);
}
const actual={};function walk(dir){for(const f of fs.readdirSync(dir,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name,'en'))){const p=path.join(dir,f.name);if(f.isDirectory())walk(p);else if(f.name!=='build-manifest.json')actual[p.slice(5)]=hash(fs.readFileSync(p))}}walk('dist');
assert.deepEqual(actual,manifest.files,'Manifest does not describe the artifact');
// Manifest serialization order comes from the build, so validate its exact recorded order too.
assert.equal(hash(JSON.stringify(manifest.files)),manifest.artifactHash);
const build=fs.readFileSync('scripts/build-preview-script.mjs','utf8');
const sources=JSON.parse(build.match(/const files=(\[[^;]+\]);/)[1]);
const bundle=sources.map(f=>'\n;/* Source: '+f+' */\n'+fs.readFileSync('dist/'+f,'utf8')).join('\n');
assert.equal(bundle,fs.readFileSync('dist/site-bundle.js','utf8'),'JS bundle is stale');
execFileSync(process.execPath,['--check','dist/site-bundle.js']);
let nonImportSeen=false;postcss.parse(fs.readFileSync('styles/site.css','utf8')).nodes.forEach(n=>{if(n.type==='comment')return;if(n.type==='atrule'&&n.name==='import')assert(!nonImportSeen,'CSS import occurs after a rule and will be ignored');else nonImportSeen=true});
const seen=new Map();postcss.parse(fs.readFileSync('styles/site.css','utf8')).walkDecls(d=>{
 if(d.parent.type!=='rule')return;
 let context=[],p=d.parent.parent;while(p&&p.type!=='root'){if(/keyframes$/.test(p.name||''))return;context.unshift('@'+p.name+' '+p.params);p=p.parent}
 const key=context.join('/')+'|'+d.parent.selector+'|'+d.prop;
 assert(!seen.has(key),'Repeated selector/property in same responsive context: '+key);seen.set(key,d.value);
});
for(const [file] of Object.entries(actual)){
 if(!/\.(css|html)$/.test(file))continue;
 const source=fs.readFileSync('dist/'+file,'utf8');
 const refs=file.endsWith('.css')?[...source.matchAll(/url\(['"]?([^)'"\s]+)['"]?\)/g)].map(m=>m[1]):[...source.matchAll(/(?:src|href)="([^"]+)"/g)].map(m=>m[1]);
 for(const ref of refs){if(/^(?:[a-z]+:|\/\/|#)/i.test(ref))continue;const clean=ref.split(/[?#]/)[0];if(!clean)continue;assert(fs.existsSync(path.resolve('dist',path.dirname(file),decodeURIComponent(clean))),'Missing local resource: '+file+' → '+ref)}
}
const arg=process.argv.indexOf('--evidence');
if(arg!==-1){
 const evidencePath=process.argv[arg+1],e=JSON.parse(fs.readFileSync(evidencePath));
 const contract=JSON.parse(fs.readFileSync('tests/render/matrix.json'));
 assert.equal(e.artifactHash,manifest.artifactHash,'Screenshots/measurements belong to another artifact');
 for(const [w,h] of contract.viewports)for(const route of contract.routes)for(const theme of contract.themes){
  const c=e.cases.find(c=>c.viewport.w===w&&c.viewport.h===h&&c.route.replace('#','')===route&&c.theme===theme);assert(c,`Missing ${w}x${h}/${route}/${theme}`);
  assert(!c.issues.horizontalOverflow,'Horizontal overflow: '+c.key);
  for(const t of c.texts)assert(parseFloat(t.font)>=16,'Small text: '+c.key+'/'+t.selector);
  for(const t of c.targets)assert(t.w>=43.9&&t.h>=43.9,'Small target: '+c.key+'/'+t.name);
  if(route==='home'&&w>=768&&h>=768)assert(c.scroll.h<=h+2,'Desktop/tablet landing clips: '+c.key);
  assert(c.screenshot&&fs.existsSync(c.screenshot),'Screenshot missing: '+c.key);
  assert(c.route==='#'+route&&c.details.page===route,'Capture is of the wrong route');
  assert(c.resources.some(r=>r.endsWith('site.css?v='+manifest.assets.css)),'Capture CSS version is stale');
  assert(c.resources.some(r=>r.endsWith('site-bundle.js?v='+manifest.assets.js)),'Capture JS version is stale');
  assert(c.details.images.every(i=>i.loaded),'Visible image failed to load');
  if(['work','explorations'].includes(route))assert(c.details.art.length>0,'Collection artwork disappeared');
  if(route==='home'){
   const d=c.details;assert(d.led.playing||d.led.textWidth<=d.led.boxWidth+1,'Paused label clips');
   assert.deepEqual(d.buttons.map(b=>Math.round(b.w)),[56,84,56],'Playback target proportions changed');
   assert(Math.abs(d.buttons[1].x+d.buttons[1].w/2-(d.deck.x+d.deck.w/2))<1,'Playback controls not centered');
   const groups=c.groups.filter(g=>['.hero-copy','.scene-slot','.landing-navigation'].includes(g.selector));
   for(let i=0;i<groups.length;i++)for(let j=i+1;j<groups.length;j++){const a=groups[i],b=groups[j];assert(Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x)<=1||Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y)<=1,'Unintended group overlap');}
  }
  assert(c.contrast?.samples.length,'Rendered contrast samples missing');
  for(const t of c.contrast.samples)for(const y of [t.y,t.y+t.h]){const sky=c.contrast.sky;let surface=sky.active?C.mix(sky.top,sky.bottom,y/c.contrast.height):C.rgb(sky.base);for(const bg of t.backgrounds){const p=bg.match(/[\d.]+/g);if(p&&p.length>=3)surface=C.mix(surface,C.rgb(bg),p.length>3?+p[3]:1)}assert(C.ratio(t.color,surface)>=4.5,'Contrast below 4.5:1: '+c.key+'/'+t.text);}

 }
 for(const name of contract.extraChecks){
  // A user may accept an unavailable native check for one release; never call it passed.
  const waiver=e.waivers?.[name];
  const accepted=name==='reduced-motion'&&waiver?.by==='Julie'&&waiver?.message&&waiver?.at&&waiver?.commit===e.approval?.commit;
  assert(e.extras?.[name]?.passed===true||accepted,'Missing or failed interaction/state check: '+name);
 }
 for(const route of contract.routes)for(const theme of contract.themes)assert(e.visualReview?.includes(route+'/'+theme),'Missing visual review: '+route+'/'+theme);
 assert.equal(e.unresolved.length,0,'Unresolved review issues block release');
 console.log('Rendered matrix, interactions and visual-review evidence passed.');
}
console.log('Asset identity, resources, CSS ownership, bundle and syntax checks passed.');
