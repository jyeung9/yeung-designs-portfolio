const sections=[...document.querySelectorAll('.story-section')],links=[...document.querySelectorAll('nav a')];
let scheduled=false;
function updateActive(){scheduled=false;const threshold=innerWidth<=800?64:innerHeight*.28;let active=sections[0];for(const section of sections)if(section.getBoundingClientRect().top<=threshold)active=section;if(innerHeight+scrollY>=document.documentElement.scrollHeight-4)active=sections.at(-1);for(const section of sections)section.classList.toggle('active',section===active);for(const link of links){const current=link.hash==='#'+active.id;if(current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')}}
addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateActive)}},{passive:true});addEventListener('resize',updateActive);addEventListener('hashchange',()=>requestAnimationFrame(updateActive));updateActive();
// A brief, finite opening gesture; the content stays available throughout.
const intro=document.querySelector('.case-intro');
const opening=document.createElement('div');opening.className='case-opening';opening.setAttribute('aria-hidden','true');
const tone={'capi.html':'green','titanics-end.html':'blue','portfolio-refresh.html':'purple','connectmyhealth.html':'red'}[location.pathname.split('/').pop()]||'green';
opening.innerHTML=`<div class="opening-vinyl"><i></i></div><div class="opening-sleeve jacket-art ${tone}"><span class="jacket-orbit"><i></i><i></i><i></i><i></i><b></b></span></div>`;
intro.append(opening);
