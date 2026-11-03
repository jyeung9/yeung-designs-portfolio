// [design-approved:mobile-utility-menu] Bottom island owns primary navigation; hamburger contains external links and paired settings only.
const mobileHeader=document.querySelector('.masthead,.case-brand');
if(mobileHeader){const menuButton=document.createElement('button');menuButton.className='mobile-menu-toggle';menuButton.setAttribute('aria-label','Open navigation menu');menuButton.setAttribute('aria-haspopup','dialog');menuButton.innerHTML='<span></span><span></span><span></span>';mobileHeader.append(menuButton);const menu=document.createElement('dialog');menu.className='mobile-menu';menu.setAttribute('aria-label','Navigation');menu.id='mobile-navigation';menuButton.setAttribute('aria-controls',menu.id);menuButton.setAttribute('aria-expanded','false');const prefix=location.pathname.includes('/case-studies/')?'../':'';menu.innerHTML=`<button class="mobile-menu-close" aria-label="Close navigation menu">close ×</button><nav aria-label="Main navigation"><a href="https://www.linkedin.com/in/julie-yeung9/">linkedin</a><a href="https://drive.google.com/file/d/18085sSWS6cHZ3y5hkS9DhmdBfyQf00_2/view?usp=sharing">résumé</a></nav>`;document.body.append(menu);
// Move the live controls, preserving selected timezone and toggle listeners.
const footer=document.querySelector('#home .hero-bottom');
const dock=document.querySelector('#home .rail.balanced-menu');
const settings=document.createElement('div');settings.className='mobile-menu-settings';menu.append(settings);
if(footer)footer.classList.add('corner-utilities');
if(dock)for(const link of dock.querySelectorAll('a')){
 const target=menu.querySelector(`nav a[href="${link.getAttribute('href')}"]`);
 const art=link.querySelector('.menu-object,.dock-art');
 if(target&&art){const menuArt=art.cloneNode(true);menuArt.setAttribute('aria-hidden','true');target.prepend(menuArt);target.classList.add('mobile-object-link');}
}
// [design-preview:header-theme] Preserve the live toggle and its listeners beside the external links.
const headerActions=document.createElement('div');headerActions.className='header-actions';
const externalNav=mobileHeader.querySelector('nav');if(externalNav)headerActions.append(externalNav);
const liveToggle=document.querySelector('.ambient-toggle');if(liveToggle)headerActions.append(liveToggle);
headerActions.append(menuButton);mobileHeader.append(headerActions);
const mobileQuery=matchMedia('(max-width:600px)');
// [design-preview:mobile-flow] Move the original live switch, never clone listeners or state.
function placeMenuSettings(){
 if(liveToggle){if(mobileQuery.matches)settings.append(liveToggle);else headerActions.insertBefore(liveToggle,menuButton);}
 if(footer){if(document.body.dataset.page==='home')document.getElementById('home').append(footer);else document.body.append(footer);}
 if(!mobileQuery.matches&&menu.open)menu.close();
 window.dispatchEvent(new Event('resize'));
}
mobileQuery.addEventListener('change',placeMenuSettings);addEventListener('hashchange',placeMenuSettings);placeMenuSettings();
menuButton.onclick=()=>{menu.showModal();menuButton.setAttribute('aria-expanded','true')};menu.querySelector('button').onclick=()=>menu.close();menu.addEventListener('click',e=>{const r=menu.getBoundingClientRect();const backdrop=e.target===menu&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom);if(backdrop||e.target.closest('a'))menu.close()});menu.addEventListener('close',()=>{menuButton.setAttribute('aria-expanded','false');if(mobileQuery.matches)menuButton.focus()});}
