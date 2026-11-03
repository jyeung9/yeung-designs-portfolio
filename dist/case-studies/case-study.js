const sections=[...document.querySelectorAll('.story-section')],links=[...document.querySelectorAll('nav a')];
let scheduled=false;
function updateActive(){scheduled=false;const threshold=innerWidth<=800?64:innerHeight*.28;let active=sections[0];for(const section of sections)if(section.getBoundingClientRect().top<=threshold)active=section;if(innerHeight+scrollY>=document.documentElement.scrollHeight-4)active=sections.at(-1);for(const section of sections)section.classList.toggle('active',section===active);for(const link of links){const current=link.hash==='#'+active.id;if(current)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')}}
addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateActive)}},{passive:true});addEventListener('resize',updateActive);addEventListener('hashchange',()=>requestAnimationFrame(updateActive));updateActive();
// A brief, finite opening gesture; the content stays available throughout.
const intro=document.querySelector('.case-intro');
const opening=document.createElement('div');opening.className='case-opening';opening.setAttribute('aria-hidden','true');
// Hosted pages may omit .html; normalize before selecting project-specific artwork.
const caseFile=location.pathname.split('/').filter(Boolean).pop().replace(/\.html$/, '')+'.html';
const tone={'capi.html':'green','titanics-end.html':'blue','portfolio-refresh.html':'purple','connectmyhealth.html':'red'}[caseFile]||'green';
opening.innerHTML=`<div class="opening-vinyl"><i></i></div><div class="opening-sleeve jacket-art ${tone}"><span class="jacket-orbit"><i></i><i></i><i></i><i></i><b></b></span></div>`;
// [design-preview:case-title-record] Keep the record beside the title, then place a consistent hero frame below the chips.
const titleRow=document.createElement('div');titleRow.className='case-title-row';
const title=intro.querySelector('h1');title.before(titleRow);titleRow.append(opening,title);
const heroes={'capi.html':['capi-hero.png','CAPI video creation app on a phone.'],'connectmyhealth.html':['healthcare-hero.png','ConnectMyHealth blood panel results on a phone.']};
const hero=heroes[caseFile];
const figure=document.createElement('figure');figure.className='case-hero';
const image=document.createElement('img');image.src='../assets/'+(hero?hero[0]:'case-hero-placeholder.svg');image.alt=hero?hero[1]:'Hero image placeholder — final project image to come.';image.fetchPriority='high';
figure.append(image);intro.append(figure);
