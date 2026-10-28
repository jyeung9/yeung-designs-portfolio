// One layout owner: width sets object proportions; height never shrinks them.
const homeFrame=document.getElementById('home'),sceneSlot=homeFrame.querySelector('.scene-slot');
const shelfStage=document.createElement('div');shelfStage.className='shelf-stage';
homeFrame.querySelector('.hero-copy').after(shelfStage,sceneSlot);
shelfStage.append(shelf,cabinetScene.querySelector('.shelf-annotation'));
function fitFrame(){
 if(homeFrame.hidden)return;
 const mast=document.querySelector('.masthead').getBoundingClientRect().height;
 const css=getComputedStyle(homeFrame),gap=parseFloat(css.getPropertyValue('--frame-gap')),clearance=parseFloat(css.getPropertyValue('--scene-clearance'));
 const available=homeFrame.clientWidth-parseFloat(css.paddingLeft)-parseFloat(css.paddingRight);
 const width=Math.min(760,available);homeFrame.style.setProperty('--scene-width',width+'px');
 cabinetScene.style.width=width+'px';cabinetScene.style.transform='none';
 const scene=cabinetScene.getBoundingClientRect();
 const parts=[...cabinetScene.querySelectorAll('.independent-player,.shared-table,.edge-disc,.now-playing-led')].filter(e=>getComputedStyle(e).display!=='none');
 const bounds=parts.map(e=>e.getBoundingClientRect()),top=Math.min(...bounds.map(r=>r.top)),bottom=Math.max(...bounds.map(r=>r.bottom));
 const groupHeight=bottom-top;
 const dock=homeFrame.querySelector('.rail'),dockHeight=getComputedStyle(dock).display==='none'?0:dock.getBoundingClientRect().height;
 const rows=dockHeight?5:4;
 const required=homeFrame.querySelector('.hero-copy').getBoundingClientRect().height+shelfStage.getBoundingClientRect().height+groupHeight+clearance*2+dockHeight+homeFrame.querySelector('.hero-bottom').getBoundingClientRect().height+gap*(rows-1)+parseFloat(css.paddingTop)+parseFloat(css.paddingBottom);
 const availableHeight=innerHeight-mast;
 homeFrame.style.height=Math.max(availableHeight,Math.ceil(required))+'px';
 homeFrame.dataset.fit=required>availableHeight?'height-conflict':'fits';
 // Center the visible tabletop assembly, not its overflowing coordinate box.
 const offset=(sceneSlot.clientHeight-groupHeight)/2-(top-scene.top);
 cabinetScene.style.transform=`translateY(${offset}px)`;
 requestAnimationFrame(placeTrackHints);
}
addEventListener('resize',fitFrame);document.fonts.ready.then(fitFrame);addEventListener('hashchange',()=>requestAnimationFrame(fitFrame));requestAnimationFrame(fitFrame);
// Decorative linework grows from left to right; its final sprout meets the last n.
const vineHost=document.querySelector('.headline-bottom');vineHost.classList.add('vine-heading');
const vine=document.createElementNS('http://www.w3.org/2000/svg','svg');vine.classList.add('connection-vine');vine.setAttribute('viewBox','0 0 700 90');vine.setAttribute('preserveAspectRatio','none');vine.setAttribute('aria-hidden','true');vine.innerHTML='<defs><linearGradient id="leaf-green"><stop stop-color="#9ab451"/><stop offset="1" stop-color="#3d6e39"/></linearGradient><mask id="vine-reveal" maskUnits="userSpaceOnUse" x="-30" y="-50" width="770" height="200"><path class="vine-reveal" d="M0 45H710" stroke="white" stroke-width="200" pathLength="1"/></mask></defs><g mask="url(#vine-reveal)"><path d="M2 66 C24 25 52 25 76 52 S123 77 150 49 S197 23 225 49 S272 77 300 49 S347 23 375 49 S422 77 450 49 S497 23 525 49 S572 77 600 49 Q644 18 682 34" fill="none" stroke="#567c45" stroke-width="2.3"/><g fill="url(#leaf-green)"><path d="M40 41q-19-22-25-10 4 20 25 10M104 59q17-27 26-15-5 17-26 15M182 49q-18-25-27-13 5 17 27 13M265 52q18-25 27-12-8 16-27 12M341 54q-19-22-27-11 6 16 27 11M419 48q16-26 24-13-6 16-24 13M497 54q-17-27-26-15 6 17 26 15M579 47q17-22 26-11-6 15-26 11M641 27q-17-23-25-11 6 15 25 11"/></g></g><g class="final-sprout"><path d="M682 34Q683 18 690 3" fill="none" stroke="#527d35" stroke-width="2"/><path d="M690 10Q670 1 679-10Q693-4 690 10M690 4Q691-14 705-13Q706 1 690 4" fill="url(#leaf-green)"/></g>';vineHost.prepend(vine);
