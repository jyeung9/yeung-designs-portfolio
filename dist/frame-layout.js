// [design-approved:player-first] Sections: intro, enlarged proportional player scene, four-item menu island. Records-upfront version is preserved in commit 586cd58.
// CSS owns geometry; this module allocates one shared artwork width from the frame budget.
const homeFrame=document.getElementById('home'),sceneSlot=homeFrame.querySelector('.scene-slot');
homeFrame.classList.toggle('tableless-preview',new URLSearchParams(location.search).get('table')!=='on');
const shelfStage=document.createElement('div');shelfStage.className='shelf-stage';
homeFrame.querySelector('.hero-copy').after(sceneSlot);
document.querySelector('#work .projects').before(shelfStage);
document.querySelector('#work .projects').hidden=true;
document.querySelector('#work .record-controls').hidden=true;
document.querySelector('#work .section-head p').textContent='Main design case studies — select a record to explore.';
for(const [hash,label] of [['#work','A-Side'],['#explorations','B-Side'],['#contact','contact me']]){const link=document.querySelector('.section-menu a[href="'+hash+'"]');if(link)link.textContent=label;}
document.querySelector('#work h2').textContent='A-Side';
document.querySelector('#explorations h2').textContent='B-Side';
shelfStage.append(shelf,cabinetScene.querySelector('.shelf-annotation'));
const sceneReadout=document.createElement('div');sceneReadout.className='scene-readout';
sceneReadout.append(nowPlaying);cabinetScene.append(sceneReadout);
const landingNavigation=document.createElement('div');landingNavigation.className='landing-navigation';
homeFrame.append(landingNavigation);
landingNavigation.append(homeFrame.querySelector('.rail'),homeFrame.querySelector('.hero-bottom'));
requestAnimationFrame(placeTrackHints);
// [design-approved:plain-headline] Remove the decorative heart and vines; preserve headline spacing.
document.querySelector('.headline-bottom').classList.add('plain-heading');

// Fit artwork into measured remaining space; the wide-desktop composition scales text and controls together.
// The minimum scene width is derived from 44px sleeve targets (18.9% of scene).
function fitHomeFrame(){
 if(document.body.dataset.page!=='home'||homeFrame.getBoundingClientRect().width===0)return;
 const uiScale=parseFloat(getComputedStyle(document.body).getPropertyValue('--wide-scale'))||1;
 homeFrame.style.setProperty('--header-height',`${document.querySelector('.masthead').getBoundingClientRect().height/uiScale}px`);
 const frameStyle=getComputedStyle(homeFrame);
 const sceneWidth=cabinetScene.getBoundingClientRect().width;
 const height=el=>(el?.getBoundingClientRect().height||0)/uiScale;
 const n=v=>parseFloat(v)||0;
 const mobile=matchMedia('(max-width:600px)').matches;
 // [design-approved:mobile-island] Three landing groups keep two equal 6%-of-scene gaps on phones too.
 const gapCount=2;
 const fixed=height(document.querySelector('.masthead'))+height(homeFrame.querySelector('.hero-copy'))
   +height(landingNavigation)
   +n(frameStyle.paddingTop)+n(frameStyle.paddingBottom)+n(getComputedStyle(sceneSlot).paddingBottom);
 const available=innerHeight/uiScale-fixed;
 const minimum=Math.ceil(44/.189);
 const contentWidth=homeFrame.clientWidth-n(frameStyle.paddingLeft)-n(frameStyle.paddingRight);
 const desired=(innerHeight-fixed)/(.5+gapCount*.06);
 const fitLimit=homeFrame.classList.contains('tableless-preview')?(available-28)/(.346667+gapCount*.06):available/(.5+gapCount*.06);
 const width=Math.min(1140,contentWidth,Math.max(minimum,uiScale>1?Math.min(desired,fitLimit):available/(.5+gapCount*.06)));
 homeFrame.style.setProperty('--fit-scene-width',`${Math.floor(width)}px`);
 homeFrame.dataset.fit=available<minimum*(.5+gapCount*.06)?'scroll-required':'viewport';
 // [design-approved:visible-scene-spacing] Measure the perspective-rendered deck, not its invisible parent box.
 const sceneBounds=cabinetScene.getBoundingClientRect();
 const deckBounds=cabinetScene.querySelector('.independent-deck').getBoundingClientRect();
 // [design-approved:integrated-player-front] Match the actual perspective-projected deck edge instead of guessing a percentage.
 const sceneScale=sceneBounds.width/cabinetScene.offsetWidth;
 cabinetScene.style.setProperty('--front-left',`${(deckBounds.left-sceneBounds.left)/sceneScale}px`);
 cabinetScene.style.setProperty('--front-width',`${deckBounds.width/sceneScale}px`);
 cabinetScene.style.setProperty('--front-top',`${(deckBounds.bottom-sceneBounds.top)/sceneScale-4}px`);
 const ledBounds=sceneReadout.getBoundingClientRect();
 homeFrame.style.setProperty('--visible-scene-top',`${(deckBounds.top-sceneBounds.top)/uiScale}px`);
 homeFrame.style.setProperty('--visible-scene-height',`${(ledBounds.bottom-deckBounds.top+10*sceneScale)/uiScale}px`);
}
let frameFitPending=false;
function queueFrameFit(){if(frameFitPending)return;frameFitPending=true;requestAnimationFrame(()=>{frameFitPending=false;fitHomeFrame()});}
const frameObserver=new ResizeObserver(queueFrameFit);
[document.querySelector('.masthead'),homeFrame.querySelector('.hero-copy'),sceneReadout,sceneSlot,landingNavigation].filter(Boolean).forEach(el=>frameObserver.observe(el));
window.addEventListener('resize',queueFrameFit);
window.addEventListener('hashchange',queueFrameFit);
document.fonts.ready.then(queueFrameFit);

// Round the tapered tabletop with the same physical CSS radius as the player.
// A measured path preserves the existing footprint without clipping off the corners.
function roundTableCorners(){
 const table=cabinetScene.querySelector('.shared-table');
 const {width:w,height:h}=table.getBoundingClientRect();
 if(!w||!h)return;
 const r=parseFloat(getComputedStyle(cabinetScene).getPropertyValue('--hardware-radius'))||12;
 const inset=w*.06;
 const path=`M ${inset+r} 0 H ${w-inset-r} Q ${w-inset} 0 ${w-inset+inset*r/h} ${r} L ${w-inset*r/h} ${h-r} Q ${w} ${h} ${w-r} ${h} H ${r} Q 0 ${h} ${inset*r/h} ${h-r} L ${inset-inset*r/h} ${r} Q ${inset} 0 ${inset+r} 0 Z`;
 table.style.setProperty('--table-outline',`path('${path}')`);
}
const tableCornerObserver=new ResizeObserver(roundTableCorners);
tableCornerObserver.observe(cabinetScene);

// [design-approved:a-side-type-pastels] Each routed page gets a semantic primary heading.
{ const old=document.querySelector("#work .section-head h2"); if(old){const heading=document.createElement("h1");heading.textContent=old.textContent;old.replaceWith(heading);} }

// [design-approved:engraved-role] Move the role line onto the wood; retain accessible text outside the aria-hidden player artwork.
const roleLine=homeFrame.querySelector('.hero-copy>p');
if(roleLine){roleLine.classList.add('engraving-accessible-copy');const engraving=document.createElementNS('http://www.w3.org/2000/svg','svg');engraving.classList.add('deck-engraving');engraving.setAttribute('viewBox','0 0 300 20');engraving.innerHTML='<text x="298" y="14" text-anchor="end" fill="#604522" font-family="DM Sans, sans-serif" font-size="13">product designer | AI systems thinker</text>';engraving.setAttribute('aria-hidden','true');cabinetScene.querySelector('.independent-deck').append(engraving);}
