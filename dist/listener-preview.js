// [design-preview:soft-red-return] Restore the simple red balloon: gentle breeze and audio beat pulse, no photographic assets or rotation mesh.
(()=>{
 const host=document.querySelector('#home .hero-copy'),heading=document.querySelector('#home .headline-bottom');if(!host||!heading)return;
 document.body.classList.add('listener-preview');magnetHeart.tabIndex=-1;magnetHeart.setAttribute('aria-hidden','true');
 const anchor=document.createElement('span');anchor.className='listener-baseline';anchor.setAttribute('aria-hidden','true');heading.append(anchor);
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.classList.add('audio-heart-balloon');svg.setAttribute('aria-hidden','true');
 svg.innerHTML='<defs><linearGradient id="heart-iridescence" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#ff9d79"/><stop offset=".4" stop-color="#df65ad"/><stop offset=".65" stop-color="#91ddd6"/><stop offset="1" stop-color="#ffe6aa"/></linearGradient></defs><path class="balloon-tether-shadow"/><path class="balloon-tether"/><g class="balloon-envelope"><path class="balloon-body" d="M0 20C-9 14-25 3-24-10C-23-25-7-27 0-15C7-29 25-23 25-10C26 3 10 15 0 20Z"/><path class="balloon-iridescence" d="M0 20C-9 14-25 3-24-10C-23-25-7-27 0-15C7-29 25-23 25-10C26 3 10 15 0 20Z"/><path class="balloon-knot" d="M0 20l-3 5q3-2 6 0Z"/><path class="balloon-glint" d="M-17-10q1-8 8-7"/></g>';
 host.append(svg);
 const thread=svg.querySelector('.balloon-tether'),shadow=svg.querySelector('.balloon-tether-shadow'),envelope=svg.querySelector('.balloon-envelope');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let ax=0,ay=0,size=80,cx=0,cy=0,beatIndex=0,lastTrack='',frame=0,inView=true;
 const playing=()=>!localAudio.paused&&!localAudio.ended&&localAudio.readyState>=3;
 function draw(){
  const name=localAudio.currentSrc.split('/').pop(),rhythm=window.TRACK_RHYTHM?.[name],sec=localAudio.currentTime,beats=rhythm?.beats||[];
  if(lastTrack!==name||sec<(beats[beatIndex]||0)){beatIndex=0;lastTrack=name}
  while(beatIndex+1<beats.length&&beats[beatIndex+1]<=sec)beatIndex++;
  const period=beats[beatIndex+1]-beats[beatIndex]||60/(rhythm?.bpm||120),phase=((sec-(beats[beatIndex]||0))/period)%1;
  const pulse=playing()&&!reduced.matches?Math.exp(-Math.max(0,phase)*10)*.045:0;
  // [design-preview:gentle-wind] Unequal wind periods avoid a mechanical pendulum; the string follows with a soft lag.
  const t=performance.now(),sway=reduced.matches?0:Math.sin(t/2700)*5+Math.sin(t/6100)*2,bob=reduced.matches?0:Math.sin(t/3900+1)*2.5-pulse*24;
  const x=cx+sway,y=cy+bob,k=size/50*(1+pulse),tip=y+25*k;
  envelope.setAttribute('transform',`translate(${x} ${y}) scale(${k}) rotate(${reduced.matches?0:Math.sin(t/3100-.4)*2.2} 0 25)`);
  // The loose string keeps a continuous tangent through its curl and stays attached as the heart beats.
  const sx=ax+7,sy=ay,dx=x-sx,dy=tip-sy,length=Math.hypot(dx,dy)||1,ux=dx/length,uy=dy/length,nx=-uy,ny=ux,mobile=innerWidth<=600;
  const points=[],amplitude=Math.min(20,length*.15),slack=mobile?8:10;
  for(let i=0;i<=64;i++){
   const q=i/64,u=Math.max(0,Math.min(1,(q-.38)/.3)),along=length*q+amplitude*Math.sin(u*Math.PI*2),bow=Math.sin(q*Math.PI)*((mobile?10:8)+(reduced.matches?0:Math.sin(t/3200-q)*2))+slack*(1-Math.cos(u*Math.PI*2))*(1+.18*Math.sin(u*Math.PI));
   points.push(`${sx+ux*along+nx*bow} ${sy+uy*along+ny*bow}`);
  }
  thread.setAttribute('d',`M${ax-2} ${ay} Q${ax+3} ${ay+5} ${sx} ${sy} L${points.join(' L')}`);shadow.setAttribute('d',thread.getAttribute('d'));
  svg.dataset.playing=String(playing());svg.dataset.tempo=String(rhythm?.bpm||'estimated');
 }
 function place(){
  const h=host.getBoundingClientRect(),a=anchor.getBoundingClientRect(),font=parseFloat(getComputedStyle(heading).fontSize),scale=h.width/host.offsetWidth||1;
  ax=(a.left-h.left)/scale-font*.25;ay=(a.top-h.top)/scale+font*.12;
  // Smaller than the preceding 136–172px desktop and 80–120px phone heart.
  size=Math.max(88,Math.min(120,font*3));cx=Math.max(size*.6,Math.min(host.clientWidth-size*.6,ax+size*1.05));cy=size*.62;
  if(innerWidth<=600){size=Math.max(64,Math.min(90,innerWidth*.19));cx=host.clientWidth-size*.7;cy=size*.65;}
  else if(innerWidth<1000){cy+=40;} // Clear the tablet header's appearance hint.
  svg.setAttribute('viewBox',`0 0 ${host.clientWidth} ${host.clientHeight}`);svg.style.width=host.clientWidth+'px';svg.style.height=host.clientHeight+'px';draw();
 }
 function tick(){frame=0;draw();if(!reduced.matches&&inView&&!document.hidden&&document.body.dataset.page==='home')frame=requestAnimationFrame(tick)}
 function sync(){
  cancelAnimationFrame(frame);frame=0;draw();
  if(!reduced.matches&&inView&&!document.hidden&&document.body.dataset.page==='home')frame=requestAnimationFrame(tick);
 }
 new ResizeObserver(place).observe(host);addEventListener('resize',place);document.fonts.ready.then(place);
 for(const event of ['playing','pause','ended','emptied','seeked','loadedmetadata'])localAudio.addEventListener(event,sync);
 reduced.addEventListener('change',sync);document.addEventListener('visibilitychange',sync);addEventListener('hashchange',sync);
 new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;sync()}).observe(host);
 place();sync();
})();
