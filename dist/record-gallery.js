// Expanded records share one browsable dialog, with a deliberate hover delay.
const gallery=document.createElement('dialog');gallery.className='record-gallery';gallery.setAttribute('aria-label','Case study records');
gallery.innerHTML='<button class="gallery-close" aria-label="Close case study records">close</button><div class="gallery-track" tabindex="0" aria-label="Browse case study records"></div><div class="gallery-controls"><button class="gallery-prev" aria-label="Previous case study">← previous</button><button class="gallery-next" aria-label="Next case study">next →</button></div>';
document.body.append(gallery);const galleryTrack=gallery.querySelector('.gallery-track');let galleryIndex=0,hoverTimer=0,departing=false;
const localDestinations={'#titanic':'case-studies/titanics-end.html','#portfolio-refresh':'case-studies/portfolio-refresh.html'};
const galleryCards=[];
shelf.querySelectorAll('.cabinet-record').forEach((original,index)=>{
 const project=expandedProjects[index],link=original.cloneNode(true);original.replaceWith(link);
 const card=document.createElement('a');card.className='gallery-card';card.href=localDestinations[project.href]||project.href;card.setAttribute('aria-label','View case study: '+project.name);
 const face=link.querySelector('.expanded-cover').cloneNode(true);face.removeAttribute('style');face.querySelector('.cover-heading strong').textContent='Case Study: '+project.name;const peek=face.querySelector('.cover-peek-disc');card.append(peek,face);galleryTrack.append(card);galleryCards.push(card);
 link.querySelector('.expanded-cover').remove();link.href=card.href;
 link.addEventListener('pointerenter',e=>{if(e.pointerType==='touch'||departing)return;clearTimeout(hoverTimer);hoverTimer=setTimeout(()=>openGallery(index),2000)});
 link.addEventListener('pointerleave',()=>clearTimeout(hoverTimer));
 link.addEventListener('click',e=>{e.preventDefault();clearTimeout(hoverTimer);openGallery(index)});
 card.addEventListener('click',async e=>{e.preventDefault();if(departing)return;departing=true;clearTimeout(hoverTimer);if(!matchMedia('(prefers-reduced-motion: reduce)').matches)await card.animate([{transform:'scale(1)',opacity:1},{transform:'scale(1.14)',opacity:0}],{duration:420,easing:'ease-in',fill:'forwards'}).finished;location.assign(card.href)});
});
function centerGallery(index,smooth=true){galleryIndex=Math.max(0,Math.min(galleryCards.length-1,index));const c=galleryCards[galleryIndex];galleryTrack.scrollTo({left:c.offsetLeft-(galleryTrack.clientWidth-c.offsetWidth)/2,behavior:smooth&&!matchMedia('(prefers-reduced-motion: reduce)').matches?'smooth':'instant'});updateGalleryButtons()}
function updateGalleryButtons(){gallery.querySelector('.gallery-prev').disabled=galleryIndex===0;gallery.querySelector('.gallery-next').disabled=galleryIndex===galleryCards.length-1}
function openGallery(index){if(gallery.open)return;gallery.showModal();requestAnimationFrame(()=>centerGallery(index,false));}
gallery.querySelector('.gallery-close').onclick=()=>gallery.close();gallery.addEventListener('click',e=>{if(e.target===gallery)gallery.close()});gallery.addEventListener('close',()=>{clearTimeout(hoverTimer);document.activeElement?.blur()});
gallery.querySelector('.gallery-prev').onclick=()=>centerGallery(galleryIndex-1);gallery.querySelector('.gallery-next').onclick=()=>centerGallery(galleryIndex+1);
galleryTrack.addEventListener('scroll',()=>{const center=galleryTrack.scrollLeft+galleryTrack.clientWidth/2;galleryIndex=galleryCards.reduce((best,c,i)=>Math.abs(c.offsetLeft+c.offsetWidth/2-center)<Math.abs(galleryCards[best].offsetLeft+galleryCards[best].offsetWidth/2-center)?i:best,0);updateGalleryButtons()},{passive:true});
galleryTrack.addEventListener('wheel',e=>{if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){e.preventDefault();galleryTrack.scrollBy({left:e.deltaY})}},{passive:false});
gallery.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();centerGallery(galleryIndex+(e.key==='ArrowRight'?1:-1))}});
const shelfNote=document.createElement('div');shelfNote.className='shelf-annotation';shelfNote.setAttribute('aria-hidden','true');shelfNote.innerHTML='case studies<svg viewBox="0 0 100 45"><path d="M8 8 Q28 40 88 30 M76 20 L88 30 75 36"/></svg>';cabinetScene.append(shelfNote);
const greeting=document.querySelector('.greeting');const greetingText=greeting.textContent;greeting.replaceChildren();const ribbon=document.createElement('span');ribbon.className='greeting-ribbon';for(let i=0;i<2;i++){const span=document.createElement('span');span.textContent=greetingText;if(i)span.setAttribute('aria-hidden','true');ribbon.append(span)}greeting.append(ribbon);
