// [design-approved:record-stack-navigation] Short fixed gesture gate; incoming grids unfold from a central stack.
(()=>{
 const order=['home','work','explorations','about','contact'];
 let total=0,last=0,lastDirection=0,readyAt=0,transitioning=false,queued=0;
 const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
 function enabled(target){return !target.closest('input,textarea,select,[role="dialog"],[contenteditable="true"],.expanded-cover')&&!document.querySelector('dialog[open],.mobile-menu.is-open')}
 function atEdge(direction){const root=document.scrollingElement;return direction<0?root.scrollTop<=2:root.scrollTop+innerHeight>=root.scrollHeight-2}
 function cards(page){return [...page.querySelectorAll('.cabinet-record,.b-record-group,.b-record-grid>.b-record-card')]}
 function stackFrames(card,index,center){const r=card.getBoundingClientRect();return [{transform:`translate(${center.x-r.x-r.width/2}px,${center.y-r.y-r.height/2}px) scale(.72) rotate(${(index%3-1)*5}deg)`,opacity:.55},{transform:'translate(0,0) scale(1) rotate(0deg)',opacity:1}]}
 function animateGrid(page,enter){
  const list=cards(page);if(!list.length||reduced())return [];
  const boxes=list.map(e=>e.getBoundingClientRect());const left=Math.min(...boxes.map(r=>r.left)),right=Math.max(...boxes.map(r=>r.right));
  const center={x:(left+right)/2,y:Math.min(innerHeight*.5,Math.max(160,boxes[0].top+100))};
  return list.map((card,i)=>{const frames=stackFrames(card,i,center);return card.animate(enter?frames:frames.reverse(),{duration:enter?240:110,easing:enter?'cubic-bezier(.2,.8,.2,1)':'ease-in',fill:enter?'none':'forwards'})});
 }
 function enterPage(){const page=document.getElementById(document.body.dataset.page);page.classList.remove('page-enter');if(!animateGrid(page,true).length&&!reduced())page.animate([{opacity:.7,transform:'translateY(8px)'},{opacity:1,transform:'translateY(0)'}],{duration:120,easing:'ease-out'})}
 addEventListener('hashchange',()=>requestAnimationFrame(enterPage));requestAnimationFrame(enterPage);
 function move(direction){
  if(transitioning){queued=direction;return true}
  const current=document.body.dataset.page,next=order[order.indexOf(current)+direction];if(!next)return false;
  if(reduced()){location.hash=next;return true}
  transitioning=true;const page=document.getElementById(current);let animations=animateGrid(page,false);
  if(!animations.length)animations=[page.animate([{opacity:1,transform:'translateY(0)'},{opacity:.3,transform:`translateY(${-direction*10}px)`}],{duration:90,fill:'forwards'})];
  Promise.all(animations.map(a=>a.finished.catch(()=>{}))).then(()=>{
   if(document.body.dataset.page===current)location.hash=next;
   animations.forEach(a=>a.cancel());transitioning=false;
   if(queued){const pending=queued;queued=0;setTimeout(()=>move(pending),40)}
  });return true;
 }
 window.navigatePortfolioPage=move;
 function advance(direction){if(atEdge(direction))return move(direction);window.scrollBy({top:direction*innerHeight,behavior:'instant'});return true}
 addEventListener('wheel',e=>{
  if(e.ctrlKey||Math.abs(e.deltaX)>Math.abs(e.deltaY)||!enabled(e.target))return;
  const now=performance.now(),direction=Math.sign(e.deltaY);const delta=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1);
  if(now-last>100||direction!==lastDirection)total=0;
  if(direction!==lastDirection)readyAt=0;last=now;lastDirection=direction;
  e.preventDefault();if(now<readyAt)return;
  total+=delta;if(Math.abs(total)>=42){advance(Math.sign(total));readyAt=now+300;total=0}
 },{passive:false});
 addEventListener('keydown',e=>{if(!enabled(e.target)||e.altKey||e.ctrlKey||e.metaKey)return;const direction=e.key==='PageDown'?1:e.key==='PageUp'?-1:0;if(direction&&advance(direction))e.preventDefault()});
 // [design-approved:section-pager] Explicit back/next destinations complement scrolling on every page.
 const pager=document.createElement('nav');pager.className='section-pager';pager.setAttribute('aria-label','Previous and next page');
 document.querySelector('main').append(pager);
 function updatePager(){const index=order.indexOf(document.body.dataset.page);pager.replaceChildren();for(const direction of [-1,1]){const next=order[index+direction];const button=document.createElement('button');button.type='button';button.disabled=!next;button.textContent=direction<0?'← previous':'next →';button.setAttribute('aria-label',next?`${direction<0?'Previous':'Next'} page: ${{home:'home',work:'A-side',explorations:'B-side',about:'about',contact:'contact'}[next]}`:direction<0?'First page':'Last page');button.onclick=()=>move(direction);pager.append(button)}}
 addEventListener('hashchange',updatePager);updatePager();
 let touchStart=null;
 addEventListener('touchstart',e=>{touchStart=e.touches.length===1&&enabled(e.target)?{x:e.touches[0].clientX,y:e.touches[0].clientY}:null},{passive:true});
 addEventListener('touchmove',e=>{if(touchStart&&Math.abs(e.touches[0].clientY-touchStart.y)>Math.abs(e.touches[0].clientX-touchStart.x))e.preventDefault()},{passive:false});
 addEventListener('touchend',e=>{if(!touchStart)return;const delta=touchStart.y-e.changedTouches[0].clientY;const horizontal=Math.abs(touchStart.x-e.changedTouches[0].clientX);touchStart=null;if(Math.abs(delta)>35&&Math.abs(delta)>horizontal)advance(Math.sign(delta))},{passive:true});
})();
