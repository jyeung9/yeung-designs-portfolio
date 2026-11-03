/* [design-preview:shared-contrast] Shared, deterministic sRGB contrast and plain-text placement. */
(function(root){
 const rgb=c=>Array.isArray(c)?c:c.startsWith('color(srgb')?(c.match(/[\d.]+/g)||[]).slice(0,3).map(v=>+v*255):c.startsWith('#')?[0,2,4].map(i=>parseInt(c.slice(1).slice(i,i+2),16)):(c.match(/[\d.]+/g)||[]).slice(0,3).map(Number);
 const luminance=c=>rgb(c).map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
 const ratio=(a,b)=>{const x=luminance(a),y=luminance(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
 const mix=(a,b,t)=>rgb(a).map((v,i)=>v+(rgb(b)[i]-v)*Math.max(0,Math.min(1,t)));
 const ink=(surfaces,preferred)=>{if(preferred&&surfaces.every(s=>ratio(preferred,s)>=4.5))return preferred;if(preferred){const options=[];for(const end of ['#000000','#ffffff'])for(let step=1;step<=20;step++){const candidate=mix(preferred,end,step/20).map(Math.round);if(surfaces.every(s=>ratio(candidate,s)>=4.5)){options.push({color:'rgb('+candidate.map(Math.round).join(',')+')',step});break}}if(options.length)return options.sort((a,b)=>a.step-b.step)[0].color}return ['#000000','#ffffff'].sort((a,b)=>Math.min(...surfaces.map(s=>ratio(b,s)))-Math.min(...surfaces.map(s=>ratio(a,s))))[0]};
 root.CompositionContrast={rgb,luminance,ratio,mix,ink};
 if(typeof module!=='undefined')module.exports=root.CompositionContrast;
})(typeof window==='undefined'?globalThis:window);
