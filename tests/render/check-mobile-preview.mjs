// [design-preview:mobile-flow] Validate rendered evidence; never infer visual approval.
import fs from 'node:fs';
import assert from 'node:assert/strict';
const root=process.argv[2];assert(root,'Provide the local capture directory');
const cases=JSON.parse(fs.readFileSync(root+'/home-matrix.json'));
const manifest=JSON.parse(fs.readFileSync('dist/build-manifest.json'));
for(const width of [320,375,390,430,600,768,1024,1366,1440,1920,1280])for(const theme of ['light','dark']){
 const c=cases.find(c=>c.viewport.w===width&&c.theme===theme);assert(c,`Missing ${width}/${theme}`);
 assert(!c.issues.horizontalOverflow,'Horizontal overflow');
 assert(c.resources.some(x=>x.endsWith('site.css?v='+manifest.assets.css)),'Stale CSS evidence');
 assert(c.resources.some(x=>x.endsWith('site-bundle.js?v='+manifest.assets.js)),'Stale JS evidence');
 for(const t of c.targets)assert(t.w>=43.9&&t.h>=43.9,'Small target: '+t.name);
 for(const t of c.texts)assert(parseFloat(t.font)>=16,'Small text: '+t.text);
 assert.deepEqual(c.details.buttons.map(b=>Math.round(b.w)),[56,84,56]);
 const [a,b,d]=c.details.buttons;assert(Math.abs((b.x-a.x-a.w)-(d.x-b.x-b.w))<1,'Unequal control gaps');
 assert(Math.abs(b.x+b.w/2-c.details.deck.x-c.details.deck.w/2)<1,'Off-center controls');
 if(width<=600){
  assert.equal(c.details.led.boxWidth,0,'Mobile LED should be hidden');
  const nav=c.groups.find(g=>g.selector==='.landing-navigation'),weather=c.groups.find(g=>g.selector==='.corner-utilities');
  assert(weather.y>=nav.y+nav.h+15,'Weather overlaps navigation');
  const header=c.groups.find(g=>g.selector==='.masthead');assert(header.h<=66,'Header wrapped');
 }
 assert(fs.existsSync(c.screenshot),'Missing visual evidence');
}
console.log('22 landing viewport/theme cases passed: assets, containment, text, targets, control spacing, header and weather flow. Visual approval is separate.');
