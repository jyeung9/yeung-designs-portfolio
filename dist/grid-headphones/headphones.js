// Original parametric headphone model, rendered with perspective and chrome lighting.
// Orientation only changes with explicit interaction; leaving the object freezes it.
(()=>{
const canvas=document.getElementById('headphones');if(!canvas)return;
const control=canvas.parentElement,ctx=canvas.getContext('2d');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let angle=-.48,hovering=false,w=0,h=0,raf=0,previous=0;
const faces=[];
function surface(fn,nu,nv,material){for(let u=0;u<nu;u++)for(let v=0;v<nv;v++){const points=[fn(u/nu,v/nv),fn((u+1)/nu,v/nv),fn((u+1)/nu,(v+1)/nv),fn(u/nu,(v+1)/nv)];const a=points[0],b=points[1],c=points[3],ab=b.map((n,i)=>n-a[i]),ac=c.map((n,i)=>n-a[i]);let normal=[ab[1]*ac[2]-ab[2]*ac[1],ab[2]*ac[0]-ab[0]*ac[2],ab[0]*ac[1]-ab[1]*ac[0]];let len=Math.hypot(...normal)||1;normal=normal.map(n=>n/len);faces.push({points,normal,material})}}
// Broad arched headband: metal exterior and a padded inner edge.
function arch(radius,thick,width,material){surface((u,v)=>{const a=Math.PI+u*Math.PI,b=v*Math.PI*2;return [(radius+Math.cos(b)*thick)*Math.cos(a),(radius*1.05+Math.cos(b)*thick)*Math.sin(a)-5,Math.sin(b)*width]},96,20,material)}
arch(121,5,20,'chrome');arch(112,4.5,17,'pad');
function ellipsoid(cx,cy,cz,rx,ry,rz,mat){surface((u,v)=>{const a=u*Math.PI,b=v*Math.PI*2;return [cx+Math.cos(a)*rx,cy+Math.sin(a)*Math.cos(b)*ry,cz+Math.sin(a)*Math.sin(b)*rz]},28,56,mat)}
for(const side of [-1,1]){
 // Soft cushions face inward, brushed silver shells face outward.
 ellipsoid(side*103,52,0,18,65,44,'pad');
 ellipsoid(side*120,50,0,22,70,48,'chrome');
 ellipsoid(side*138,50,0,5,54,36,'brushed');
 // Hinges and short adjustment rods.
 ellipsoid(side*119,-6,0,8,32,9,'chrome');
 ellipsoid(side*120,13,0,10,10,11,'brushed');
}
function rotate(p){let [x,y,z]=p;const tx=x*Math.cos(angle)+z*Math.sin(angle),tz=-x*Math.sin(angle)+z*Math.cos(angle);const tilt=-.16;let ty=y*Math.cos(tilt)-tz*Math.sin(tilt);const zz=y*Math.sin(tilt)+tz*Math.cos(tilt);const lean=-.13;return [tx*Math.cos(lean)-ty*Math.sin(lean),tx*Math.sin(lean)+ty*Math.cos(lean),zz]}
function color(normal,mat){const [x,y,z]=normal;const facing=Math.abs(z);const light=Math.max(0,-x*.45-y*.65+z*.6);if(mat==='pad'){let c=20+light*24;return `rgb(${c},${c+4},${c+9})`}
// An environment-like reflection: a bright softbox, dark horizon and cool rim.
let stripe=Math.pow(Math.max(0,Math.cos(y*5.5+x*1.4)),10);let highlight=Math.pow(Math.max(0,-x*.35-y*.55+z*.76),22);let val=mat==='brushed'?110+light*65+stripe*45:48+facing*65+stripe*112+highlight*70;
val=Math.min(250,val);return `rgb(${Math.round(val*.95)},${Math.round(val*.98)},${Math.min(255,Math.round(val+7))})`}
function draw(){if(!w||!h)return;ctx.clearRect(0,0,w,h);const scale=Math.min(w/380,h/355);const cx=w*.5,cy=h*.48;
let night=document.body.classList.contains('nighttime');let shadow=ctx.createRadialGradient(cx,cy+145*scale,0,cx,cy+145*scale,120*scale);shadow.addColorStop(0,night?'#0006':'#18203524');shadow.addColorStop(1,'transparent');ctx.save();ctx.translate(0,cy+145*scale);ctx.scale(1,.18);ctx.translate(0,-cy-145*scale);ctx.fillStyle=shadow;ctx.fillRect(0,0,w,h*6);ctx.restore();
const visible=faces.map(f=>{const p=f.points.map(rotate);return {...f,p,depth:p.reduce((sum,q)=>sum+q[2],0)/4,n:rotate(f.normal)}}).sort((a,b)=>a.depth-b.depth);
for(const f of visible){ctx.fillStyle=color(f.n,f.material);ctx.beginPath();f.p.forEach((p,i)=>{const perspective=680/(680-p[2]);const x=cx+p[0]*scale*perspective,y=cy+p[1]*scale*perspective;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.closePath();ctx.fill();ctx.strokeStyle=ctx.fillStyle;ctx.lineWidth=.45;ctx.stroke()}
}
function resize(){const r=canvas.getBoundingClientRect();w=r.width;h=r.height;const d=Math.min(devicePixelRatio,2);canvas.width=w*d;canvas.height=h*d;ctx.setTransform(d,0,0,d,0,0);draw()}
function stop(){hovering=false;cancelAnimationFrame(raf);raf=0;previous=0}
function animate(now){if(!hovering||document.hidden)return;const dt=previous?Math.min((now-previous)/1000,.04):0;previous=now;angle+=dt*.6;draw();raf=requestAnimationFrame(animate)}
control.addEventListener('pointerenter',e=>{if(e.pointerType==='touch'||reduced.matches)return;hovering=true;previous=0;raf=requestAnimationFrame(animate)});
control.addEventListener('pointerleave',stop);
// Click is reserved for the music control; arrow keys still rotate.
control.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();angle+=(e.key==='ArrowLeft'?-1:1)*Math.PI/12;draw()}});
control.addEventListener('blur',stop);document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});reduced.addEventListener('change',stop);
new ResizeObserver(resize).observe(canvas);new MutationObserver(draw).observe(document.body,{attributes:true,attributeFilter:['class']});resize();
})();
