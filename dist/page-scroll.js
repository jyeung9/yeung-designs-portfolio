// [design-approved:page-scroll] One destination per deliberate gesture when the sidebar is visible.
// Long pages remain readable: scroll their content first, then change route at an edge.
// A quiet interval releases the gesture lock so trackpad momentum cannot skip destinations.
(()=>{
 const order=['home','work','explorations','about','contact'];
 let total=0,last=0,locked=false,transitioning=false;
 function enabled(target){
  const menu=document.querySelector('.section-menu');
  return menu&&
   !target.closest('input,textarea,select,button,[role="dialog"],[contenteditable="true"],.expanded-cover')&&
   !document.querySelector('dialog[open],.mobile-menu.is-open');
 }
 function atEdge(direction){const root=document.scrollingElement;return direction<0?root.scrollTop<=2:root.scrollTop+innerHeight>=root.scrollHeight-2}
 // [design-approved:directional-pages] Down sends the old page up; up sends it down.
 function move(direction){
  if(transitioning)return false;
  const current=document.body.dataset.page,index=order.indexOf(current),next=order[index+direction];
  if(!next)return false;
  if(matchMedia('(prefers-reduced-motion: reduce)').matches){location.hash=next;return true}
  transitioning=true;
  const page=document.getElementById(current);
  const exit=page.animate([{transform:'translateY(0)',opacity:1},{transform:`translateY(${-direction*24}px)`,opacity:0}],{duration:130,easing:'ease-in',fill:'forwards'});
  exit.finished.then(()=>{
   if(document.body.dataset.page!==current){exit.cancel();transitioning=false;return}
   location.hash=next;
   addEventListener('hashchange',()=>{
    exit.cancel();const arriving=document.getElementById(next);arriving.classList.remove('page-enter');
    arriving.animate([{transform:`translateY(${direction*24}px)`,opacity:0},{transform:'translateY(0)',opacity:1}],{duration:180,easing:'cubic-bezier(.2,.7,.2,1)'}).finished.finally(()=>{transitioning=false});
   },{once:true});
  });return true;
 }
 window.navigatePortfolioPage=move;
 function advance(direction){if(atEdge(direction))return move(direction);window.scrollBy({top:direction*innerHeight,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});return true}
 addEventListener('wheel',e=>{
  if(e.ctrlKey||Math.abs(e.deltaX)>Math.abs(e.deltaY)||!enabled(e.target))return;
  const now=performance.now();if(now-last>140){locked=false;total=0}last=now;
  if(locked||transitioning){e.preventDefault();return}
  const direction=Math.sign(e.deltaY);
  e.preventDefault();total+=e.deltaY*(e.deltaMode===1?16:e.deltaMode===2?innerHeight:1);
  if(Math.abs(total)>=40){advance(Math.sign(total));locked=true;total=0}
 },{passive:false});
 addEventListener('keydown',e=>{
  if(!enabled(e.target)||e.altKey||e.ctrlKey||e.metaKey)return;
  const direction=e.key==='PageDown'?1:e.key==='PageUp'?-1:0;
  if(direction&&advance(direction))e.preventDefault();
 });
 // [design-approved:section-pager] Explicit back/next destinations complement scrolling on every page.
 const pager=document.createElement('nav');pager.className='section-pager';pager.setAttribute('aria-label','Previous and next page');
 document.querySelector('main').append(pager);
 function updatePager(){const index=order.indexOf(document.body.dataset.page);pager.replaceChildren();for(const direction of [-1,1]){const next=order[index+direction];const button=document.createElement('button');button.type='button';button.disabled=!next;button.textContent=direction<0?'← previous':'next →';button.setAttribute('aria-label',next?`${direction<0?'Previous':'Next'} page: ${{home:'home',work:'A-side',explorations:'B-side',about:'about',contact:'contact'}[next]}`:direction<0?'First page':'Last page');button.onclick=()=>move(direction);pager.append(button)}}
 addEventListener('hashchange',updatePager);updatePager();
 let touchStart=null;
 addEventListener('touchstart',e=>{touchStart=e.touches.length===1&&enabled(e.target)?{x:e.touches[0].clientX,y:e.touches[0].clientY}:null},{passive:true});
 addEventListener('touchmove',e=>{if(touchStart&&Math.abs(e.touches[0].clientY-touchStart.y)>Math.abs(e.touches[0].clientX-touchStart.x))e.preventDefault()},{passive:false});
 addEventListener('touchend',e=>{if(!touchStart)return;const delta=touchStart.y-e.changedTouches[0].clientY;const horizontal=Math.abs(touchStart.x-e.changedTouches[0].clientX);touchStart=null;if(Math.abs(delta)>60&&Math.abs(delta)>horizontal&&!transitioning)advance(Math.sign(delta))},{passive:true});
})();
