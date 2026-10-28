// Uploaded audio only: no iframe, external player, autoplay or layout-affecting status.
const localAudio=audio;
localAudio.preload='none';localAudio.volume=.35;
musicNote.hidden=true;
const disc=musicButton.querySelector('.live-record');
const carrier=document.createElement('span');carrier.className='record-carrier';disc.before(carrier);carrier.append(disc);
const trackStatus=document.createElement('span');trackStatus.className='audio-status';trackStatus.setAttribute('role','status');trackStatus.setAttribute('aria-live','polite');cabinetScene.append(trackStatus);
const trackControls=document.createElement('div');trackControls.className='track-controls';trackControls.innerHTML='<button type="button" data-step="-1">previous track</button><button type="button" data-step="1">next track</button>';cabinetScene.append(trackControls);
let changingRecord=false,historyTracks=[],historyCursor=-1,remainingTracks=[];
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
function nextTrackIndex(){if(historyCursor<historyTracks.length-1)return historyTracks[++historyCursor];if(!remainingTracks.length)remainingTracks=tracks.map((_,i)=>i).filter(i=>i!==trackIndex).sort(()=>Math.random()-.5);const index=remainingTracks.pop()??0;historyTracks.push(index);historyCursor=historyTracks.length-1;return index;}
function selectLocalTrack(index){trackIndex=index;localAudio.src=tracks[index].src;trackStatus.textContent=tracks[index].title+(tracks[index].artist?' · '+tracks[index].artist:'');disc.querySelector('.live-label').textContent=tracks[index].title;nowPlaying.querySelector('strong').textContent=tracks[index].title;disc.querySelector('.live-label').style.backgroundColor=['#e0c9a5','#bdcdb7','#cfb8a2','#c3c1da'][index%4];}
async function playLocal(){if(changingRecord)return;if(trackIndex<0)selectLocalTrack(nextTrackIndex());try{await localAudio.play();}catch{musicState(false);trackStatus.textContent='music could not start. tap the player to try again.';}}
function toggleLocal(){if(changingRecord)return;if(localAudio.paused)playLocal();else localAudio.pause();}
async function switchRecord(direction=1){
 if(changingRecord)return;changingRecord=true;trackControls.querySelectorAll('button').forEach(b=>b.disabled=true);
 const resume=!localAudio.paused||localAudio.ended;
 localAudio.pause();musicButton.classList.add('changing-record');musicState(false);
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 try{
  await delay(reduced?0:1100); // Lift and return the arm before touching the disc.
  if(!reduced)await carrier.animate([{translate:'0 0',opacity:1},{translate:'0 -24px',opacity:1,offset:.22},{translate:'110vw -24px',opacity:0}],{duration:750,easing:'cubic-bezier(.45,0,.65,1)',fill:'forwards'}).finished;
  const index=direction<0&&historyCursor>0?historyTracks[--historyCursor]:direction<0&&trackIndex>=0?trackIndex:nextTrackIndex();
  selectLocalTrack(index);carrier.getAnimations().forEach(a=>a.cancel());
  if(!reduced)await carrier.animate([{translate:'-110vw -24px',opacity:0},{translate:'0 -24px',opacity:1,offset:.78},{translate:'0 0',opacity:1}],{duration:850,easing:'cubic-bezier(.22,.6,.3,1)'}).finished;
 }finally{musicButton.classList.remove('changing-record');changingRecord=false;trackControls.querySelectorAll('button').forEach(b=>b.disabled=false);}
 if(resume)await playLocal();
}
musicButton.onclick=toggleLocal;
trackControls.addEventListener('click',event=>{const b=event.target.closest('button');if(b)switchRecord(Number(b.dataset.step));});
localAudio.addEventListener('ended',()=>switchRecord(1));
localAudio.addEventListener('error',()=>{trackStatus.textContent='this track could not load. try the next track.';musicState(false)});
localAudio.addEventListener('playing',()=>{musicNote.hidden=true;});
// Step 4: each sleeve has its own inner vinyl and paper jacket.
shelf.querySelectorAll('.cabinet-record').forEach(link=>{const vinyl=document.createElement('span');vinyl.className='sleeve-vinyl';vinyl.setAttribute('aria-hidden','true');link.prepend(vinyl);});
// Step 7: partial vinyl controls share the tabletop plane; the tonearm owns play/pause.
trackControls.className='edge-track-controls';
trackControls.innerHTML=[[-1,'previous song','left'],[1,'next song','right']].map(([step,label,side])=>`<button type="button" class="edge-disc edge-disc-${side}" data-step="${step}" aria-label="${label}"><span class="edge-disc-face" aria-hidden="true"><i></i><b class="edge-disc-arrow">${step<0?"←":"→"}</b></span><span class="edge-disc-label">${label}</span></button>`).join('');
musicButton.onclick=null;musicButton.tabIndex=-1;musicButton.setAttribute('aria-hidden','true');musicButton.classList.add('tonearm-only');
const armControl=document.createElement('button');armControl.type='button';armControl.className='arm-control';armControl.setAttribute('aria-label','play music');armControl.setAttribute('aria-pressed','false');armControl.innerHTML='<span class="edge-disc-label">play music</span>';cabinetScene.append(armControl);armControl.onclick=toggleLocal;
function updateArmControl(){const playing=!localAudio.paused&&!localAudio.ended;armControl.setAttribute('aria-label',playing?'pause music':'play music');armControl.setAttribute('aria-pressed',String(playing));armControl.querySelector('span').textContent=playing?'pause music':'play music';}
['playing','pause','ended','error'].forEach(name=>localAudio.addEventListener(name,updateArmControl));
armControl.addEventListener('keydown',event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();switchRecord(event.key==='ArrowRight'?1:-1);}});
let audioPreview=null;
[armControl,...trackControls.querySelectorAll('button')].forEach(button=>{
 button.addEventListener('pointerdown',event=>{if(event.pointerType==='touch'&&audioPreview!==button){audioPreview=button;button.dataset.previewAudio='true';document.querySelectorAll('.audio-preview').forEach(el=>el.classList.remove('audio-preview'));button.classList.add('audio-preview');}});
 button.addEventListener('click',event=>{if(button.dataset.previewAudio){event.preventDefault();event.stopImmediatePropagation();delete button.dataset.previewAudio;}},true);
});
document.addEventListener('pointerdown',event=>{if(!event.target.closest('.arm-control,.edge-disc')){audioPreview=null;document.querySelectorAll('.audio-preview').forEach(el=>el.classList.remove('audio-preview'));}});
document.getElementById('headphone-hint').textContent='use the tonearm to play or pause. use the left and right discs to change songs.';
requestAnimationFrame(fitWelcome);

const nowPlaying=document.createElement('span');nowPlaying.className='now-playing-led';nowPlaying.innerHTML='<span>now playing:</span><strong>ready to play</strong>';musicButton.querySelector('.independent-deck').append(nowPlaying);
function syncPlayerHover(){musicButton.classList.toggle('player-hover',musicButton.matches(':hover')||armControl.matches(':hover,:focus-visible')||armControl.classList.contains('audio-preview'));}
[musicButton,armControl].forEach(el=>['pointerenter','pointerleave','focus','blur'].forEach(name=>el.addEventListener(name,()=>requestAnimationFrame(syncPlayerHover))));
new MutationObserver(syncPlayerHover).observe(armControl,{attributes:true,attributeFilter:['class']});

const impactPrompts=['designed for more connection & IRL hangouts','make custom videos from viral favorites','designed for 4m+ patients & caregivers'];
shelf.querySelectorAll('[data-record]').forEach((link,i)=>{const label=link.querySelector('.jacket-title');label.replaceChildren();const impact=document.createElement('span');impact.textContent=impactPrompts[i];const project=document.createElement('small');project.textContent=cabinetProjects[i].title;label.append(impact,project);link.setAttribute('aria-label',cabinetProjects[i].title+' — '+impactPrompts[i]);});
const contactNote=document.querySelector('#home .rail .desk-note');contactNote.setAttribute('aria-label','contact me');contactNote.querySelector('.menu-label').textContent='contact me';contactNote.querySelector('.written-hello').innerHTML='contact<br>me';
