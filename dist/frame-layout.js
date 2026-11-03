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
// [design-approved:composition-measurement] CSS owns size; this observer reserves the rendered artwork envelope, including feet/shadow.
function fitHomeFrame(){
 if(document.body.dataset.page!=='home'||!homeFrame.getBoundingClientRect().width)return;
 homeFrame.style.setProperty('--header-height',document.querySelector('.masthead').getBoundingClientRect().height+'px');
 const scene=cabinetScene.getBoundingClientRect(),scale=scene.width/cabinetScene.offsetWidth||1;
 const shell=cabinetScene.querySelector('.player-wood-shell');
 if(!shell)return;
 const bounds=[shell,...cabinetScene.querySelectorAll('.edge-disc')].filter(el=>el.getBoundingClientRect().width&&getComputedStyle(el).visibility!=='hidden').map(el=>el.getBoundingClientRect());
 const top=Math.min(...bounds.map(r=>r.top))-scene.top-12;
 const bottom=Math.max(...bounds.map(r=>r.bottom))-scene.top+24;
 homeFrame.style.setProperty('--visible-scene-top',top/scale+'px');
 homeFrame.style.setProperty('--visible-scene-height',(bottom-top)/scale+'px');
 const utilities=homeFrame.querySelector(':scope>.corner-utilities');
 if(utilities){const needed=utilities.querySelector('.local-time').scrollWidth;const column=(homeFrame.clientWidth-parseFloat(getComputedStyle(homeFrame).paddingLeft)*2-landingNavigation.querySelector('.rail').getBoundingClientRect().width)/2;homeFrame.toggleAttribute('data-support-row',innerWidth>=1000&&column<needed+16)}
 // [design-approved:viewport-budget] Measure every occupied row, including wrapped utilities.
 // Shrink artwork only; fixed readable text and usable targets define the scrolling floor.
 if(innerWidth>600&&!document.body.hasAttribute('data-large-text')){
  const styles=getComputedStyle(homeFrame),gutter=parseFloat(getComputedStyle(document.body).paddingTop),available=innerHeight-4-2*gutter-document.querySelector('.masthead').getBoundingClientRect().height;
  const intro=homeFrame.querySelector('.hero-copy').getBoundingClientRect().height,nav=landingNavigation.getBoundingClientRect().height,footer=utilities?.getBoundingClientRect().height||0,gap=parseFloat(styles.rowGap),extra=parseFloat(styles.paddingTop);
  const landscape=innerWidth>=1000&&innerHeight<=820,separate=!landscape&&(innerWidth<1000||homeFrame.hasAttribute('data-support-row'));
  const required=(landscape?Math.max(intro,bottom-top):intro+(bottom-top))+(separate?nav+footer:Math.max(nav,footer))+gap*(landscape?1:separate?3:2)+extra;
  const current=scene.width,maxWidth=Math.min(landscape?(homeFrame.clientWidth-24)/2:homeFrame.clientWidth,1440),minWidth=Math.min(maxWidth,700);
  const next=Math.max(minWidth,Math.min(maxWidth,current+(available-required)*1.25));
  if(Math.abs(required-available)>2&&Math.abs(next-current)>1)homeFrame.style.setProperty('--fitted-scene-width',next+'px');
  homeFrame.style.removeProperty('--composition-unit');
 }else{homeFrame.style.removeProperty('--composition-unit');homeFrame.style.removeProperty('--fitted-scene-width')}
 const introBounds=homeFrame.querySelector('.hero-copy').getBoundingClientRect(),menuBounds=landingNavigation.getBoundingClientRect(),slotBounds=sceneSlot.getBoundingClientRect();
 const prior=Number(sceneSlot.dataset.balance||0),balance=innerWidth>=1000&&innerHeight<=820?0:prior+(introBounds.bottom+menuBounds.top)/2-(slotBounds.top+slotBounds.height/2);
 sceneSlot.dataset.balance=String(balance);sceneSlot.style.translate='0 '+balance+'px';
 homeFrame.dataset.fit=document.documentElement.scrollHeight>innerHeight+2?'scroll-required':'viewport';
}
let frameFitPending=false;
function queueFrameFit(){if(frameFitPending)return;frameFitPending=true;requestAnimationFrame(()=>{frameFitPending=false;fitHomeFrame()});}
const frameObserver=new ResizeObserver(queueFrameFit);
[document.querySelector('.masthead'),homeFrame.querySelector('.hero-copy'),sceneReadout,sceneSlot,landingNavigation].filter(Boolean).forEach(el=>frameObserver.observe(el));
window.addEventListener('resize',queueFrameFit);
window.addEventListener('hashchange',queueFrameFit);window.addEventListener('playergeometrychange',queueFrameFit);
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
if(roleLine){roleLine.classList.add('role-line');roleLine.textContent='product designer | AI systems thinker';const engraving=document.createElementNS('http://www.w3.org/2000/svg','svg');engraving.classList.add('deck-engraving');engraving.setAttribute('viewBox','0 0 300 20');engraving.innerHTML='<text x="298" y="14" text-anchor="end" fill="#604522" font-family="DM Sans, sans-serif" font-size="13">product designer | AI systems thinker</text>';engraving.setAttribute('aria-hidden','true');cabinetScene.querySelector('.independent-deck').append(engraving);}
