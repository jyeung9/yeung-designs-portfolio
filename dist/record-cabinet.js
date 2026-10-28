// A readable record collection, using Julie's supplied project order and descriptions.
const cabinetProjects=[
 {title:'titanic’s end',subtitle:'community app',tone:'blue',card:sourceCards[0],description:'a community app designed to make connection fun and encourage more in-person hangouts.'},
 {title:'capi',subtitle:'first intelligence',tone:'green',card:sourceCards[2],description:'a social media and content creation app that helps people quickly create customized videos from their favorite viral content.'},
 {title:'connectmyhealth',subtitle:'centralsquare',tone:'red',card:sourceCards[1],description:'designing a net-new mobile app for 4m+ patients and their caregivers to connect with providers and understand their test results.'}
];
function jacketArt(tone){return `<span class="jacket-art ${tone}" aria-hidden="true"><span class="jacket-orbit"><i></i><i></i><i></i><i></i><b></b></span></span>`}
cards.splice(0,cards.length,...cabinetProjects.map(p=>p.card));
cabinetProjects.forEach((p,i)=>{p.card.querySelector('h3').textContent=p.title;p.card.querySelector('small').textContent=`0${i+1} / ${p.subtitle}`;p.card.querySelector('p').textContent=p.description;collection.append(p.card)});
sourceCards[1].querySelector('.skill-chips').innerHTML='<li>product design</li><li>mobile ux</li><li>healthcare</li>';
showRecord(0);
const cabinetScene=document.querySelector('.solo-player-scene');cabinetScene.classList.add('cabinet-scene');
const shelf=document.createElement('nav');shelf.className='cabinet-shelf';shelf.setAttribute('aria-label','featured case studies and other work');
shelf.innerHTML=cabinetProjects.map((p,i)=>`<a class="cabinet-record" href="#work" data-record="${i}" aria-label="view ${p.title} — ${p.subtitle}">${jacketArt(p.tone)}<span class="jacket-title">${p.title.replace("connectmyhealth","connect<wbr>myhealth")}</span></a>`).join('')+`<a class="cabinet-record extras-stack" href="#explorations" aria-label="other fun stuff"><span class="stack-art" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span><span class="jacket-title">other fun stuff</span></a>`;
shelf.querySelectorAll('[data-record]').forEach(a=>a.addEventListener('click',()=>showRecord(Number(a.dataset.record))));cabinetScene.append(shelf);
const body=document.createElement('div');body.className='cabinet-body';body.setAttribute('aria-hidden','true');cabinetScene.prepend(body);
// Headphones own playback; the turntable continues to reflect confirmed audio state.
const playFromHeadphones=musicButton.onclick;musicButton.onclick=null;musicButton.tabIndex=-1;musicButton.setAttribute('aria-hidden','true');musicButton.classList.add('display-only-player');
const phones=document.createElement('button');phones.type='button';phones.className='cabinet-headphones';phones.setAttribute('aria-label','play music');phones.setAttribute('aria-pressed','false');
phones.innerHTML=`<svg viewBox="0 0 130 150" aria-hidden="true"><defs><linearGradient id="phoneMetal"><stop stop-color="#384244"/><stop offset=".3" stop-color="#b9c4c3"/><stop offset=".55" stop-color="#faf9ed"/><stop offset="1" stop-color="#687574"/></linearGradient><linearGradient id="phonePad"><stop stop-color="#151c1c"/><stop offset=".5" stop-color="#424d4b"/><stop offset="1" stop-color="#131c1a"/></linearGradient></defs><path d="M25 100V65C25 6 105 6 105 65v35" fill="none" stroke="#33403d" stroke-width="14"/><path d="M25 92V65C25 6 105 6 105 65v27" fill="none" stroke="url(#phoneMetal)" stroke-width="7"/><g transform="rotate(-12 28 104)"><rect x="13" y="78" width="25" height="50" rx="11" fill="url(#phoneMetal)"/><rect x="29" y="81" width="15" height="45" rx="8" fill="url(#phonePad)"/></g><g transform="rotate(12 102 104)"><rect x="92" y="78" width="25" height="50" rx="11" fill="url(#phoneMetal)"/><rect x="85" y="81" width="15" height="45" rx="8" fill="url(#phonePad)"/></g></svg><span>play music</span>`;
phones.onclick=()=>playFromHeadphones();cabinetScene.append(phones);
new MutationObserver(()=>{const playing=musicButton.classList.contains('playing');phones.setAttribute('aria-pressed',String(playing));phones.setAttribute('aria-label',playing?'pause music':'play music');phones.querySelector('span').textContent=playing?'pause music':'play music'}).observe(musicButton,{attributes:true,attributeFilter:['class']});
document.getElementById('headphone-hint').textContent='use the headphones to play or pause music.';
// Extra projects are named as supplied, without invented roles, results or links.
const extraPage=document.getElementById('explorations');
extraPage.querySelector('h2').textContent='other fun stuff.';
extraPage.querySelector('.strategy-feature').insertAdjacentHTML('beforebegin','<div class="extra-project-list"><article><h3>everyone votes</h3><p>voter platform</p></article><article><h3>paypal</h3></article></div>');
extraPage.querySelector('.exploration-heading h3').textContent='school & outside-of-work projects';
extraPage.querySelector('.exploration-record:last-child').remove();
// Peripheral sketches remain behind the work and outside the reading column.
const sketchPaths=[
 ['study-flow','<rect x="12" y="48" width="40" height="30" rx="5"/><path d="M52 63h28m-6-5 6 5-6 5"/><rect x="80" y="18" width="58" height="32" rx="5"/><rect x="80" y="84" width="58" height="32" rx="5"/><path d="M66 63V34h14M66 63v37h14"/>'],
 ['study-orbits','<ellipse cx="80" cy="80" rx="61" ry="25" transform="rotate(-35 80 80)"/><ellipse cx="80" cy="80" rx="61" ry="25" transform="rotate(35 80 80)"/><circle cx="80" cy="80" r="4"/><circle cx="128" cy="46" r="5"/>'],
 ['study-layout','<rect x="25" y="16" width="92" height="125" rx="8"/><path d="M38 36h66M38 49h43M38 110h60M38 123h38"/><rect x="38" y="63" width="29" height="32"/><rect x="76" y="63" width="28" height="32"/><path d="M16 9h15m-15 0v15m110 124h-15m15 0v-15"/>'],
 ['study-wave','<path d="M8 82h140M14 115V30M15 82q15-60 30 0t30 0t30 0t30 0"/><circle cx="45" cy="82" r="3"/>']
];
studies.insertAdjacentHTML('beforeend',sketchPaths.map(([cls,path])=>`<svg class="${cls}" viewBox="0 0 160 160"><g fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">${path}</g></svg>`).join(''));
requestAnimationFrame(fitWelcome);

// A floating shelf contains only the three featured projects; extras stay in side quests.
cabinetScene.querySelector('.cabinet-body').remove();
shelf.querySelector('.extras-stack').remove();
shelf.setAttribute('aria-label','featured case studies');
let touchedSleeve=null;
shelf.querySelectorAll('.cabinet-record').forEach(link=>{
 link.addEventListener('pointerdown',event=>{if(event.pointerType==='touch' && touchedSleeve!==link){touchedSleeve=link;link.dataset.previewTap='true';shelf.querySelectorAll('.cabinet-record').forEach(other=>other.classList.toggle('touch-preview',other===link));}});
 link.addEventListener('click',event=>{if(link.dataset.previewTap){event.preventDefault();event.stopImmediatePropagation();delete link.dataset.previewTap;}},true);
});
document.addEventListener('pointerdown',event=>{if(!shelf.contains(event.target)){touchedSleeve=null;shelf.querySelectorAll('.touch-preview').forEach(link=>link.classList.remove('touch-preview'));}});
