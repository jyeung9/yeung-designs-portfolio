// Cover copy supplied by Julie. No category labels or unverified outcome claims.
const expandedProjects=[
 {name:"Titanic's End App",impact:'Building for community engagement',tone:'blue',href:projects[0].href,chips:['Consumer Social','Community Engagement','Design System','AI-Assisted Product Design','Mobile + Desktop']},
 {name:'CAPI',impact:impactPrompts[1],tone:'green',href:projects[2].href,chips:['Consumer Social Media','Product Design','Design Leadership','Stakeholder Management','Mobile']},
 {name:'Design Portfolio Refresh',impact:'A clear, fun experience with personality',tone:'purple',href:'#portfolio-refresh',chips:['Consumer Web','Product Design','AI-Assisted Product Development','Mobile and Desktop Web']},
 {name:'ConnectMyHealth',impact:impactPrompts[2],tone:'red',href:projects[1].href,chips:['Consumer Healthcare','Product Design','User Research','Stakeholder Management','Mobile']}
];
const refreshOverview=document.createElement('dialog');refreshOverview.className='refresh-overview';refreshOverview.innerHTML='<button type="button" aria-label="Close portfolio overview">close</button><h2>Design Portfolio Refresh</h2><p>A clear, fun portfolio experience with personality.</p><p>Product Design · AI-Assisted Product Development</p><p>The full case study is being prepared.</p>';document.body.append(refreshOverview);refreshOverview.querySelector('button').onclick=()=>refreshOverview.close();
shelf.replaceChildren();
expandedProjects.forEach((project,index)=>{
 const link=document.createElement('a');link.href=project.href;link.className='cabinet-record';link.setAttribute('aria-label',project.name+' — preview and open case study');
 link.innerHTML=`<span class="sleeve-vinyl" aria-hidden="true"></span>${jacketArt(project.tone)}<span class="expanded-cover"><span class="cover-heading"><strong>${project.name}</strong><span>${project.impact}</span></span><span class="cover-artwork" aria-hidden="true">${jacketArt(project.tone)}<i class="cover-peek-disc"></i></span><span class="cover-chips">${project.chips.map(chip=>`<span>${chip}</span>`).join('')}</span></span>`;
 link.addEventListener('pointerdown',event=>{if(event.pointerType==='touch'&&!link.classList.contains('cover-preview')){shelf.querySelectorAll('.cover-preview').forEach(el=>el.classList.remove('cover-preview'));link.classList.add('cover-preview');link.dataset.firstTap='true'}});
 link.addEventListener('click',event=>{if(link.dataset.firstTap){event.preventDefault();delete link.dataset.firstTap;return}if(project.href==='#titanic'){event.preventDefault();teDialog.showModal()}else if(project.href==='#portfolio-refresh'){event.preventDefault();refreshOverview.showModal()}});
 shelf.append(link);
});
document.addEventListener('pointerdown',event=>{if(!shelf.contains(event.target))shelf.querySelectorAll('.cover-preview').forEach(el=>el.classList.remove('cover-preview'))});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){shelf.querySelectorAll('.cover-preview').forEach(el=>el.classList.remove('cover-preview'));document.activeElement?.blur()}});
// Give the previously unclassified browse label the same treatment as the other two.
document.querySelectorAll('#home .balanced-menu>a').forEach(link=>link.lastElementChild.classList.add('menu-label'));
function positionExpanded(link){const panel=link.querySelector('.expanded-cover'),r=link.getBoundingClientRect();panel.style.left=((innerWidth-panel.offsetWidth)/2-r.left)+'px';panel.style.top=(Math.max(20,(innerHeight-panel.offsetHeight)/2)-r.top)+'px'}
shelf.querySelectorAll('.cabinet-record').forEach(link=>['pointerenter','focus','pointerdown'].forEach(event=>link.addEventListener(event,()=>positionExpanded(link))));
addEventListener('resize',()=>shelf.querySelectorAll('.cabinet-record').forEach(positionExpanded));
// Enforce the user's minimum on actual text nodes, including legacy page styles.
function enforceReadableText(){const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode()){const el=node.parentElement;if(!node.textContent.trim()||!el||el.closest('script,style,svg'))continue;if(parseFloat(getComputedStyle(el).fontSize)<16)el.style.setProperty('font-size','16px','important')}}
enforceReadableText();addEventListener('resize',enforceReadableText);
