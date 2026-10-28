const params = new URLSearchParams(location.search);
const direction = 'afterglow';
document.body.classList.add(direction);

const projects = [
 {name:"titanic’s end",category:'01 / community + systems',desc:'an app for camp life, shaped by the experience of bringing a community together.',href:'#titanic',art:`<div class="te-art project-art"><svg viewBox="0 0 300 200" aria-hidden="true"><defs><linearGradient id="ice" x2="1" y2="1"><stop stop-color="#edf7fc"/><stop offset=".4" stop-color="#93a9c6"/><stop offset=".55" stop-color="#34415b"/><stop offset=".75" stop-color="#f3e2cc"/><stop offset="1" stop-color="#7f93b1"/></linearGradient></defs><g stroke="#c4d9e8" stroke-width=".7" fill="none" opacity=".3"><ellipse cx="150" cy="135" rx="110" ry="35"/><ellipse cx="150" cy="135" rx="85" ry="25"/></g><path d="M75 140 115 72 138 96 171 31 225 142 149 165Z" fill="url(#ice)"/><path d="m171 31-22 134-11-69m11 69 76-23-54-111M75 140l74 25-34-93" fill="none" stroke="#d9e8f2" opacity=".55"/></svg><span class="project-tag">concept artwork / community</span></div>`},
 {name:'connectmyhealth',category:'02 / healthcare + mobile',desc:'bringing a desktop health experience to mobile, helping people stay informed about their care.',href:'https://www.notion.so/How-I-Empowered-4m-Users-to-Make-Informed-Healthcare-Decisions-649b8aee46924d63a12dc8f0aa4ecf7a?pvs=4',art:'<div class="health-art project-art"><div class="health-lines"></div><span class="health-symbol">✳</span><span class="project-tag">concept artwork / care</span></div>'},
 {name:'capi',category:'03 / creativity + social',desc:'helping people make their own videos with templates and formats they already love.',href:'https://www.notion.so/Empowering-the-Creation-of-Personalized-Expressive-and-Fun-Stories-2a55db5f5e7e80fca480cdc137fe6a0b',art:'<div class="capi-art project-art"><div class="film" aria-hidden="true"><b>c</b><b>✳</b><b></b></div><span class="project-tag">concept artwork / expression</span></div>'}
];
const wave='<span class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span>';
const soundControl='';
const clockMarkup='<div class="local-time"><strong class="clock"></strong><br><span class="time-message"></span><button class="ambient-toggle" aria-label="Switch local day or night appearance">switch light</button></div>';
const seq=`<div class="sequencer"><div class="seq-top"><span>rhythm studies / 001</span><span>pattern study · make it yours</span></div><div class="seq-grid">${['pulse','texture','tone'].map((name,row)=>`<label>${name}</label>${Array.from({length:8},(_,i)=>`<button class="pad" data-row="${row}" data-step="${i}" aria-label="${name}, step ${i+1}" aria-pressed="${(row===0&&i%4===0)||(row===1&&i%2===1)||(row===2&&i===2)}"></button>`).join('')}`).join('')}</div><div class="seq-bottom"><span>tap a square. find your rhythm.</span><span>● visual rhythm study</span></div></div>`;
document.getElementById('app').innerHTML=`
<header class="masthead"><a href="#home" class="brand"><span class="brand-mark" aria-hidden="true">y.</span>yeung designs</a><nav aria-label="contact links"><a class="external" href="https://www.linkedin.com/in/julie-yeung9/" target="_blank" rel="noopener">linkedin</a><a class="external" href="https://www.julieyeungdesigns.me/contact-me" target="_blank" rel="noopener">contact</a><a class="external" href="https://drive.google.com/file/d/18085sSWS6cHZ3y5hkS9DhmdBfyQf00_2/view?usp=sharing" target="_blank" rel="noopener">résumé</a></nav></header>
<nav class="rail" aria-label="page sections"><a href="#work"><span class="dock-art sleeve-art" aria-hidden="true"><i></i></span><span>browse collection</span></a><a href="#about"><span class="dock-art profile-art" aria-hidden="true">j.</span><span>about me</span></a><a href="#contact"><span class="dock-art letter-art" aria-hidden="true"></span><span>say hello</span></a></nav>
<main><section id="home" class="hero ${direction==='afterglow'?'grid-surface':''}"><div class="hero-top eyebrow"><span class="status">product designer · systems thinker</span><span class="edition">${direction==='studio'?'a space for ideas to become things':direction==='orbit'?'a small corner of the universe':'a space for good things to happen'}</span></div><div class="hero-copy"><div class="greeting">你好, i'm julie yeung <span aria-hidden="true">${direction==='studio'?'':'✳'}</span></div><h1>i design for <br><em>creativity</em><br class="not-studio"> & connection.</h1><p>digital products. thoughtful systems.<br>a little curiosity about what’s possible.</p><a class="text-link" href="#work">explore my work <span aria-hidden="true"></span></a></div>${direction==='studio'?seq:`<div class="art-stage turntable-stage"><div class="turntable" aria-label="Record player. Music is off."><div class="deck-surface"><span class="deck-brand">julie’s listening room</span><div class="platter"><div class="record"><div class="record-label"><span>make yourself<br>at home.</span><small>side a · a little connection</small></div></div><i class="spindle"></i></div><div class="tonearm"><i class="arm-pivot"></i><i class="arm-shaft"></i><i class="arm-head"></i></div><span class="speed-label">33⅓ / stereo</span><button class="deck-power" aria-label="Open music player"><span class="power-light"></span>listen</button></div></div><div class="now-playing" aria-live="polite"><span class="playback-status">music is off</span><span class="track-title">make yourself at home.</span></div></div>`}<div class="hero-bottom">${soundControl}${clockMarkup}</div></section>
<section class="section" id="work"><div class="section-head"><div><div class="eyebrow">01 / selected work</div><h2>different worlds. human things.</h2></div><p>creating, caring, coming together.<br>three ways into my work.</p></div><div class="projects">${projects.map(p=>`<a class="project" href="${p.href}" ${p.href.startsWith('http')?'target="_blank" rel="noopener"':''}>${p.art}<small>${p.category}</small><h3>${p.name}<span aria-hidden="true"></span></h3><p>${p.desc}</p></a>`).join('')}</div></section>
<section class="section about" id="about"><div><div class="eyebrow">02 / the person behind the pixels</div><h2>care is part of the craft.</h2></div><div><p>i care about the people on the other side of the screen. their time, their experience, and the spaces we create together.</p><p>my work brings together product design, systems thinking, and hands-on community leadership. i’m drawn to healthcare, creative tools, and experiences that help people feel connected.</p><a class="text-link" href="https://www.julieyeungdesigns.me/About-Me" target="_blank" rel="noopener">a little more about me <span></span></a></div></section>
<section class="section contact" id="contact"><div><div class="eyebrow">03 / an open invitation</div><h2>good things start<br>with a hello.</h2></div><div class="contact-links"><a class="external" href="https://www.julieyeungdesigns.me/contact-me" target="_blank" rel="noopener">get in touch</a><a class="external" href="https://www.linkedin.com/in/julie-yeung9/" target="_blank" rel="noopener">linkedin</a><a class="external" href="https://drive.google.com/file/d/18085sSWS6cHZ3y5hkS9DhmdBfyQf00_2/view?usp=sharing" target="_blank" rel="noopener">résumé</a></div></section></main><footer class="footer"><span>julie yeung / made with intention</span><span>thanks for spending a little time here ✳</span></footer>
<dialog id="te-dialog"><button aria-label="Close project overview">×</button><div class="mono">titanic’s end / project overview</div><h2>community, by design.</h2><p>an app for a closer-knit camp community, informed by julie’s camp operations leadership. the work connects product design, design systems, and the practical needs of camp life.</p><p>the full case study is not part of this landing-page preview. this overview uses the project details discussed so far.</p></dialog>`;
if(direction==='afterglow'){
 document.querySelector('.hero-copy').innerHTML=`<div class="greeting">你好, i'm julie yeung</div><h1 class="connection-headline"><span>i design for</span><span class="headline-space" aria-hidden="true"></span><em>meaningful connection</em></h1><p>product designer, systems thinker</p><a class="text-link" href="#work">explore my work <span aria-hidden="true"></span></a>`;
 document.querySelector('.turntable-stage').outerHTML=`<div class="connection-object"><button class="headphone-control" aria-label="play music" aria-expanded="false" aria-controls="music-panel" aria-describedby="headphone-hint"><span class="vinyl-scene" aria-hidden="true"><img class="scene-day" src="assets/vinyl-corner-day.png" alt=""><img class="scene-night" src="assets/vinyl-corner-night.png" alt=""><span class="disc-detail"><img class="scene-day" src="assets/vinyl-corner-day.png" alt=""><img class="scene-night" src="assets/vinyl-corner-night.png" alt=""></span></span><span class="headphone-music-prompt">play music</span></button><span id="headphone-hint">hover for a gentle record wiggle. click or press enter to control music.</span></div>`;

}
// The room and the interactive player are independently rendered layers.
const corner=document.querySelector('.connection-object');
corner.innerHTML=`<div class="conversation-scene solo-player-scene"><button class="headphone-control independent-player" aria-label="play music" aria-expanded="false" aria-controls="music-panel" aria-describedby="headphone-hint"><span class="independent-deck" aria-hidden="true"><span class="live-platter"><span class="live-record"><span class="live-label">j.</span></span><span class="live-spindle"></span></span><span class="live-arm"><i></i></span><span class="deck-dot"></span><span class="deck-signature">julie / side a</span></span><span class="headphone-music-prompt">play music</span></button></div><span id="headphone-hint">hover over the player for music controls. click or press enter to play or pause music.</span>`;
const intro=document.querySelector('.hero-copy');
intro.innerHTML=`<div class="greeting">你好, i'm julie yeung</div><h1 class="accessible-headline">i design for meaningful connection</h1><div class="headline-top" aria-hidden="true">i design for</div><div class="scene-slot"></div><div class="headline-bottom" aria-hidden="true">meaningful connection</div><p>product designer, systems thinker</p><a class="text-link" href="#work">explore my work</a>`;
intro.querySelector('.scene-slot').appendChild(corner);
// Existing published pages are retained until the case studies are rebuilt.
const teDialog=document.getElementById('te-dialog');
document.querySelector('[href="#titanic"]').addEventListener('click',e=>{e.preventDefault();teDialog.showModal()});
teDialog.querySelector('button').onclick=()=>teDialog.close();
teDialog.addEventListener('click',e=>{if(e.target===teDialog)teDialog.close()});
const localHour=new Date().getHours();let isNight=localHour<7||localHour>=19;const savedGridTheme=sessionStorage.getItem("julie-vinyl-theme");if(savedGridTheme)isNight=savedGridTheme==="night";
function updateAppearance(){document.body.classList.toggle('nighttime',isNight);document.body.classList.toggle('daylight',!isNight);document.querySelector('.time-message').textContent=isNight?'a quiet evening, wherever you are.':'a little light, wherever you are.';document.querySelector('.ambient-toggle').setAttribute('aria-checked',String(isNight))}
function clock(){if(window.renderWorldClock){window.renderWorldClock();return}document.querySelector('.clock').textContent=new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',hour12:false})+' / your local time'}
clock();updateAppearance();setInterval(clock,30000);document.querySelector('.ambient-toggle').onclick=()=>{isNight=!isNight;sessionStorage.setItem('julie-vinyl-theme',isNight?'night':'day');updateAppearance()};
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){document.querySelectorAll('.rail a').forEach(a=>a.classList.toggle('current',a.hash==='#'+entry.target.id))}})},{rootMargin:'-15% 0px -45% 0px',threshold:0});document.querySelectorAll('main>section').forEach(s=>observer.observe(s));

// Direct audio keeps playback within the record player. Supply licensed files in music-tracks.js.
const musicButton=document.querySelector('.independent-player');
const audio=new Audio();audio.preload='none';
const tracks=window.PORTFOLIO_TRACKS||[];let trackIndex=-1;
const musicNote=document.createElement('p');musicNote.className='music-note';musicNote.setAttribute('role','status');musicNote.hidden=true;
document.querySelector('.scene-slot').after(musicNote);
function musicState(playing){musicButton.classList.toggle('playing',playing);const label=playing?'pause music':'play music';musicButton.setAttribute('aria-label',label);musicButton.setAttribute('aria-pressed',String(playing));musicButton.querySelector('.headphone-music-prompt').textContent=label;}
function loadTrack(){if(!tracks.length)return false;const choices=tracks.map((_,i)=>i).filter(i=>i!==trackIndex);trackIndex=choices.length?choices[Math.floor(Math.random()*choices.length)]:0;const t=tracks[trackIndex];audio.src=t.src;const label=document.querySelector('.live-label');label.replaceChildren();if(t.artwork){const img=document.createElement('img');img.src=t.artwork;img.alt='';label.append(img)}else label.textContent='j.';musicNote.textContent=t.title+(t.artist?' · '+t.artist:'');return true;}
musicButton.onclick=async e=>{if(!audio.paused){audio.pause();return}if(!audio.src&&!loadTrack()){musicNote.hidden=false;musicNote.textContent='the listening room is getting ready. music coming soon.';return}try{await audio.play();musicNote.hidden=false}catch{musicNote.hidden=false;musicNote.textContent='couldn’t start music. tap the record to try again.'}};
audio.addEventListener('playing',()=>musicState(true));['pause','waiting','ended','error'].forEach(event=>audio.addEventListener(event,()=>musicState(false)));
audio.addEventListener('ended',()=>{if(loadTrack())audio.play().catch(()=>musicState(false))});
musicButton.removeAttribute('aria-expanded');musicButton.removeAttribute('aria-controls');musicState(false);

// Motor velocity is eased from confirmed playback; hover movement never starts audio.
(()=>{
 const player=document.querySelector('.independent-player'),record=player.querySelector('.live-record'),platter=player.querySelector('.live-platter'),prompt=player.querySelector('.headphone-music-prompt');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let hovered=false,focused=false,angle=0,speed=0,last=0,raf=0,wiggleTime=0,hoverStarted=0;
 function frame(now){const dt=last?Math.min((now-last)/1000,.05):0;last=now;const playing=player.classList.contains('playing');const target=playing?200:0;
 speed+=(target-speed)*(1-Math.exp(-dt/(playing?1.4:1.1)));if(Math.abs(speed-target)<.12)speed=target;
 angle=(angle+speed*dt)%360;const wiggle=!playing&&speed<1&&(hovered||focused)&&!reduced.matches;
 wiggleTime=wiggle?wiggleTime+dt:0;const offset=wiggle?Math.sin(wiggleTime*4)*7:0;
 record.style.transform=`rotate(${reduced.matches?angle:angle+offset}deg)`;
 if(!reduced.matches&&(speed>0||playing||hovered||focused)){raf=requestAnimationFrame(frame)}else{raf=0;last=0}
 }
 function start(){if(!raf&&!document.hidden)raf=requestAnimationFrame(frame)}
 function setHover(value){if(value&&!hovered)hoverStarted=performance.now();hovered=value;player.classList.toggle('disk-hover',value);start()}
 player.addEventListener('pointermove',e=>{if(e.pointerType==='touch')return;const r=platter.getBoundingClientRect();const x=(e.clientX-r.left-r.width/2)/(r.width/2),y=(e.clientY-r.top-r.height/2)/(r.height/2);setHover(true);
 const box=prompt.getBoundingClientRect();const px=e.clientX+20+box.width>innerWidth-12?e.clientX-box.width-20:e.clientX+20;const py=e.clientY+20+box.height>innerHeight-12?e.clientY-box.height-20:e.clientY+20;
 prompt.style.left=Math.max(12,px)+'px';prompt.style.top=Math.max(12,py)+'px';player.classList.add('pointer-positioned');
 });
 player.addEventListener('pointerleave',()=>{setHover(false);player.classList.remove('pointer-positioned');prompt.style.left='';prompt.style.top=''});
 player.addEventListener('focus',()=>{focused=player.matches(':focus-visible');hoverStarted=performance.now();start()});player.addEventListener('blur',()=>{focused=false;start()});
 new MutationObserver(start).observe(player,{attributes:true,attributeFilter:['class']});
 reduced.addEventListener('change',()=>{speed=0;start()});document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(raf);raf=0;last=0}else start()});
})();

// Separate routes: no neighbouring page content is left below the active page.
document.querySelector('main').insertAdjacentHTML('beforeend','<section id="explorations" class="section explorations"><header class="page-heading"><div class="eyebrow">02 / beyond the main collection</div><h2>side quests.</h2></header><div class="strategy-feature"><div><div class="eyebrow">strategy / ongoing</div><h3>neon owl</h3><p>helping restructure a business.</p></div><ul class="skill-chips" aria-label="Neon Owl focus areas"><li>business strategy</li><li>business restructuring</li></ul><p class="case-status">case study in development</p></div><div class="exploration-heading"><h3>explorations</h3><p>more ways i’ve explored experiences, connection, and everyday tools.</p></div><div class="exploration-gallery"><a class="exploration-record" href="https://www.notion.so/Crafting-UX-for-Lyft-Branded-Automated-Water-Taxi-80602189956c4ceba41c067375544e15" target="_blank" rel="noopener"><img src="assets/adryft-hero.png" alt="adryft project hero"><h4>adryft</h4><ul class="skill-chips" aria-label="project focus"><li>ux design</li><li>onboard experiences</li></ul></a><a class="exploration-record" href="https://www.notion.so/Empowering-Music-Lovers-to-Share-Their-Love-for-Music-c665c00385c7453fabe35d240d8e3112?pvs=4" target="_blank" rel="noopener"><img src="assets/spotify-exchange-hero.png" alt="spotify exchange project hero"><h4>spotify exchange</h4><ul class="skill-chips" aria-label="project focus"><li>ux design</li><li>social experiences</li></ul></a><a class="exploration-record" href="https://www.notion.so/How-I-Enhanced-Workflow-by-Crafting-a-Cloud-Powered-Productivity-App-100b2256327c4375843291178cb584d4" target="_blank" rel="noopener"><img src="assets/cst-hero.png" alt="cst home project hero"><h4>cst home</h4><ul class="skill-chips" aria-label="project focus"><li>ux design</li><li>productivity tools</li></ul></a></div></section>');
const pages=[...document.querySelectorAll('main>section')];
function route(animate=false){const id=['work','explorations','about','contact'].includes(location.hash.slice(1))?location.hash.slice(1):'home';pages.forEach(s=>s.hidden=s.id!==id);document.querySelector('.footer').hidden=true;document.body.dataset.page=id;document.querySelectorAll('.rail a').forEach(a=>{a.classList.toggle('current',a.hash==='#'+id);a.setAttribute('aria-current',a.hash==='#'+id?'page':'false')});window.scrollTo({top:0,behavior:'instant'});const active=document.getElementById(id);active.classList.remove('page-enter');if(animate&&!matchMedia('(prefers-reduced-motion: reduce)').matches){requestAnimationFrame(()=>active.classList.add('page-enter'))}}
window.addEventListener('hashchange',()=>route(true));route();
const finish='wood';document.body.dataset.player=finish;
const chooser=document.createElement('nav');chooser.className='finish-picker';chooser.setAttribute('aria-label','compare record player finishes');chooser.innerHTML=['wood','chrome','jade'].map(f=>`<button aria-pressed="${f===finish}" data-finish="${f}">${f==='wood'?'01 / warm oak':f==='chrome'?'02 / chrome':'03 / jade'}</button>`).join('');document.querySelector('.scene-slot').after(chooser);chooser.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;document.body.dataset.player=b.dataset.finish;chooser.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));const url=new URL(location);url.searchParams.set('player',b.dataset.finish);history.replaceState(null,'',url)});
const covers=[null,'https://framerusercontent.com/images/M0dMpmpZOWbSsqpyVMpiC9zoYc.png?width=542&height=1125','https://framerusercontent.com/images/6pTcIh1jIKEQl0RiVaCh5H4fcMo.png?width=271&height=563'];
document.querySelectorAll('.project').forEach((card,i)=>{card.style.setProperty('--sleeve-index',i);const art=card.querySelector('.project-art');if(covers[i]){art.replaceChildren();const img=document.createElement('img');img.src=covers[i];img.alt=projects[i].name+' product screen from existing portfolio';art.append(img)}else{art.querySelector('.project-tag').textContent='hero artwork to come'};});
// Navigation is in flow: it never covers text at small sizes or large text zoom.
function placeNav(){const home=document.getElementById('home'),rail=document.querySelector('.rail');home.appendChild(rail);home.appendChild(document.querySelector('.hero-bottom'));rail.hidden=true;}
window.addEventListener('hashchange',placeNav);placeNav();

// The sleeves are separate physical objects, not part of a flattened scene image.
const sleeveLink=document.createElement('a');sleeveLink.href='#work';sleeveLink.className='scene-sleeves';sleeveLink.setAttribute('aria-label','browse collection (of work)');
sleeveLink.innerHTML=`<span class="sleeve-stack" aria-hidden="true"><span class="scene-sleeve sleeve-back"><span>capi</span></span><span class="scene-sleeve sleeve-middle"><span>care, connected.</span></span><span class="scene-sleeve sleeve-front"><span class="sleeve-orbit"></span><small>selected works / vol. 01</small><strong>good things<br>happen<br>together.</strong><span class="sleeve-credit">yeung designs</span></span></span><span class="sleeves-prompt">browse collection (of work)</span>`;
document.querySelector('.solo-player-scene').appendChild(sleeveLink);
// Wheel/swipe between whole sections; longer case-study content can scroll normally.
const sectionOrder=['home','work','explorations','about','contact'];let scrollEnergy=0,lastWheel=0,lockedUntil=0,touchY=null;
function stepSection(delta){const i=sectionOrder.indexOf(document.body.dataset.page),next=sectionOrder[i+delta];if(next){lockedUntil=performance.now()+1000;location.hash=next;return true}return false}
function atEdge(delta){return document.body.dataset.page==='home'||(delta>0?innerHeight+scrollY>=document.documentElement.scrollHeight-3:scrollY<=3)}
addEventListener('wheel',e=>{if(e.ctrlKey||e.target.closest('input,textarea,select,form')||document.querySelector('dialog[open]')||Math.abs(e.deltaX)>Math.abs(e.deltaY))return;const now=performance.now(),delta=Math.sign(e.deltaY);if(!atEdge(delta))return;e.preventDefault();if(now<lockedUntil){lastWheel=now;return}if(now-lastWheel>180)scrollEnergy=0;scrollEnergy+=e.deltaY;lastWheel=now;if(Math.abs(scrollEnergy)>65){stepSection(Math.sign(scrollEnergy));scrollEnergy=0}},{passive:false});
addEventListener('touchstart',e=>{touchY=e.target.closest('input,textarea,select,form')?null:e.touches[0].clientY},{passive:true});
addEventListener('touchend',e=>{if(touchY===null)return;const dy=touchY-e.changedTouches[0].clientY;touchY=null;if(Math.abs(dy)>65&&performance.now()>lockedUntil&&atEdge(Math.sign(dy)))stepSection(Math.sign(dy))},{passive:true});
addEventListener('keydown',e=>{if(e.target.closest('input,textarea,select,form')||!['PageDown','PageUp'].includes(e.key)||document.querySelector('dialog[open]'))return;const delta=e.key==='PageDown'?1:-1;if(atEdge(delta)){e.preventDefault();stepSection(delta)}});

const sharedTable=document.createElement('div');sharedTable.className='shared-table';sharedTable.setAttribute('aria-hidden','true');document.querySelector('.solo-player-scene').prepend(sharedTable);
// Status is normal layout content; it must never obscure the role or headline.
document.querySelector('.hero-copy').appendChild(musicNote);

// Each desk accessory is its own accessible navigation target.
const deskAccessories=document.createElement('div');deskAccessories.className='desk-accessories';deskAccessories.innerHTML=`<a class="desk-note" href="#contact" aria-label="say hello"><span class="note-paper" aria-hidden="true"><span>say<br>hello.</span><i class="desk-pen"></i></span></a><a class="desk-polaroid" href="#about" aria-label="about me"><span class="polaroid-paper" aria-hidden="true"><span class="portrait-placeholder">your photo<br>here</span><span class="photo-caption">about me</span></span></a>`;
document.querySelector('.solo-player-scene').appendChild(deskAccessories);
const deskHint=document.createElement('span');deskHint.className='desk-cursor-hint';deskHint.hidden=true;deskHint.setAttribute('aria-hidden','true');document.body.appendChild(deskHint);
for(const link of deskAccessories.querySelectorAll('a')){
 const show=e=>{deskHint.textContent=link.getAttribute('aria-label');deskHint.hidden=false;const r=link.getBoundingClientRect();const x=e?.clientX??r.right,y=e?.clientY??r.top;const box=deskHint.getBoundingClientRect();deskHint.style.left=Math.max(12,Math.min(innerWidth-box.width-12,x+18))+'px';deskHint.style.top=Math.max(12,Math.min(innerHeight-box.height-12,y+18))+'px'};
 link.addEventListener('pointermove',show);link.addEventListener('pointerleave',()=>deskHint.hidden=true);link.addEventListener('focus',()=>show());link.addEventListener('blur',()=>deskHint.hidden=true);link.addEventListener('click',()=>deskHint.hidden=true);
}
window.addEventListener('hashchange',()=>deskHint.hidden=true);
// Desk refinements: an intact note stack and an independently animated top sheet.
const note=document.querySelector('.desk-note');
note.innerHTML='<span class="note-stack" aria-hidden="true"></span><span class="note-paper" aria-hidden="true"><span class="written-hello">say hello</span></span><i class="desk-pen" aria-hidden="true"></i>';
note.addEventListener('click',e=>{e.preventDefault();if(note.classList.contains('peeling'))return;note.classList.add('peeling');setTimeout(()=>{location.hash='contact';note.classList.remove('peeling')},matchMedia('(prefers-reduced-motion: reduce)').matches?0:520)});
note.addEventListener('pointerleave',()=>{if(!note.classList.contains('peeling'))note.classList.remove('writing')});
const photo=document.querySelector('.portrait-placeholder');photo.className='portrait-crop';photo.innerHTML='<img src="assets/julie-profile.png" alt="Julie Yeung smiling">';
document.querySelector('.polaroid-paper').removeAttribute('aria-hidden');
const stand=document.createElement('span');stand.className='record-stand';stand.setAttribute('aria-hidden','true');document.querySelector('.scene-sleeves').appendChild(stand);
const sideMenu=document.createElement('nav');sideMenu.className='section-menu';sideMenu.setAttribute('aria-label','sections');sideMenu.innerHTML=[['home','welcome home'],['work','collection'],['about','about me'],['contact','say hello']].map(([id,label])=>`<a href="#${id}">${label}</a>`).join('');document.getElementById('app').appendChild(sideMenu);
function updateSideMenu(){sideMenu.hidden=document.body.dataset.page==='home';sideMenu.querySelectorAll('a').forEach(a=>{const current=a.hash==='#'+document.body.dataset.page;if(current)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')})}
addEventListener('hashchange',updateSideMenu);updateSideMenu();

// A wall keepsake, separate from the desk scene and its stacking contexts.
document.querySelector('.record-stand').remove();
const wallPhoto=document.querySelector('.desk-polaroid');wallPhoto.classList.add('wall-polaroid');document.querySelector('.greeting').appendChild(wallPhoto);
const contact=document.getElementById('contact');
contact.innerHTML=`<header class="page-heading"><div class="eyebrow">03 / an open invitation</div><h2>say hello.</h2><p>i’d love to hear from you.</p></header><form class="contact-form" action="https://formsubmit.co/hello.yeungcreative@gmail.com" method="POST"><div class="form-row"><label>name<input name="name" autocomplete="name" required maxlength="120"></label><label>email<input name="email" type="email" autocomplete="email" required maxlength="254"></label></div><label><span>phone number <small>(optional)</small></span><input name="phone" type="tel" autocomplete="tel" maxlength="40"></label><label>subject<input name="subject" required maxlength="200"></label><label>message<textarea name="message" rows="5" required maxlength="10000"></textarea></label><input class="form-honey" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true"><div class="form-actions"><button type="submit" class="submit-button">submit</button><button type="button" class="cancel-button">cancel</button></div><p class="form-status" role="status" hidden></p><p class="direct-email">or email <a href="mailto:hello.yeungcreative@gmail.com">hello.yeungcreative@gmail.com</a></p></form>`;
const form=contact.querySelector('form'),formStatus=form.querySelector('.form-status');
let sending=false;
form.querySelector('.cancel-button').onclick=()=>{if(sending)return;form.reset();formStatus.hidden=true;location.hash='home'};
form.addEventListener('submit',async e=>{e.preventDefault();if(sending||!form.reportValidity())return;const data=Object.fromEntries(new FormData(form));if(data._honey)return;sending=true;const submit=form.querySelector('[type=submit]');submit.disabled=true;form.querySelector('.cancel-button').disabled=true;submit.textContent='sending…';formStatus.hidden=false;formStatus.textContent='sending your message…';
 try{const response=await fetch('https://formsubmit.co/ajax/hello.yeungcreative@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({...data,_subject:data.subject,_template:'table'})});const result=await response.json();if(!response.ok||!(result.success===true||result.success==='true'))throw Error('not accepted');if(/activat/i.test(result.message||'')){formStatus.textContent='this form needs inbox activation before messages can be delivered. please use the email link below.'}else{formStatus.textContent='your message has been submitted. thank you for saying hello.';form.reset()}}
 catch{formStatus.textContent='your message could not be submitted. your text is still here — please try again or use the email link below.'}
 finally{sending=false;submit.disabled=false;form.querySelector('.cancel-button').disabled=false;submit.textContent='submit'}
});
// Internal navigation must stay in the local portfolio.
document.querySelector('.masthead nav a[href*="contact-me"]').href='#contact';
placeNav();
// Reserve the portrait's row before sizing the decorative desk into the viewport.
function fitWelcome(){const hero=document.getElementById('home');if(hero.hidden)return;const slot=hero.querySelector('.scene-slot');slot.style.width='';const copy=hero.querySelector('.hero-copy'),rail=hero.querySelector('.rail'),bottom=hero.querySelector('.hero-bottom');const hs=getComputedStyle(hero);const used=copy.getBoundingClientRect().height+rail.getBoundingClientRect().height+bottom.getBoundingClientRect().height+parseFloat(hs.rowGap)*2+parseFloat(hs.paddingTop)+parseFloat(hs.paddingBottom);const extra=used-hero.clientHeight;if(extra>0){slot.style.width=Math.max(100,slot.getBoundingClientRect().width-extra*(slot.querySelector('.conversation-scene').clientWidth/slot.querySelector('.conversation-scene').clientHeight)-8)+'px'}}
addEventListener('resize',fitWelcome);addEventListener('hashchange',()=>requestAnimationFrame(fitWelcome));document.fonts.ready.then(fitWelcome);new MutationObserver(fitWelcome).observe(musicNote,{attributes:true,attributeFilter:['hidden']});

// Full-bleed source imagery replaces decorative sleeve typography.
const sleeveImages=['assets/capi-hero.png','assets/healthcare-hero.png',null];
for(const [i,sleeve] of [...document.querySelectorAll('.scene-sleeve')].entries()){
 sleeve.replaceChildren();if(sleeveImages[i]){const img=document.createElement('img');img.src=sleeveImages[i];img.alt='';sleeve.appendChild(img)}else{const pending=document.createElement('span');pending.className='pending-cover';pending.textContent='titanic’s end · cover coming soon';sleeve.appendChild(pending)}
}
// Put the real CAPI artwork on the front of the resting stack.
const front=document.querySelector('.sleeve-front'),back=document.querySelector('.sleeve-back');const frontContent=[...front.childNodes],backContent=[...back.childNodes];front.replaceChildren(...backContent);back.replaceChildren(...frontContent);
const sourceCards=[...document.querySelectorAll('#work .project')];const cards=[sourceCards[0],sourceCards[1],sourceCards[2]];
cards[1].querySelector('img').src='assets/healthcare-hero.png';cards[2].querySelector('img').src='assets/capi-hero.png';
const collection=document.querySelector('#work .projects');collection.classList.add('record-browser');collection.setAttribute('aria-label','case-study record collection');
let recordIndex=0;
const controls=document.createElement('div');controls.className='record-controls';controls.innerHTML='<button type="button" class="previous-record" aria-label="previous case study">previous</button><span class="record-count" aria-live="polite"></span><button type="button" class="next-record" aria-label="next case study">next</button>';collection.after(controls);
function showRecord(index){
 recordIndex=Math.max(0,Math.min(cards.length-1,index));
 collection.querySelectorAll('.neighbor-record').forEach(el=>el.remove());
 cards.forEach((card,i)=>{card.hidden=i!==recordIndex;card.classList.remove('record-reveal')});
 for(const [offset,side] of [[-1,'previous'],[1,'next']]){
  const neighbor=cards[recordIndex+offset];if(!neighbor)continue;
  const button=document.createElement('button');button.type='button';button.className='neighbor-record '+side;
  button.setAttribute('aria-label','view '+neighbor.querySelector('h3').textContent);
  const art=neighbor.querySelector('.project-art').cloneNode(true);
  art.setAttribute('aria-hidden','true');art.querySelectorAll('[id]').forEach(el=>{const old=el.id;el.id=old+'-preview';art.querySelectorAll('[fill]').forEach(shape=>{if(shape.getAttribute('fill')===`url(#${old})`)shape.setAttribute('fill',`url(#${el.id})`)})});
  button.append(art);button.onclick=()=>{showRecord(recordIndex+offset);cards[recordIndex].focus()};collection.append(button);
 }
 requestAnimationFrame(()=>cards[recordIndex].classList.add('record-reveal'));
 controls.querySelector('.record-count').textContent=`${recordIndex+1} / ${cards.length} · ${cards[recordIndex].querySelector('h3').textContent}`;
 controls.querySelector('.previous-record').disabled=recordIndex===0;
 controls.querySelector('.next-record').disabled=recordIndex===cards.length-1;
}
controls.querySelector('.previous-record').onclick=()=>showRecord(recordIndex-1);controls.querySelector('.next-record').onclick=()=>showRecord(recordIndex+1);
collection.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();showRecord(recordIndex+(e.key==='ArrowRight'?1:-1));cards[recordIndex].focus()}});showRecord(recordIndex);
const iconMarkup={home:'<span class="menu-home" aria-hidden="true">⌂</span>',work:'<span class="dock-art sleeve-art" aria-hidden="true"><i></i></span>',about:'<span class="dock-art profile-art" aria-hidden="true">j.</span>',contact:'<span class="dock-art letter-art" aria-hidden="true"></span>'};
sideMenu.querySelectorAll('a').forEach(a=>{const label=a.textContent;a.innerHTML=iconMarkup[a.hash.slice(1)]+`<span>${label}</span>`});
placeNav();requestAnimationFrame(fitWelcome);

const projectSkills=[['product design','design systems','community operations','ai-assisted development'],['product design','mobile ux','responsive design'],['product design','design systems','creative tools']];
const projectTitles=['titanic’s end app','connectmyhealth','capi ai'];
sourceCards.forEach((card,i)=>{card.querySelector('h3').textContent=projectTitles[i];const list=document.createElement('ul');list.className='skill-chips';list.setAttribute('aria-label','project skills and focus');for(const skill of projectSkills[i]){const li=document.createElement('li');li.textContent=skill;list.appendChild(li)}card.appendChild(list)});
const explorationLink=document.createElement('a');explorationLink.href='#explorations';explorationLink.innerHTML='<span class="dock-art sleeve-art" aria-hidden="true"><i></i></span><span>side quests</span>';sideMenu.querySelector('[href="#work"]').after(explorationLink);
showRecord(0);updateSideMenu();

// Keep object navigation on home and a quiet text-only rail on other sections.
document.querySelector('.masthead nav a[href="#contact"]').remove();
wallPhoto.querySelector('.photo-caption').remove();
sideMenu.querySelectorAll('a').forEach(a=>{a.textContent=a.querySelector('span:last-child')?.textContent||a.textContent});
const studies=document.createElement('div');studies.className='grid-studies';studies.setAttribute('aria-hidden','true');
studies.innerHTML=`<svg class="study-selection" viewBox="0 0 180 160"><g fill="none" stroke="currentColor" stroke-width="1"><rect x="25" y="25" width="108" height="86" stroke-dasharray="4 5"/><path d="M20 30v-10h10m98 0h10v10m0 76v10h-10m-98 0h-10v-10"/><path d="m118 93 9 30 6-10 12-4Z"/></g></svg><svg class="study-curves" viewBox="0 0 180 180"><g fill="none" stroke="currentColor" stroke-width="1"><path d="M20 130H160M40 150V20M25 116Q80 130 92 70T150 34"/><circle cx="92" cy="70" r="4"/><path d="m63 38 12 8-10 8m29-8h22m-22 6h22"/></g></svg>`;
document.getElementById('home').prepend(studies);
const about=document.getElementById('about'),aboutCopy=about.children[1];
const aboutLayout=document.createElement('div');aboutLayout.className='about-layout';
const portrait=document.createElement('figure');portrait.className='about-polaroid';
portrait.innerHTML=wallPhoto.innerHTML;portrait.querySelector('img').alt='Julie Yeung smiling';
aboutLayout.append(portrait,aboutCopy);about.append(aboutLayout);
requestAnimationFrame(fitWelcome);
