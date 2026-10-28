// Uploaded audio only: no iframe, external player, autoplay or layout-affecting status.
const localAudio=audio;
localAudio.preload='none';localAudio.volume=.35;
const nextAudioBuffer=new Audio();nextAudioBuffer.preload='auto';
function bufferNextTrack(){const index=leftQueue[0];if(index!==undefined&&nextAudioBuffer.getAttribute('src')!==tracks[index].src){nextAudioBuffer.src=tracks[index].src;nextAudioBuffer.load()}}
localAudio.addEventListener('playing',bufferNextTrack);
musicNote.hidden=true;
const disc=musicButton.querySelector('.live-record');
const recordColors=['#568db6','#6a9d78','#9a83bd','#c76c65'];
function tintRecord(el,index){el.style.setProperty('--record-color',recordColors[index%4])}
const carrier=document.createElement('span');carrier.className='record-carrier';disc.before(carrier);carrier.append(disc);
const trackStatus=document.createElement('span');trackStatus.className='audio-status';trackStatus.setAttribute('role','status');trackStatus.setAttribute('aria-live','polite');cabinetScene.append(trackStatus);
const trackControls=document.createElement('div');trackControls.className='track-controls';trackControls.innerHTML='<button type="button" data-step="-1">previous track</button><button type="button" data-step="1">next track</button>';cabinetScene.append(trackControls);
let playbackRequested=false;
let changingRecord=false,leftQueue=tracks.map((_,i)=>i),rightQueue=[],queueSource=1,queueEpoch=0;
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
function selectLocalTrack(index){trackIndex=index;localAudio.src=tracks[index].src;trackStatus.textContent=tracks[index].title+(tracks[index].artist?' · '+tracks[index].artist:'');disc.querySelector('.live-label').replaceChildren();tintRecord(disc,index);setLEDTitle(tracks[index].title);}
function renderQueue(){
 carrier.style.visibility=trackIndex<0?'hidden':'visible';musicButton.classList.toggle('empty-player',trackIndex<0);
 for(const [side,list] of [[-1,leftQueue],[1,rightQueue]]){const button=trackControls.querySelector(`[data-step="${side}"]`);button.hidden=!list.length;if(list.length)tintRecord(button,list[0]);button.disabled=true;button.tabIndex=-1;button.setAttribute('aria-hidden','true');button.setAttribute('aria-label',side<0?'previous track':'next track');button.querySelectorAll('.queue-layer').forEach(el=>el.remove());list.slice(1).forEach((_,i)=>{const layer=document.createElement('span');layer.className='edge-disc-face queue-layer';layer.style.translate=`${(i+1)*1.3}px ${-(i+1)*2}px`;layer.style.zIndex=String(-i-1);layer.setAttribute('aria-hidden','true');tintRecord(layer,list[i+1]);button.prepend(layer)});button.querySelector('.edge-disc-label').textContent=side<0?'previous track':'next track';}
}
async function playLocal(){if(changingRecord)return;playbackRequested=true;if(trackIndex<0){await switchRecord(1,true);return}try{await localAudio.play()}catch{playbackRequested=false;musicState(false);updateArmControl();trackStatus.textContent='tap the record table to start the selected song.'}}
function toggleLocal(){if(changingRecord)return;if(!playbackRequested){playLocal()}else{playbackRequested=false;localAudio.pause();updateArmControl()}}
async function switchRecord(side=queueSource,forcePlay=false){
 if(changingRecord||(trackIndex<0&&!forcePlay))return;
 let incoming=side>0?leftQueue:rightQueue;
 if(!incoming.length)return;
 const outgoing=side>0?rightQueue:leftQueue;
 changingRecord=true;const epoch=queueEpoch;const resume=forcePlay||playbackRequested;
 localAudio.pause();musicButton.classList.add('changing-record');musicState(false);renderQueue();syncTransport();
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const platterBox=carrier.getBoundingClientRect(),stackBox=trackControls.querySelector(`[data-step="${side>0?-1:1}"]`).getBoundingClientRect();
 const dx=stackBox.left+stackBox.width/2-(platterBox.left+platterBox.width/2);
 const endBox=trackControls.querySelector(`[data-step="${side>0?1:-1}"]`).getBoundingClientRect();
 const outX=endBox.width?endBox.left+endBox.width/2-(platterBox.left+platterBox.width/2):(side>0?1:-1)*cabinetScene.clientWidth*.36;
 try{
  await delay(reduced?0:180);if(epoch!==queueEpoch)return;
  if(trackIndex>=0){if(!reduced)await carrier.animate([{translate:'0 0',opacity:1},{translate:'0 -20px',opacity:1,offset:.25},{translate:`${outX}px 10px`,scale:.65,opacity:0}],{duration:480,fill:'forwards',easing:'ease-in-out'}).finished;if(epoch!==queueEpoch)return;outgoing.unshift(trackIndex)}
  const index=incoming.shift();selectLocalTrack(index);carrier.getAnimations().forEach(a=>a.cancel());renderQueue();
  if(!reduced)await carrier.animate([{translate:`${dx}px 20px`,scale:.65,opacity:0},{translate:'0 -20px',scale:1,opacity:1,offset:.75},{translate:'0 0',scale:1,opacity:1}],{duration:520,easing:'ease-in-out'}).finished;
 }catch(error){if(epoch===queueEpoch)trackStatus.textContent='ready to play';}
 finally{if(epoch===queueEpoch){changingRecord=false;musicButton.classList.remove('changing-record');renderQueue();updateArmControl();syncTransport();syncLED()}}
 if(epoch===queueEpoch&&resume)await playLocal();
}
musicButton.onclick=null;
trackControls.addEventListener('click',event=>{const b=event.target.closest('button');if(b&&!b.disabled&&trackIndex>=0)switchRecord(Number(b.dataset.step));});
localAudio.addEventListener('ended',()=>{if(leftQueue.length)switchRecord(1,true);else{playbackRequested=false;updateArmControl()}});
localAudio.addEventListener('error',()=>{trackStatus.textContent='this track could not load. try the next track.';musicState(false)});
localAudio.addEventListener('playing',()=>{musicNote.hidden=true;});
// Step 4: each sleeve has its own inner vinyl and paper jacket.
shelf.querySelectorAll('.cabinet-record').forEach(link=>{const vinyl=document.createElement('span');vinyl.className='sleeve-vinyl';vinyl.setAttribute('aria-hidden','true');link.prepend(vinyl);});
// Step 7: partial vinyl controls share the tabletop plane; the tonearm owns play/pause.
trackControls.className='edge-track-controls';
trackControls.innerHTML=[[-1,'previous song','left'],[1,'next song','right']].map(([step,label,side])=>`<button type="button" class="edge-disc edge-disc-${side}" data-step="${step}" aria-label="${label}"><span class="edge-disc-face" aria-hidden="true"><i></i><b class="edge-disc-arrow">${step<0?"←":"→"}</b></span><span class="edge-disc-label">${label}</span></button>`).join('');
musicButton.onclick=null;musicButton.tabIndex=-1;musicButton.setAttribute('aria-hidden','true');musicButton.classList.add('tonearm-only');
const armControl=document.createElement('button');armControl.type='button';armControl.className='arm-control';armControl.setAttribute('aria-label','play music');armControl.setAttribute('aria-pressed','false');armControl.innerHTML='<span class="edge-disc-label">play music</span>';cabinetScene.append(armControl);armControl.onclick=toggleLocal;
function updateArmControl(){const playing=!localAudio.paused&&!localAudio.ended;const label=trackIndex<0?'load and play':playing?'pause music':'play music';armControl.setAttribute('aria-label',label);armControl.setAttribute('aria-pressed',String(playing));armControl.querySelector('span').textContent=label;}
['playing','pause','ended','error'].forEach(name=>localAudio.addEventListener(name,updateArmControl));
armControl.addEventListener('keydown',event=>{if(trackIndex>=0&&(event.key==='ArrowRight'||event.key==='ArrowLeft')){event.preventDefault();switchRecord(event.key==='ArrowRight'?1:-1);}});
document.getElementById('headphone-hint').textContent='click the record player to load and play. use the circular buttons to skip. the record table is the only play/pause control.';
requestAnimationFrame(fitWelcome);

const nowPlaying=document.createElement('span');nowPlaying.className='now-playing-led';nowPlaying.innerHTML='<span>NOW PLAYING</span><strong>ready</strong>';cabinetScene.append(nowPlaying);
function syncPlayerHover(){musicButton.classList.toggle('player-hover',musicButton.matches(':hover')||armControl.matches(':hover,:focus-visible')||armControl.classList.contains('audio-preview'));}
[musicButton,armControl].forEach(el=>['pointerenter','pointerleave','focus','blur'].forEach(name=>el.addEventListener(name,()=>requestAnimationFrame(syncPlayerHover))));
new MutationObserver(syncPlayerHover).observe(armControl,{attributes:true,attributeFilter:['class']});

const impactPrompts=['designed for more connection & IRL hangouts','make custom videos from viral favorites','designed for 4m+ patients & caregivers'];
shelf.querySelectorAll('[data-record]').forEach((link,i)=>{const label=link.querySelector('.jacket-title');label.replaceChildren();const impact=document.createElement('span');impact.textContent=impactPrompts[i];const project=document.createElement('small');project.textContent=cabinetProjects[i].title;label.append(impact,project);link.setAttribute('aria-label',cabinetProjects[i].title+' — '+impactPrompts[i]);});
const contactNote=document.querySelector('#home .rail .desk-note');contactNote.setAttribute('aria-label','contact me');contactNote.querySelector('.menu-label').textContent='contact me';contactNote.querySelector('.written-hello').innerHTML='contact<br>me';

// Sleeve details are printed on the cover; activation opens its existing case-study destination.
shelf.querySelectorAll('[data-record]').forEach((link,i)=>{
 const details=document.createElement('span');details.className='sleeve-details';
 const title=document.createElement('b');title.textContent=cabinetProjects[i].title;
 const benefit=document.createElement('span');benefit.textContent=impactPrompts[i];
 details.append(title,benefit);link.querySelector('.jacket-art').append(details);
 link.href=cabinetProjects[i].card.href;
});

function resetQueue(){playbackRequested=false;queueEpoch++;localAudio.pause();carrier.getAnimations().forEach(a=>a.cancel());changingRecord=false;trackIndex=-1;leftQueue=tracks.map((_,i)=>i);rightQueue=[];queueSource=1;musicButton.classList.remove('changing-record');musicState(false);setLEDTitle('load record');renderQueue();updateArmControl();syncTransport();syncLED()}
addEventListener('hashchange',()=>{if(!location.hash||location.hash==='#home')resetQueue()});
trackControls.querySelectorAll('.edge-disc-arrow').forEach(el=>{el.innerHTML='<svg viewBox="0 0 60 24" aria-hidden="true"><path d="M54 5 Q35 23 8 13 M8 13 L17 7 M8 13 L15 20"/></svg>'});

function setLEDTitle(title){
 const field=nowPlaying.querySelector('strong');field.replaceChildren();const ribbon=document.createElement('span');ribbon.className='led-ribbon';
 for(let i=0;i<2;i++){const copy=document.createElement('span');copy.textContent=title;if(i)copy.setAttribute('aria-hidden','true');ribbon.append(copy)}field.append(ribbon);field.setAttribute('aria-label',title);
 requestAnimationFrame(()=>{const overflow=ribbon.firstElementChild.getBoundingClientRect().width>field.clientWidth;nowPlaying.classList.toggle('scroll-title',overflow);ribbon.style.animationDuration=Math.max(12,title.length*.5)+'s'});
}
function syncLED(){const playing=!localAudio.paused&&!localAudio.ended;nowPlaying.classList.toggle('led-playing',playing);nowPlaying.firstElementChild.setAttribute('aria-label',playing?'Playing':trackIndex>=0?'Paused':'Ready');nowPlaying.firstElementChild.innerHTML=`<i aria-hidden="true" class="led-symbol ${playing?'symbol-pause':'symbol-play'}"></i>`;}
['playing','pause','ended','error'].forEach(event=>localAudio.addEventListener(event,syncLED));
setLEDTitle(trackIndex>=0?tracks[trackIndex].title:'load record');syncLED();
addEventListener('hashchange',syncLED);
addEventListener('resize',()=>setLEDTitle(trackIndex>=0?tracks[trackIndex].title:'load record'));

// Cursor-local hint belongs to the actual hit target, not the decorative deck.
armControl.addEventListener('pointermove',event=>{if(event.pointerType==='touch')return;const r=armControl.getBoundingClientRect(),hint=armControl.querySelector('.edge-disc-label');hint.style.left=Math.max(0,Math.min(event.clientX-r.left+12,innerWidth-r.left-hint.offsetWidth-12))+'px';hint.style.top=(event.clientY-r.top+14)+'px';armControl.classList.add('cursor-hint')});
armControl.addEventListener('pointerleave',()=>{armControl.classList.remove('cursor-hint');const hint=armControl.querySelector('.edge-disc-label');hint.style.left='';hint.style.top=''});
function placeTrackHints(){const tableBottom=cabinetScene.querySelector('.shared-table').getBoundingClientRect().bottom;trackControls.querySelectorAll('.edge-disc').forEach(button=>{button.querySelector('.edge-disc-label').style.setProperty('top',Math.max(0,tableBottom-button.getBoundingClientRect().top+20)+'px','important')})}
addEventListener('resize',()=>requestAnimationFrame(placeTrackHints));document.fonts.ready.then(placeTrackHints);trackControls.querySelectorAll('.edge-disc').forEach(button=>{button.addEventListener('pointerenter',placeTrackHints);button.addEventListener('focus',placeTrackHints)});requestAnimationFrame(placeTrackHints);

// Floating skip buttons flank the read-only LED; the record table toggles playback.
const transport=document.createElement('div');transport.className='led-transport';transport.setAttribute('role','group');transport.setAttribute('aria-label','Playback controls');
transport.innerHTML='<button type="button" aria-label="Previous track" data-led="previous"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5v14M18 5 8 12l10 7Z"/></svg></button><span class="led-transport-spacer" aria-hidden="true"></span><button type="button" aria-label="Next track" data-led="next"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 5v14M6 5l10 7-10 7Z"/></svg></button>';
cabinetScene.append(transport);

transport.addEventListener('click',event=>{const b=event.target.closest('button');if(!b||b.disabled)return;event.stopPropagation();switchRecord(b.dataset.led==='next'?1:-1)});
function syncTransport(){

 transport.querySelector('[data-led="previous"]').disabled=changingRecord||trackIndex<0||!rightQueue.length;
 transport.querySelector('[data-led="next"]').disabled=changingRecord||trackIndex<0||!leftQueue.length;
 armControl.disabled=changingRecord;
}
['loadedmetadata','playing','pause','ended','error'].forEach(event=>localAudio.addEventListener(event,syncTransport));
resetQueue();
