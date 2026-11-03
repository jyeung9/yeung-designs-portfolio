// [design-approved:themed-timezone] Native dialog provides Escape/focus handling; original select remains the timezone event source.
for(const select of document.querySelectorAll('.city-select')){
 // [design-approved:sf-default] Start with the named city, keeping the live clock and existing city-change behavior.
 if(select.value==='local'){const la=[...select.options].find(o=>o.textContent==='san francisco');if(la){select.value=la.value;select.dispatchEvent(new Event('change',{bubbles:true}));}}
 const trigger=document.createElement('button');trigger.type='button';trigger.className='city-select themed-city-trigger';trigger.setAttribute('aria-haspopup','dialog');
 select.before(trigger);select.hidden=true;select.style.setProperty('display','none','important');
 const sync=()=>{trigger.textContent=select.selectedOptions[0]?.textContent||'select timezone'};sync();select.addEventListener('change',sync);
 const dialog=document.createElement('dialog');dialog.className='timezone-picker';dialog.setAttribute('aria-label','Choose timezone');
 const title=document.createElement('h2');title.textContent='choose timezone';
 const close=document.createElement('button');close.type='button';close.className='timezone-close';close.textContent='close';close.onclick=()=>dialog.close();
 const search=document.createElement('input');search.type='search';search.placeholder='find a city';search.setAttribute('aria-label','Find a city');
 const list=document.createElement('div');list.className='timezone-options';
 for(const option of select.options){if(!option.value||option.value==='local'||/select timezone/i.test(option.textContent))continue;const b=document.createElement('button');b.type='button';b.textContent=option.textContent;b.onclick=()=>{select.value=option.value;select.dispatchEvent(new Event('change',{bubbles:true}));sync();dialog.close()};list.append(b)}
 search.oninput=()=>{for(const b of list.children)b.hidden=!b.textContent.toLowerCase().includes(search.value.toLowerCase())};
 dialog.append(close,title,search,list);document.body.append(dialog);
 trigger.onclick=()=>{search.value='';search.oninput();dialog.showModal();search.focus()};
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
}
// [design-approved:recessed-player-controls] A shared front fascia keeps the display and buttons on one user-facing plane.
const fascia=document.createElement('div');fascia.className='player-front-fascia';fascia.setAttribute('aria-hidden','true');cabinetScene.append(fascia);
// [design-approved:continuous-rounded-chassis] A single clipped wood shell replaces overlapping top/front materials.
const shell=document.createElementNS('http://www.w3.org/2000/svg','svg');shell.classList.add('player-wood-shell');shell.setAttribute('aria-hidden','true');cabinetScene.prepend(shell);
// [design-approved:front-status-light] Status lamp shares the unrotated front control plane.
const frontStatus=document.createElement('span');frontStatus.className='front-status-light';frontStatus.setAttribute('aria-hidden','true');cabinetScene.append(frontStatus);
const syncFrontStatus=()=>frontStatus.classList.toggle('playing',!localAudio.paused&&!localAudio.ended);['playing','pause','ended','emptied'].forEach(event=>localAudio.addEventListener(event,syncFrontStatus));syncFrontStatus();
// [design-approved:centered-controls] The display is the middle cell of the same control group as both knobs.
transport.querySelector('.led-transport-spacer').replaceWith(sceneReadout);
function fitWoodShellUnrotated(){
 const scene=cabinetScene.getBoundingClientRect(),deck=cabinetScene.querySelector('.independent-deck').getBoundingClientRect();if(!scene.width||!deck.width)return;
 const scale=scene.width/cabinetScene.offsetWidth,w=deck.width/scale,d=deck.height/scale;
 // One projected front plane supplies screen, knobs, shell and status lamp coordinates.
 const rootEm=parseFloat(getComputedStyle(document.documentElement).fontSize),target=84,gap=8,large=rootEm>20||w<480;
 document.body.toggleAttribute('data-large-text',rootEm>20);
 transport.toggleAttribute('data-stacked',large);
 const displayWidth=large?w-32:(w*.94-220-24)/2;
 cabinetScene.style.setProperty('--display-width',displayWidth+'px');
 cabinetScene.style.setProperty('--control-width',(w*.94)+'px');
 cabinetScene.style.setProperty('--control-center',((deck.left-scene.left)/scale+w/2)+'px');

 const led=Math.max(target,nowPlaying.getBoundingClientRect().height/scale)+(large?target+8:0),frontPadding=16,h=d+led+frontPadding*2,r=Math.min(16,w*.065),inset=w*.045;
 cabinetScene.style.setProperty('--control-top',((deck.top-scene.top)/scale+d+frontPadding)+'px');
 homeFrame.style.setProperty('--navigation-width',(w*.88)+'px');
 homeFrame.style.setProperty('--dock-art-size',Math.max(32,w*.097)+'px');
 cabinetScene.style.setProperty('--led-height',led+'px');
 // [design-approved:separate-record-stacks] Reserve a real gap including the offset layers, independent of viewport scale.
 const sideSpace=(deck.left-scene.left)/scale;
 cabinetScene.querySelectorAll('.edge-disc').forEach(record=>{record.style.setProperty('width',Math.max(28,sideSpace-24)+'px','important');record.style.setProperty(record.classList.contains('edge-disc-left')?'left':'right','0px','important');});
 shell.style.left=(deck.left-scene.left)/scale+'px';shell.style.top=(deck.top-scene.top)/scale+'px';shell.style.width=w+'px';shell.style.height=h+'px';shell.setAttribute('viewBox',`0 0 ${w} ${h}`);
 // [design-approved:continuous-curvature] Tangent-matched cubic curves roll the sloped top into the vertical front without a corner at the join.
 const roll=Math.min(28,d*.18),corner=r;
 const outline=`M ${inset+corner} 0 H ${w-inset-corner} C ${w-inset-corner*.4} 0 ${w-inset+1} ${corner*.3} ${w-inset+2} ${corner} L ${w-2} ${d-roll} C ${w} ${d-roll*.3} ${w} ${d+roll*.3} ${w} ${d+roll} V ${h-corner} C ${w} ${h-corner*.45} ${w-corner*.45} ${h} ${w-corner} ${h} H ${corner} C ${corner*.45} ${h} 0 ${h-corner*.45} 0 ${h-corner} V ${d+roll} C 0 ${d+roll*.3} 0 ${d-roll*.3} 2 ${d-roll} L ${inset-2} ${corner} C ${inset-1} ${corner*.3} ${inset+corner*.4} 0 ${inset+corner} 0 Z`;


 shell.innerHTML=`<defs><pattern id="leg-brush" width="4" height=".8" patternUnits="userSpaceOnUse"><path d="M0 .5H4" stroke="#fff" opacity=".19" stroke-width=".18"/></pattern><linearGradient id="leg-metal"><stop stop-color="#3d4445"/><stop offset=".12" stop-color="#878b89"/><stop offset=".3" stop-color="#f0f2ef"/><stop offset=".42" stop-color="#b2b6b4"/><stop offset=".78" stop-color="#777e7c"/><stop offset="1" stop-color="#3d4445"/></linearGradient><linearGradient id="top-rim-silver" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f2f4ed"/><stop offset=".25" stop-color="#939e99"/><stop offset=".45" stop-color="#eef2eb"/><stop offset=".6" stop-color="#7c8883"/><stop offset="1" stop-color="#606a65"/></linearGradient><clipPath id="wood-shell-clip"><path d="${outline}"/></clipPath><linearGradient id="wood-shell-base" x2="1" y2="1"><stop stop-color="#d4b488"/><stop offset=".5" stop-color="#c3a071"/><stop offset="1" stop-color="#ab8559"/></linearGradient><linearGradient id="wood-edge-bevel" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#f2dbb0"/><stop offset=".4" stop-color="#dcc08c"/><stop offset="1" stop-color="#ad8955"/></linearGradient><linearGradient id="natural-front-face" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#e0c392"/><stop offset=".55" stop-color="#d4b684"/><stop offset="1" stop-color="#bb9968"/></linearGradient><linearGradient id="wood-front-roll" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#6e4827" stop-opacity="0"/><stop offset=".28" stop-color="#6e4827" stop-opacity=".04"/><stop offset=".48" stop-color="#6e4827" stop-opacity=".24"/><stop offset="1" stop-color="#4d311b" stop-opacity=".32"/></linearGradient></defs><g clip-path="url(#wood-shell-clip)"><path d="${outline}" fill="url(#wood-shell-base)"/><image href="assets/player-character-cherry.svg" width="${w}" height="${h}" preserveAspectRatio="none" opacity=".48"/><rect x="0" y="${d-2}" width="${w}" height="${h-d+2}" fill="url(#natural-front-face)"/><image href="assets/player-character-cherry.svg" x="0" y="${d-2}" width="${w}" height="${h-d+2}" preserveAspectRatio="none" opacity=".22"/><path d="M1 ${d-4}Q4 ${d}14 ${d}H${w-14}Q${w-4} ${d} ${w-1} ${d-4}V${d+4}Q${w-4} ${d+8} ${w-14} ${d+8}H14Q4 ${d+8}1 ${d+4}Z" fill="url(#wood-edge-bevel)"/><path d="M4 ${d+7}H${w-4}" stroke="#8e6d42" stroke-opacity=".5" stroke-width="1"/><path d="M2 ${d-10}Q3 ${d-3}16 ${d-3}H${w-16}Q${w-3} ${d-3} ${w-2} ${d-10}" fill="none" stroke="#f8e7c7" stroke-opacity=".8" stroke-width="2.2"/><path d="M2 ${d-7}Q3 ${d+1}16 ${d+1}H${w-16}Q${w-3} ${d+1} ${w-2} ${d-7}" fill="none" stroke="#805c36" stroke-opacity=".55" stroke-width="1.3"/><path d="M3 ${h-7}Q4 ${h-3}16 ${h-3}H${w-16}Q${w-4} ${h-3} ${w-3} ${h-7}" fill="none" stroke="#6e4f2f" stroke-opacity=".4" stroke-width="2"/><path d="${outline}" fill="none" stroke="#a28b65" stroke-opacity=".25" stroke-width="2"/></g>`;
 // [design-approved:natural-pale-wood] Pale satin wood, separately lit front face and a narrow rounded bevel clarify the solid form.
 // [design-approved:short-metal-feet] Low cylindrical feet support the wood; back pair are correctly occluded by the chassis.
 // [design-approved:feet-perspective] Cylinder axes stay vertical; the underside ellipse matches the platter's projected plane, with its back half occluded by the metal wall.
 const footHeight=Math.max(7,w*.022),footRadius=w*.032,footDepth=footRadius*Math.min(.95,Math.max(.4,disc.getBoundingClientRect().height/disc.getBoundingClientRect().width)),footBase=h+footHeight;
 shell.style.height=(footBase+footDepth+6)+'px';shell.setAttribute('viewBox',`0 0 ${w} ${footBase+footDepth+6}`);
 const feet=document.createElementNS('http://www.w3.org/2000/svg','g');feet.classList.add('wood-base-feet');
 feet.innerHTML=[w*.17,w*.83].map(x=>`<ellipse cx="${x+2}" cy="${footBase+2}" rx="${footRadius+4}" ry="${footDepth+2}" fill="#241e18" opacity=".13"/><path d="M${x-footRadius} ${h-8}H${x+footRadius}V${footBase}A${footRadius} ${footDepth} 0 0 1 ${x-footRadius} ${footBase}Z" fill="url(#leg-metal)"/><path d="M${x-footRadius} ${h-8}H${x+footRadius}V${footBase}A${footRadius} ${footDepth} 0 0 1 ${x-footRadius} ${footBase}Z" fill="url(#leg-brush)"/><path d="M${x-footRadius} ${footBase}A${footRadius} ${footDepth} 0 0 0 ${x+footRadius} ${footBase}" fill="none" stroke="#48534b" stroke-width="2"/>`).join('');
 shell.insertBefore(feet,shell.querySelector('g[clip-path]'));
 // [design-approved:solid-wood-return] Restore the original front-facing wood deck: no glass, mounts, gap or added yaw.
 cabinetScene.style.setProperty('--glass-gap','0px');
 frontStatus.style.left=((deck.left-scene.left)/scale+w*.09-4)+'px';
 frontStatus.style.top=((deck.top-scene.top)/scale+d-28)+'px';
 const markSize=document.querySelector('.masthead .brand-mark').getBoundingClientRect().width,markInset=w*.025;
 shell.insertAdjacentHTML('beforeend',`<svg class="wood-brand-engraving" x="${w-markInset-markSize}" y="${d-markInset-markSize}" width="${markSize}" height="${markSize}" viewBox="0 0 64 64"><defs><filter id="carve"><feOffset dx="0" dy=".7"/><feComposite in2="SourceAlpha" operator="out"/><feColorMatrix values="0 0 0 0 .92 0 0 0 0 .78 0 0 0 0 .53 0 0 0 .7 0"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g fill="none" stroke="#725633" stroke-width="5.1" stroke-linecap="round" stroke-linejoin="round" filter="url(#carve)"><circle cx="32" cy="32" r="28"/><circle cx="32" cy="32" r="24" stroke-opacity=".4"/><path d="M24 22c-1 5-3 13 2 15 5 2 10-7 13-15-1 7-4 19-9 24-3 3-7 4-9 1-1-2 1-3 3-3" stroke-width="7.5"/><circle cx="42" cy="42" r="1.4"/></g></svg>`);

}
// No temporary transforms: the shell, controls and deck share the same unrotated scene coordinates.
function fitWoodShell(){fitWoodShellUnrotated();dispatchEvent(new Event('playergeometrychange'))}
const shellObserver=new ResizeObserver(()=>requestAnimationFrame(fitWoodShell));shellObserver.observe(cabinetScene);shellObserver.observe(sceneReadout);shellObserver.observe(nowPlaying);addEventListener('resize',fitWoodShell);document.fonts.ready.then(fitWoodShell);requestAnimationFrame(fitWoodShell);

// [design-approved:sketched-earbuds] Fine imperfect ink strokes draw on during hover/focus, with wires following the photo edges rather than covering the face.
const portraitSlot=document.querySelector('#home .desk-polaroid .portrait-crop');
if(portraitSlot){const buds=document.createElementNS('http://www.w3.org/2000/svg','svg');buds.classList.add('portrait-earbuds');buds.setAttribute('viewBox','0 0 100 100');buds.setAttribute('aria-hidden','true');buds.innerHTML='<g fill="none" stroke="#fff4d8" stroke-width=".85" stroke-linecap="round" stroke-linejoin="round"><path pathLength="1" d="M33 43 C30 41 29 44 31 46 Q33 47 34 44 M31 46 L31 50 M68 42 C70 40 72 43 70 46 Q68 47 67 44 M70 46 L70 50"/><path pathLength="1" d="M31 49 C30 55 26 58 24 63 S19 71 17 78 Q14 87 15 99 M70 49 C72 56 77 58 80 64 S84 74 84 81 Q85 90 82 99"/><path pathLength="1" d="M14 75 Q17 73 18 76 L17 82 Q15 84 14 81 Z"/></g>';portraitSlot.append(buds)}

// [design-approved:cursor-track-hints] Viewport-positioned labels follow the pointer without intercepting controls; keyboard focus uses the button bounds.
const trackHint=document.createElement('span');trackHint.className='track-cursor-hint';trackHint.setAttribute('aria-hidden','true');document.documentElement.append(trackHint);
addEventListener('hashchange',()=>trackHint.classList.remove('visible'));
addEventListener('blur',()=>trackHint.classList.remove('visible'));
document.addEventListener('pointerdown',event=>{if(!event.target.closest('.led-transport button,.arm-control'))trackHint.classList.remove('visible')});
// [design-approved:explicit-hover-contrast] Use actual surface families rather than difference blending, which produced low-contrast blue on warm wood. Plain text only; no badge, outline or shadow.
const hintLuminance=color=>{const channels=color.match(/[\d.]+/g)?.slice(0,3).map(Number);if(!channels||channels.length<3)return .9;return channels.map(v=>{v/=255;return v<=.04045?v/12.92:((v+.055)/1.055)**2.4}).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0)};
function hintSurface(x,y){
 const ellipse=(el)=>{if(!el)return false;const r=el.getBoundingClientRect();return r.width&&((x-r.left-r.width/2)/(r.width/2))**2+((y-r.top-r.height/2)/(r.height/2))**2<=1};
 if(ellipse(disc.querySelector('.live-label')))return disc.querySelector('.record-label-art>circle')?.getAttribute('fill')||'#153e54';
 if(ellipse(disc))return 'rgb(25,32,29)';
 const led=nowPlaying.getBoundingClientRect();if(x>=led.left&&x<=led.right&&y>=led.top&&y<=led.bottom)return 'rgb(8,24,18)';
 const wood=shell.querySelector('g[clip-path]').getBoundingClientRect();if(x>=wood.left&&x<=wood.right&&y>=wood.top&&y<=wood.bottom)return 'rgb(185,153,104)';
 return window.compositionSkyAt?'rgb('+window.compositionSkyAt(y).join(',')+')':getComputedStyle(document.body).getPropertyValue('--bg').trim();
}
function contrastHint(x,y){
 const r=trackHint.getBoundingClientRect(),clampX=v=>Math.max(8,Math.min(v,innerWidth-r.width-8)),clampY=v=>Math.max(8,Math.min(v,innerHeight-r.height-8));
 let best=null;
 const protectedRects=[nowPlaying,...document.querySelectorAll('.led-transport button,.wood-brand-engraving')].map(e=>e.getBoundingClientRect());
 const offsets=[[10,12],[-r.width-10,12],[10,-r.height-12],[-r.width-10,-r.height-12],[-r.width/2,28],[-r.width/2,-r.height-28]];
 for(const [dx,dy] of offsets){const px=x+dx,py=y+dy;
  const left=clampX(px),top=clampY(py),lights=[];
  for(const dx of [.05,.5,.95])for(const dy of [.2,.8]){let color=hintSurface(left+r.width*dx,top+r.height*dy);if(color.startsWith('#')){const h=color.slice(1);color='rgb('+[0,2,4].map(i=>parseInt(h.slice(i,i+2),16)).join(',')+')'}lights.push(hintLuminance(color))}
  const dark=Math.min(...lights.map(l=>(l+.05)/.05)),light=Math.min(...lights.map(l=>1.05/(l+.05))),ratio=Math.max(dark,light),candidate={left,top,ratio,color:dark>=light?'#000000':'#ffffff'};
  const collision=protectedRects.some(b=>left<b.right&&left+r.width>b.left&&top<b.bottom&&top+r.height>b.top);candidate.score=ratio-(collision?20:0);if(!best||candidate.score>best.score)best=candidate;if(ratio>=4.5&&!collision){best=candidate;break}
 }
 trackHint.dataset.contrast=best.ratio.toFixed(2);trackHint.style.left=best.left+'px';trackHint.style.top=best.top+'px';trackHint.style.setProperty('color',best.color,'important');
}
for(const button of [...document.querySelectorAll('.led-transport button'),armControl]){
 const show=(x,y)=>{trackHint.textContent=(button===armControl||button.dataset.led==='play')?(localAudio.paused?'play music':'pause music'):button.dataset.led==='next'?'next track':'previous track';trackHint.classList.add('visible');const width=trackHint.getBoundingClientRect().width;trackHint.style.left=Math.max(8,Math.min(x+10,innerWidth-width-8))+'px';trackHint.style.top=Math.max(8,Math.min(y+12,innerHeight-32))+'px';contrastHint(x,y)};
 button.addEventListener('pointerenter',e=>{if(e.pointerType!=='touch'){const r=button.getBoundingClientRect();show(r.left+r.width/2,r.bottom)}});
 button.addEventListener('pointerleave',()=>trackHint.classList.remove('visible'));
 button.addEventListener('focus',()=>{if(button.matches(':focus-visible')){const r=button.getBoundingClientRect();show(r.left,r.bottom)}});
 button.addEventListener('blur',()=>trackHint.classList.remove('visible'));
}
// [design-approved:musical-menu] Small irregular ink notes float upward from the two vinyl links.
for(const link of document.querySelectorAll('#home .rail a[href="#work"],#home .rail a[href="#explorations"]')){
 const notes=document.createElement('span');notes.className='floating-music-notes';notes.setAttribute('aria-hidden','true');
 notes.innerHTML=[0,1,2,3,4,5].map(i=>`<svg style="--note:${i}" viewBox="0 0 24 32"><path d="M9 24 Q3 21 3 26 Q5 30 9 26 L10 6 Q15 9 19 5 L19 21 Q13 18 13 23 Q15 27 19 23"/></svg>`).join('');link.querySelector('.sleeve-art').append(notes);
}

// [design-approved:stirring-straw] Keep the glass still while the straw enters and stirs.
const matchaImage=document.querySelector("#home .contact-matcha");if(matchaImage)matchaImage.outerHTML='<svg class="contact-matcha" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 110">\n<defs><linearGradient id="glass" x2="1" y2="0"><stop stop-color="#ffffff" stop-opacity=".72"/><stop offset=".38" stop-color="#f5f3df" stop-opacity=".22"/><stop offset="1" stop-color="#ffffff" stop-opacity=".65"/></linearGradient><linearGradient id="tea" x2="1" y2=".2"><stop stop-color="#a3b76e"/><stop offset=".5" stop-color="#8da45b"/><stop offset="1" stop-color="#6e8846"/></linearGradient><linearGradient id="milk" x2="0" y2="1"><stop stop-color="#e4e8bb"/><stop offset=".5" stop-color="#eee9cf"/><stop offset="1" stop-color="#faf3dd"/></linearGradient><filter id="shadow" x="-30%" y="-20%" width="160%" height="150%"><feDropShadow dx="1" dy="3" stdDeviation="2" flood-color="#27341b" flood-opacity=".22"/></filter><clipPath id="cup"><path d="M22 32Q50 24 78 32L72 94Q50 104 28 94Z"/></clipPath></defs>\n<ellipse cx="51" cy="100" rx="28" ry="5" fill="#263c22" opacity=".12"/>\n<g filter="url(#shadow)"><path d="M22 32Q50 24 78 32L72 94Q50 104 28 94Z" fill="url(#glass)" stroke="#b7bca4" stroke-width="1.5"/>\n<g clip-path="url(#cup)"><path d="M21 45Q50 36 79 45L74 96Q50 106 26 96Z" fill="url(#milk)"/><path d="M20 43Q46 34 80 43L78 66Q65 59 59 72T41 69T23 78Z" fill="url(#tea)"/><path d="M24 64Q38 55 46 67T73 65" fill="none" stroke="#cad49c" stroke-width="3" opacity=".6"/><path d="M31 45L35 93" stroke="#fff" stroke-width="3" opacity=".48"/></g>\n<g class="matcha-straw"><path d="M56 65L67 8" fill="none" stroke="#526b50" stroke-width="6" stroke-linecap="round"/><path d="M55 64L66 8" fill="none" stroke="#adc0a1" stroke-width="2" stroke-linecap="round"/></g>\n<ellipse cx="50" cy="43" rx="27" ry="7" fill="#a6b876" opacity=".9"/>\n<g class="matcha-straw"><path d="M60 43L67 8" fill="none" stroke="#536f51" stroke-width="6" stroke-linecap="round"/><path d="M59 43L66 8" fill="none" stroke="#b3c6a8" stroke-width="2" stroke-linecap="round"/></g>\n<g fill="#f5f7e8" fill-opacity=".9" stroke="#c2d2b2" stroke-width="1.3">\n<rect x="27" y="35" width="18" height="14" rx="3" transform="rotate(-13 36 42)"/>\n<rect x="49" y="37" width="17" height="14" rx="3" transform="rotate(12 57 44)"/>\n<rect x="38" y="49" width="17" height="14" rx="3" transform="rotate(-8 46 56)"/>\n</g><g fill="none" stroke="#fffef5" stroke-width="2" stroke-linecap="round" opacity=".95"><path d="M29 40L39 38M52 40L61 42M41 53L49 52"/></g>\n<ellipse cx="50" cy="32" rx="28" ry="7" fill="none" stroke="#eef0df" stroke-width="2"/><path d="M22 32L28 94Q50 104 72 94L78 32" fill="none" stroke="#c3c8b2" stroke-width="1.5"/><path d="M27 48L31 89" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>\n</g></svg>\n';

// Player note flights removed; paths remain for the separate legacy heart decoration.
const notePaths=['M8 23 Q2 21 2 26 Q4 29 8 26 L9 5','M8 23 Q2 21 2 26 Q4 29 8 26 L9 5 Q17 8 14 14','M8 24 Q2 22 2 27 Q4 30 8 27 L9 6 L20 3 L20 22 Q14 20 14 25 Q17 28 20 25'];

// [design-approved:heart-magnet] Anchor the stem to the final letter using text geometry; notes converge on the heart and linger like little magnets.
const connectionHeading=document.querySelector('#home .headline-bottom');
const magnetHeart=document.createElementNS('http://www.w3.org/2000/svg','svg');magnetHeart.classList.add('magnet-heart');magnetHeart.setAttribute('viewBox','0 0 80 90');magnetHeart.setAttribute('aria-hidden','true');
magnetHeart.innerHTML='<path class="heart-stem" d="M17 86 C19 73 37 72 37 53"/><g class="heart-bloom"><path class="heart-outline" d="M38 54 C28 44 12 35 17 23 C22 11 34 16 38 24 C42 9 59 12 61 25 C65 38 47 48 38 54Z"/><g class="heart-collected-notes"><path d="M23 27v-9m0 8c-6-2-6 5-1 3M51 36V24l7 2m-7 9c-6-2-6 5-1 3"/></g><path class="heart-shine" d="M23 25Q25 20 30 23"/></g>';
connectionHeading.parentElement.append(magnetHeart);
function fitMagnetHeart(){
 const textNode=[...connectionHeading.childNodes].find(n=>n.nodeType===3&&n.textContent.trim());if(!textNode)return;
 const range=document.createRange();let end=textNode.textContent.trimEnd().length;range.setStart(textNode,end-1);range.setEnd(textNode,end);
 const r=range.getBoundingClientRect(),h=magnetHeart.parentElement.getBoundingClientRect(),scale=h.width/magnetHeart.parentElement.offsetWidth||1;
 const size=Math.min(104,Math.max(64,r.height*1.9));magnetHeart.style.width=size+'px';magnetHeart.style.height=size*90/80+'px';
 magnetHeart.style.left=((r.right-h.left)/scale-size*17/80-3)+'px';magnetHeart.style.top=((r.bottom-h.top)/scale-size*86/80-8)+'px';
 updateMagnetTarget();
}
function updateMagnetTarget(){
 const heart=(document.querySelector('.audio-heart-balloon .balloon-body')||magnetHeart.querySelector('.heart-outline')).getBoundingClientRect(),target={x:heart.left+heart.width*.5,y:heart.top+heart.height*.5};
 const scale=connectionHeading.getBoundingClientRect().width/connectionHeading.offsetWidth||1;
 for(const source of document.querySelectorAll('.floating-music-notes,.playing-music-notes')){
  const b=source.getBoundingClientRect();const isPlayer=source.classList.contains('playing-music-notes');const factor=isPlayer?cabinetScene.getBoundingClientRect().width/cabinetScene.offsetWidth:scale;
  const x=isPlayer?b.left:b.left+b.width/2,y=isPlayer?b.top:b.top+b.height/2;
  source.style.setProperty('--magnet-x',(target.x-x)/factor+'px');source.style.setProperty('--magnet-y',(target.y-y)/factor+'px');
 }
}
function syncHeartMagnet(){magnetHeart.classList.toggle('collecting',!localAudio.paused&&!localAudio.ended)}
for(const event of ['playing','pause','ended'])localAudio.addEventListener(event,syncHeartMagnet);
addEventListener('resize',()=>requestAnimationFrame(fitMagnetHeart));document.fonts.ready.then(fitMagnetHeart);requestAnimationFrame(fitMagnetHeart);

// [design-approved:spring-heart] Cursor proximity nudges the bloom; the flexible stem keeps its base fixed to the final n. Reduced motion skips the simulation.
const heartMotionQuery=matchMedia('(prefers-reduced-motion: reduce)');
let heartX=0,heartY=0,heartVX=0,heartVY=0,heartNudgeX=0,heartNudgeY=0,heartFrame=0,heartLast=0;
const heartBloom=magnetHeart.querySelector('.heart-bloom');
function heartDanceActive(){return magnetHeart.classList.contains('collecting')||document.body.classList.contains('touch-magnet')||!!document.querySelector('#home .rail a:is(:hover,:focus-visible) .floating-music-notes')}
function wakeHeart(){if(!heartMotionQuery.matches&&!heartFrame)heartFrame=requestAnimationFrame(tickHeart)}
function tickHeart(time){
 heartFrame=0;const dt=Math.min(2,(time-heartLast)/16.67||1);heartLast=time;
 const active=heartDanceActive();const tx=heartNudgeX+(active?Math.sin(time/620)*5:0),ty=heartNudgeY+(active?Math.sin(time/470)*2.5-2:0);
 heartVX=(heartVX+(tx-heartX)*.035*dt)*Math.pow(.87,dt);heartVY=(heartVY+(ty-heartY)*.035*dt)*Math.pow(.87,dt);heartX+=heartVX*dt;heartY+=heartVY*dt;
 heartNudgeX*=.965;heartNudgeY*=.965;
 heartBloom.setAttribute('transform',`translate(${heartX} ${heartY}) rotate(${heartX*.9} 38 54)`);
 magnetHeart.querySelector('.heart-stem').setAttribute('d',`M17 86 C19 73 ${37+heartX} ${72+heartY} ${37+heartX} ${53+heartY}`);
 updateMagnetTarget();
 if(active||Math.abs(heartX)+Math.abs(heartY)+Math.abs(heartVX)+Math.abs(heartVY)>.05)heartFrame=requestAnimationFrame(tickHeart);
}
addEventListener('pointermove',event=>{if(event.pointerType==='touch'||heartMotionQuery.matches||document.body.dataset.page!=='home')return;const r=magnetHeart.querySelector('.heart-outline').getBoundingClientRect(),dx=event.clientX-r.left-r.width/2,dy=event.clientY-r.top-r.height/2,distance=Math.hypot(dx,dy);if(distance<110){const force=(1-distance/110)*10;heartNudgeX=-dx/(distance||1)*force;heartNudgeY=-dy/(distance||1)*force*.7;wakeHeart()}},{passive:true});
for(const event of ['playing','pause','ended'])localAudio.addEventListener(event,wakeHeart);
for(const link of document.querySelectorAll('#home .rail a:has(.floating-music-notes)'))for(const event of ['pointerenter','focus','pointerleave','blur'])link.addEventListener(event,wakeHeart);
heartMotionQuery.addEventListener('change',()=>{if(heartMotionQuery.matches){cancelAnimationFrame(heartFrame);heartFrame=0;heartBloom.removeAttribute('transform');magnetHeart.querySelector('.heart-stem').setAttribute('d','M17 86 C19 73 37 72 37 53');updateMagnetTarget()}});

// [design-approved:accumulating-heart-notes] Each completed flight deposits one persistent note; staggered flights grow the cluster over the visit.
const collectedInk=magnetHeart.querySelector('.heart-collected-notes');collectedInk.replaceChildren();
let collectedCount=0;
function collectHeartNote(){
 const index=collectedCount++;const note=document.createElementNS('http://www.w3.org/2000/svg','path');
 // Fill the heart first, then expand in an irregular spiral around it without changing layout.
 const angle=index*2.399963, radius=index<10?4+Math.sqrt(index)*3:14+Math.sqrt(index-9)*1.6;
 const x=38+Math.cos(angle)*radius,y=34+Math.sin(angle)*radius*.72;
 note.setAttribute('d',notePaths[index%notePaths.length]);note.setAttribute('transform',`translate(${x-2.5} ${y-4}) rotate(${(index%5-2)*9} 2.5 4) scale(.24)`);
 note.classList.add('collected-music-note');collectedInk.append(note);magnetHeart.classList.add('has-collected-notes');wakeHeart();
}
for(const source of document.querySelectorAll('.floating-music-notes svg,.playing-music-notes svg')){
 let arrivalTimer;
 function scheduleArrival(){clearTimeout(arrivalTimer);const style=getComputedStyle(source);const duration=parseFloat(style.animationDuration)*1000;
 if(!duration||heartMotionQuery.matches)return;
 arrivalTimer=setTimeout(()=>{const menu=source.closest('.rail a');const active=menu?(menu.matches(':hover,:focus-visible')||document.body.classList.contains('touch-magnet')):!localAudio.paused&&!localAudio.ended;if(active)collectHeartNote()},duration*.76);
 }
 source.addEventListener('animationstart',scheduleArrival);source.addEventListener('animationiteration',scheduleArrival);source.addEventListener('animationcancel',()=>clearTimeout(arrivalTimer));
}

// [design-approved:heart-touch-and-linger] Tapping the heart attracts a short burst without hijacking navigation. Release only after three idle seconds; renewed interaction cancels release.
magnetHeart.removeAttribute('aria-hidden');magnetHeart.setAttribute('role','button');magnetHeart.setAttribute('tabindex','0');magnetHeart.setAttribute('aria-label','Attract music notes to the heart');
let heartReleaseTimer,heartClearTimer,heartTapTimer;
function updateHeartLinger(){
 clearTimeout(heartReleaseTimer);clearTimeout(heartClearTimer);collectedInk.classList.remove('releasing');
 if(heartDanceActive())return;
 heartReleaseTimer=setTimeout(()=>{if(heartDanceActive())return;collectedInk.classList.add('releasing');heartClearTimer=setTimeout(()=>{if(heartDanceActive())return;collectedInk.replaceChildren();collectedCount=0;magnetHeart.classList.remove('has-collected-notes');collectedInk.classList.remove('releasing')},650)},3000);
}
function attractByTap(){clearTimeout(heartTapTimer);document.body.classList.add('touch-magnet');updateHeartLinger();wakeHeart();if(heartMotionQuery.matches){for(let i=0;i<3;i++)collectHeartNote()}
 heartTapTimer=setTimeout(()=>{document.body.classList.remove('touch-magnet');updateHeartLinger()},4500);
}
magnetHeart.addEventListener('click',attractByTap);magnetHeart.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();attractByTap()}});
for(const link of document.querySelectorAll('#home .rail a:has(.floating-music-notes)'))for(const event of ['pointerenter','pointerleave','focus','blur'])link.addEventListener(event,()=>requestAnimationFrame(updateHeartLinger));
for(const event of ['playing','pause','ended'])localAudio.addEventListener(event,updateHeartLinger);

// [design-approved:night-stars] Seeded irregular star field: varied sizes and warmth, with sparse soft halos and no flashing.
const nightStars=document.createElementNS('http://www.w3.org/2000/svg','svg');nightStars.classList.add('night-sky-stars');nightStars.setAttribute('viewBox','0 0 1600 1000');nightStars.setAttribute('preserveAspectRatio','xMidYMid slice');nightStars.setAttribute('aria-hidden','true');
let starSeed=137;const starRandom=()=>{starSeed=(starSeed*16807)%2147483647;return (starSeed-1)/2147483646};
let starMarkup='<defs><radialGradient id="star-halo"><stop stop-color="#e0eaff" stop-opacity=".45"/><stop offset="1" stop-color="#e0eaff" stop-opacity="0"/></radialGradient></defs>';
for(let i=0;i<145;i++){const x=starRandom()*1600,y=starRandom()*1000,r=.35+Math.pow(starRandom(),3)*1.15,opacity=.2+starRandom()*.45;const color=i%9===0?'#f4dfbd':i%5===0?'#c9dcf5':'#eef3fb';if(r>1.2)starMarkup+=`<circle cx="${x}" cy="${y}" r="${r*4}" fill="url(#star-halo)"/>`;starMarkup+=`<circle cx="${x}" cy="${y}" r="${r}" fill="${color}" opacity="${opacity}"/>`}
nightStars.innerHTML=starMarkup;document.body.prepend(nightStars);

// [design-approved:geometric-record-labels] Each track has its own code-native orbital artwork;
// keep the spindle clear and preserve the record's existing rotation and color identity.
(() => {
 const label=document.querySelector('.live-label');if(!label)return;
 const palettes=[['#153e54','#9cecf0','#f0cb83'],['#35284d','#e0c1ff','#b3f5dd'],['#184b42','#b1efd2','#f0d193'],['#5a2d41','#ffcfdb','#a4e9e4'],['#243e65','#b9d5ff','#ffdca3']];
 function art(){if(label.querySelector('.record-label-art'))return;
  const n=Math.max(0,trackIndex),[bg,ink,accent]=palettes[n%palettes.length],svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.classList.add('record-label-art');svg.setAttribute('viewBox','0 0 100 100');svg.setAttribute('aria-hidden','true');
  const spokes=Array.from({length:12+n%5},(_,i)=>{const a=i*360/(12+n%5);return `<path transform="rotate(${a} 50 50)" d="M50 9V${i%3===0?17:13}"/>`}).join('');
  const motifs=[`<path d="M50 21L79 71H21Z M50 79L21 29H79Z"/>`,`<path d="M50 18L82 50L50 82L18 50Z M50 28L72 50L50 72L28 50Z"/>`,`<ellipse cx="50" cy="50" rx="34" ry="16" transform="rotate(35 50 50)"/><ellipse cx="50" cy="50" rx="34" ry="16" transform="rotate(-35 50 50)"/>`,`<path d="M24 62L41 28L58 62L75 28 M25 72L42 38L59 72L76 38"/>`,`<path d="M24 34H66V66H34V24 M76 66H34V34H66V76"/>`];
  svg.innerHTML=`<circle cx="50" cy="50" r="50" fill="${bg}"/><g fill="none" stroke="${ink}" stroke-width=".7" opacity=".72"><circle cx="50" cy="50" r="44"/><circle cx="50" cy="50" r="39"/>${spokes}<g transform="rotate(${n*13} 50 50)">${motifs[n%5]}</g><circle cx="50" cy="50" r="11"/></g><g fill="${accent}"><circle cx="50" cy="12" r="1.8"/><circle cx="84" cy="55" r="1.5"/><path d="M16 47h8v2h-8z M16 51h5v1h-5z"/></g><circle cx="50" cy="50" r="4" fill="${bg}"/><text x="50" y="91" text-anchor="middle" font-family="monospace" font-size="4" fill="${ink}" letter-spacing="1">JY / ${String(n+1).padStart(2,'0')}</text>`;
  label.replaceChildren(svg);
 }
 new MutationObserver(art).observe(label,{childList:true});localAudio.addEventListener('loadedmetadata',art);art();
})();
