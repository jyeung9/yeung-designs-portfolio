// [design-approved:tethered-beat-balloon] A buoyant heart replaces the listener; the knot remains attached to the final n.
// Track beat maps are onset estimates. Pulse follows audio time, so pause, seek and track changes remain synchronized.
(()=>{
 const host=document.querySelector('#home .hero-copy'),heading=document.querySelector('#home .headline-bottom');if(!host||!heading)return;
 document.body.classList.add('listener-preview');magnetHeart.tabIndex=-1;magnetHeart.setAttribute('aria-hidden','true');
 const anchor=document.createElement('span');anchor.className='listener-baseline';anchor.setAttribute('aria-hidden','true');heading.append(anchor);
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.classList.add('audio-heart-balloon');svg.setAttribute('aria-hidden','true');
 svg.innerHTML='<path class="balloon-tether-shadow"/><path class="balloon-tether"/><g class="balloon-envelope"><path class="balloon-body" d="M0 20C-9 14-25 3-24-10C-23-25-7-27 0-15C7-29 25-23 25-10C26 3 10 15 0 20Z"/><path class="balloon-knot" d="M0 20l-3 5q3-2 6 0Z"/><path class="balloon-glint" d="M-17-10q1-8 8-7"/></g>';
 host.append(svg);const thread=svg.querySelector('.balloon-tether'),envelope=svg.querySelector('.balloon-envelope');
 const shadow=svg.querySelector('.balloon-tether-shadow');
 // A closed, inflated heart mesh: both front and back retain real depth as it turns.
 const facets=document.createElementNS(svg.namespaceURI,'g');facets.classList.add('balloon-disco');facets.setAttribute('aria-hidden','true');
 const meshes=[],outline=Array.from({length:180},(_,i)=>{const t=i*Math.PI*2/180;return [24*Math.sin(t)**3,-1.5*(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))-5.5]});
 function inside(x,y){let yes=false;for(let i=0,j=outline.length-1;i<outline.length;j=i++){const a=outline[i],b=outline[j];if((a[1]>y)!=(b[1]>y)&&x<(b[0]-a[0])*(y-a[1])/(b[1]-a[1])+a[0])yes=!yes}return yes}
 function volume(x,y,side){let lo=0,hi=1;const yy=y+5.5;while(inside(x*hi,yy*hi-5.5)&&hi<100)hi*=2;for(let i=0;i<16;i++){const m=(lo+hi)/2;if(inside(x*m,yy*m-5.5))lo=m;else hi=m}const r=1/Math.max(1,hi);return [x,y,side*16*Math.sqrt(Math.max(0,1-r*r))]}
 // Small planar tile cells follow the curved silhouette, avoiding concentric rings at the center.
 for(const side of [1,-1])for(let y=-30,row=0;y<22;y+=4,row++)for(let x=-24,col=0;x<24;x+=4,col++){
  const corners=[[x,y],[x+4,y],[x+4,y+4],[x,y+4]],poly=[];
  for(let i=0;i<4;i++){const a=corners[i],b=corners[(i+1)%4],ia=inside(...a),ib=inside(...b);if(ia)poly.push(a);if(ia!==ib){let lo=0,hi=1;for(let k=0;k<14;k++){const m=(lo+hi)/2;if(inside(a[0]+(b[0]-a[0])*m,a[1]+(b[1]-a[1])*m)===ia)lo=m;else hi=m}poly.push([a[0]+(b[0]-a[0])*lo,a[1]+(b[1]-a[1])*lo])}}
  if(poly.length<3)continue;
  const tile=document.createElementNS(svg.namespaceURI,'path');tile.setAttribute('stroke-width','.25');tile.setAttribute('stroke-linejoin','round');facets.append(tile);
  meshes.push({tile,vertices:poly.map(p=>volume(...p,side)),variation:Math.sin(col*13.7+row*9.3+side),tone:(col*3+row*11+(side>0?0:3))%7});
 }
 envelope.insertBefore(facets,svg.querySelector('.balloon-knot'));svg.querySelector('.balloon-body').style.opacity='0';svg.querySelector('.balloon-glint').style.display='none';
 let spin=0,lastMeshAngle=null;
 function renderVolume(angle){if(lastMeshAngle!==null&&Math.abs(angle-lastMeshAngle)<.018)return;lastMeshAngle=angle;const c=Math.cos(angle),sn=Math.sin(angle),faces=[];
  for(const face of meshes){const v=face.vertices.map(([x,y,z])=>[x*c+z*sn,y,-x*sn+z*c]);const center=v.reduce((a,p)=>a.map((n,i)=>n+p[i]/v.length),[0,0,0]);
   const a=v[1].map((n,i)=>n-v[0][i]),b=v[v.length-1].map((n,i)=>n-v[0][i]);let normal=[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]],length=Math.hypot(...normal)||1;normal=normal.map(n=>n/length);if(normal[0]*center[0]+normal[1]*(center[1]+5.5)+normal[2]*center[2]<0)normal=normal.map(n=>-n);
   const diffuse=Math.max(0,normal[0]*-.4+normal[1]*-.5+normal[2]*.76),specular=Math.pow(Math.max(0,normal[0]*-.2+normal[1]*-.25+normal[2]*.947),40);
   // Jewel glass tiles retain their own pigments; broad pearly reflections travel over the volume.
   const palette=['#d54d87','#a17cc7','#54bdca','#568dcc','#90d3bc','#edb872','#e8b4cc'];
   const pigment=palette[face.tone],shade=CompositionContrast.mix('#25364e',pigment,.42+diffuse*.48);
   const pearl=Math.pow(Math.max(0,normal[0]*-.48+normal[1]*-.38+normal[2]*.78),8);
   const shimmer=Math.pow(Math.max(0,Math.sin(normal[0]*4+normal[1]*3+angle*.35+face.variation*.8)),12);
   const color=CompositionContrast.mix(shade,'#fff8dc',Math.min(.85,pearl*.64+specular*.18+shimmer*.2));
   face.tile.setAttribute('fill','rgb('+color.map(Math.round).join(',')+')');
   face.tile.setAttribute('stroke',document.body.classList.contains('nighttime')?'rgba(110,143,175,.65)':'rgba(37,53,78,.7)');
   face.tile.setAttribute('d',v.map((p,i)=>{const perspective=140/(140-p[2]);return(i?'L':'M')+(p[0]*perspective).toFixed(2)+' '+(p[1]*perspective).toFixed(2)}).join(' ')+'Z');faces.push({tile:face.tile,depth:center[2]});
  }faces.sort((a,b)=>a.depth-b.depth).forEach(f=>facets.append(f.tile));
 }

 let wind=0,windVelocity=0,pushY=0,pushVY=0,lastPointer=null,lastPush=0,colorBeat=-1,colorAt=0,heartColor="#e33b51",blendedColor=[227,59,81];
 document.addEventListener('pointermove',e=>{const r=facets.getBoundingClientRect(),inside=e.clientX>=r.left-12&&e.clientX<=r.right+12&&e.clientY>=r.top-12&&e.clientY<=r.bottom+12;
 if(inside&&lastPointer&&performance.now()-lastPush>95&&!matchMedia('(prefers-reduced-motion: reduce)').matches){lastPush=performance.now();windVelocity+=Math.max(-120,Math.min(120,(e.clientX-lastPointer.x)*3.5));pushVY+=Math.max(-100,Math.min(100,(e.clientY-lastPointer.y)*3))}lastPointer={x:e.clientX,y:e.clientY};},{passive:true});
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');let ax=0,ay=0,size=88,cx=0,cy=0,beatIndex=0,lastTrack='',lastTime=0,nudge=0;
 function place(){const h=host.getBoundingClientRect(),a=anchor.getBoundingClientRect(),font=parseFloat(getComputedStyle(heading).fontSize),scale=h.width/host.offsetWidth||1;
  ax=(a.left-h.left)/scale-font*.25;ay=(a.top-h.top)/scale+font*.12;
  // At least twice the former heart width; proportional to the headline, without stretching artwork.
  size=Math.max(68,Math.min(150,font*2.15));cx=Math.max(size*.6,Math.min(host.clientWidth-size*.6,ax+size*.42));cy=ay-size*1.5;
  svg.setAttribute('viewBox',`0 0 ${host.clientWidth} ${host.clientHeight}`);svg.style.width=host.clientWidth+'px';svg.style.height=host.clientHeight+'px';
 }
 new ResizeObserver(place).observe(host);addEventListener('resize',place);document.fonts.ready.then(place);place();

 function draw(t){const dt=Math.min(.05,(t-lastTime)/1000||.016);lastTime=t;const name=localAudio.currentSrc.split('/').pop(),rhythm=window.TRACK_RHYTHM?.[name],sec=localAudio.currentTime,beats=rhythm?.beats||[];
  if(lastTrack!==name||sec<(beats[beatIndex]||0)){beatIndex=0;lastTrack=name}while(beatIndex+1<beats.length&&beats[beatIndex+1]<=sec)beatIndex++;
  const playing=!localAudio.paused&&!localAudio.ended&&localAudio.readyState>=3,period=beats[beatIndex+1]-beats[beatIndex]||60/(rhythm?.bpm||120),phase=(sec-(beats[beatIndex]||0))/period;
  const energy=window.TRACK_ENERGY?.[name]?.[Math.floor(sec*10)]||0;
  const pulse=playing&&!reduced.matches?Math.exp(-Math.max(0,phase%1)*9)*(.08+energy*.08):0;
  nudge*=Math.exp(-dt*2.5);const gust=Math.sin(t/2100)*size*.10+Math.sin(t/5370+1.7)*size*.065+nudge;{windVelocity+=(gust-wind)*dt*7;windVelocity*=Math.exp(-dt*1.8);wind+=windVelocity*dt;}const sway=reduced.matches?0:wind;
  {pushVY+=-pushY*dt*7;pushVY*=Math.exp(-dt*1.7);pushY=Math.max(-size*.45,Math.min(size*.45,pushY+pushVY*dt));wind=Math.max(-size*.65,Math.min(size*.65,wind));}const bob=reduced.matches?0:Math.sin(t/2300)*size*.035+pushY;
  const x=cx+sway,y=cy+bob,k=size/49*(1+pulse),tip=y+25*k;
  if(playing&&!reduced.matches)spin+=dt*Math.PI/5;renderVolume(spin);const turn=1;
  envelope.setAttribute('transform',`translate(${x} ${y}) rotate(${sway*.18}) scale(${k*turn} ${k})`);
  thread.setAttribute('d',`M${ax-2} ${ay} C${ax-4} ${ay+5} ${ax+7} ${ay+5} ${ax+7} ${ay} C${ax+size*.32+sway} ${ay-size*.25} ${x-size*.24+sway} ${tip+size*.3} ${x} ${tip}`);
  shadow.setAttribute('d',thread.getAttribute('d'));
  heartColor="#e33b51";
  if(window.CompositionContrast&&window.compositionSkyAt){const hr=host.getBoundingClientRect(),surfaces=[compositionSkyAt(hr.top+y-size*.6),compositionSkyAt(hr.top+y+size*.6)];if(!document.body.classList.contains('nighttime'))surfaces.push(...surfaces.map(s=>CompositionContrast.mix(s,'#ffffff',.3)));const target=CompositionContrast.rgb(heartColor);blendedColor=blendedColor.map((v,i)=>v+(target[i]-v)*(1-Math.exp(-dt*1.4)));const color=CompositionContrast.ink(surfaces,'rgb('+blendedColor.map(Math.round).join(',')+')');svg.querySelectorAll('.balloon-body,.balloon-knot').forEach(el=>{el.style.fill=color;el.style.stroke=color});let minimum=Math.min(...surfaces.map(s=>CompositionContrast.ratio(color,s)));
   facets.style.opacity='1';

   svg.dataset.contrast=minimum.toFixed(2)}
  svg.dataset.playing=String(playing);svg.dataset.tempo=String(rhythm?.bpm||'unknown');requestAnimationFrame(draw);
 }
 requestAnimationFrame(draw);
})();
