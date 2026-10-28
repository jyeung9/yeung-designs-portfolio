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
// Decorative linework grows from left to right; its final sprout meets the last n.
const vineHost=document.querySelector('.headline-bottom');vineHost.classList.add('vine-heading');
const vine=document.createElementNS('http://www.w3.org/2000/svg','svg');vine.classList.add('connection-vine');vine.setAttribute('viewBox','0 0 700 90');vine.setAttribute('preserveAspectRatio','none');vine.setAttribute('aria-hidden','true');vine.innerHTML='<defs><linearGradient id="leaf-green"><stop stop-color="#9ab451"/><stop offset="1" stop-color="#3d6e39"/></linearGradient><mask id="vine-reveal" maskUnits="userSpaceOnUse" x="-30" y="-50" width="770" height="200"><path class="vine-reveal" d="M0 45H710" stroke="white" stroke-width="200" pathLength="1"/></mask></defs><g mask="url(#vine-reveal)"><path d="M2 66 C30 -16 65 -16 90 49 S150 115 180 49 S240 -16 270 49 S330 115 360 49 S420 -16 450 49 S510 115 540 49 S600 -16 630 34 Q655 22 682 34" fill="none" stroke="#567c45" stroke-width="2.3"/><g fill="url(#leaf-green)"><path d="M45 5q-16-19-22-8 5 14 22 8M135 92q15-22 22-11-5 14-22 11M225 0q-16-19-22-8 5 14 22 8M315 98q15-22 22-11-5 14-22 11M405 0q-16-19-22-8 5 14 22 8M495 98q15-22 22-11-5 14-22 11M585 0q-16-19-22-8 5 14 22 8"/></g></g><g class="final-sprout"><path d="M682 34Q683 18 690 3" fill="none" stroke="#527d35" stroke-width="2"/><path d="M690 10Q670 1 679-10Q693-4 690 10M690 4Q691-14 705-13Q706 1 690 4" fill="url(#leaf-green)"/><g class="connection-heart"><path d="M690 3 Q695 -4 696 -16" fill="none" stroke="#527d35" stroke-width="2"/><path d="M696 -16 C690 -23 680 -27 683 -35 C686 -42 693 -40 696 -34 C700 -42 709 -40 711 -34 C714 -26 703 -20 696 -16Z" fill="#bf4d3c" stroke="#a84536" stroke-width="1"/></g></g>';vineHost.prepend(vine);

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
 const gapCount=mobile?1:2;
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
 const ledBounds=sceneReadout.getBoundingClientRect();
 homeFrame.style.setProperty('--visible-scene-top',`${(deckBounds.top-sceneBounds.top)/uiScale}px`);
 homeFrame.style.setProperty('--visible-scene-height',`${(ledBounds.bottom-deckBounds.top)/uiScale}px`);
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
