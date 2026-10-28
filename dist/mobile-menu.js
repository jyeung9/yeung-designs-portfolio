const mobileHeader=document.querySelector('.masthead,.case-brand');
if(mobileHeader){const menuButton=document.createElement('button');menuButton.className='mobile-menu-toggle';menuButton.setAttribute('aria-label','Open navigation menu');menuButton.setAttribute('aria-haspopup','dialog');menuButton.innerHTML='<span></span><span></span><span></span>';mobileHeader.append(menuButton);const menu=document.createElement('dialog');menu.className='mobile-menu';menu.setAttribute('aria-label','Navigation');const prefix=location.pathname.includes('/case-studies/')?'../':'';menu.innerHTML=`<button class="mobile-menu-close" aria-label="Close navigation menu">close ×</button><nav aria-label="Main navigation"><a href="${prefix}#home">home</a><a href="${prefix}#work">browse collection</a><a href="${prefix}#about">about me</a><a href="${prefix}#contact">contact me</a><a href="https://www.linkedin.com/in/julie-yeung9/">linkedin ↗</a><a href="https://drive.google.com/file/d/18085sSWS6cHZ3y5hkS9DhmdBfyQf00_2/view?usp=sharing">résumé ↗</a></nav>`;document.body.append(menu);
// Move the live controls, preserving selected timezone and toggle listeners.
const footer=document.querySelector('#home .hero-bottom');
const dock=document.querySelector('#home .rail.balanced-menu');
const settings=document.createElement('div');settings.className='mobile-menu-settings';menu.append(settings);
const settingsAnchor=footer?document.createComment('home settings'):null;
if(footer)footer.before(settingsAnchor);
if(dock)for(const link of dock.querySelectorAll('a')){
 const target=menu.querySelector(`nav a[href="${link.getAttribute('href')}"]`);
 const art=link.querySelector('.menu-object,.dock-art');
 if(target&&art){const menuArt=art.cloneNode(true);menuArt.setAttribute('aria-hidden','true');target.prepend(menuArt);target.classList.add('mobile-object-link');}
}
const mobileQuery=matchMedia('(max-width:600px)');
function placeMenuSettings(){
 if(footer){if(mobileQuery.matches)settings.append(footer);else settingsAnchor.after(footer);}
 if(!mobileQuery.matches&&menu.open)menu.close();
 window.dispatchEvent(new Event('resize'));
}
mobileQuery.addEventListener('change',placeMenuSettings);placeMenuSettings();
menuButton.onclick=()=>{menu.showModal();menuButton.setAttribute('aria-expanded','true')};menu.querySelector('button').onclick=()=>menu.close();menu.addEventListener('click',e=>{if(e.target===menu||e.target.closest('a'))menu.close()});menu.addEventListener('close',()=>menuButton.setAttribute('aria-expanded','false'));}
