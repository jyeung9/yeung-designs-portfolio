// [design-approved:collection-sides] Three primary studies; portfolio revamp belongs with six compact explorations.
(()=>{
 const b=document.querySelector('#explorations'), grid=document.createElement('div');grid.className='b-record-grid';
 const portfolio=[...document.querySelectorAll('#work .cabinet-record')].find(e=>e.href.includes('portfolio-refresh'));
 const old=[...b.querySelectorAll('.exploration-record')];
 const items=old.filter(e=>e.getAttribute('href')!=='design-system/').map(e=>({name:e.querySelector('h4').textContent,href:e.getAttribute('href'),target:e.target,tags:[...e.querySelectorAll('li')].map(t=>t.textContent)}));
 if(portfolio){items.unshift({name:'Portfolio Revamp',href:portfolio.getAttribute('href'),tags:['product design','design systems'],system:true});portfolio.remove()}
 items.push({name:'neon owl',tags:['business strategy','in development']});
 b.querySelectorAll('.extra-project-list article').forEach(e=>items.push({name:e.querySelector('h3').textContent,tags:[e.querySelector('p')?.textContent||'exploration']}));b.querySelector('.extra-project-list')?.remove();
 const tones=['purple','blue','green','red','blue','green'];
 items.forEach((item,i)=>{const card=document.createElement(item.href?'a':'article');card.className='b-record-card';if(item.href)card.href=item.href;if(item.target){card.target=item.target;card.rel='noopener'}
 card.innerHTML='<span class="sleeve-vinyl" aria-hidden="true"></span>'+jacketArt(tones[i%tones.length]);
 const palettes=[['#dc887d','#ffe09b','#725079'],['#78bcb3','#f4ca83','#306b7f'],['#a893d5','#f5baab','#604d91'],['#dfaa64','#e7b6d0','#94623e'],['#b7ce7c','#f5c9a3','#578378'],['#83b4d8','#edb4d0','#586494']];const colors=palettes[i];const art=card.querySelector('.jacket-art');['--jacket','--light','--dark'].forEach((key,n)=>art.style.setProperty(key,colors[n]));
 const title=document.createElement('h2');title.textContent=item.name;card.append(title);
 const tags=document.createElement('div');tags.className='collection-chips';
 const rows=item.system?[['portfolio'],item.tags,['mobile','desktop','web']]:[[item.name==='neon owl'?'business':'exploration'],item.tags,[]];
 rows.forEach((list,n)=>{const row=document.createElement('span');row.className='collection-chip-row';row.dataset.row=n+1;if(list.length){row.tabIndex=0;row.setAttribute('aria-label',['Project category','Skills and focus','Platform'][n])}list.forEach(text=>{const chip=document.createElement('span');chip.textContent=text;row.append(chip)});tags.append(row)});card.append(tags);if(item.system){const group=document.createElement('div');group.className='b-record-group';const system=document.createElement('a');system.className='system-link';system.href='design-system/';system.textContent='view design system';group.append(card,system);grid.append(group)}else grid.append(card)});
 b.querySelector('.strategy-feature').remove();b.querySelector('.exploration-heading').remove();b.querySelector('.exploration-gallery').remove();
 const h=b.querySelector('.page-heading h2'), title=document.createElement('h1');title.textContent='b-side';h.replaceWith(title);
 const desc=document.createElement('p');desc.textContent='Explorations, side projects, and works in progress.';b.querySelector('.page-heading').append(desc);b.append(grid);
})();

// [design-approved:shared-page-headings] Common sans heading and mono supporting copy across routed pages.
for(const id of ['about','contact']){const old=document.querySelector('#'+id+' h2');if(old){const title=document.createElement('h1');title.innerHTML=id==='contact'?'say hi':old.innerHTML;old.replaceWith(title)}}
document.querySelector('#work h1').textContent='a-side';
for(const [href,label] of [['#work','a-side'],['#explorations','b-side']]){const link=document.querySelector('.section-menu a[href="'+href+'"]');if(link)link.textContent=label;}
