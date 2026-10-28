// [design-approved:player-first] Four destinations share one island: A-Side, B-Side, about, contact.
sleeveLink.remove();
const collectionMenu=document.querySelector('#home > .rail');
collectionMenu.querySelectorAll('a:not([href="#work"])').forEach(link=>link.remove());
for(const [link,label] of [[wallPhoto,'about me'],[note,'say hello']]){
  link.classList.remove('wall-polaroid');
  const art=document.createElement('span');art.className='menu-object';
  while(link.firstChild)art.append(link.firstChild);
  const caption=document.createElement('span');caption.className='menu-label';caption.textContent=label;
  link.append(art,caption);collectionMenu.append(link);
}
const aSide=collectionMenu.querySelector('a[href="#work"]');
const aLabel=aSide.querySelector('span:last-child');aLabel.textContent='A-Side';aLabel.classList.add('menu-label');aSide.setAttribute('aria-label','A-Side — main design case studies');
const bSide=aSide.cloneNode(true);bSide.href='#explorations';bSide.setAttribute('aria-label','B-Side — explorations and side projects');bSide.querySelector('.menu-label').textContent='B-Side';bSide.classList.add('b-side-menu');aSide.after(bSide);
collectionMenu.querySelector('a[href="#contact"] .menu-label').textContent='contact me';
collectionMenu.classList.add('balanced-menu');
collectionMenu.hidden=false;
requestAnimationFrame(fitWelcome);
// Pen and writing share a coordinate system, so the nib follows the letter baseline.
note.querySelector('.note-paper').append(note.querySelector('.desk-pen'));
// A dimensionally consistent arm: pivot, counterweight, tube, headshell and stylus.
const arm=document.querySelector('.live-arm');
arm.innerHTML=`<svg class="tonearm-model" viewBox="0 0 70 240" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="arm-metal"><stop stop-color="#374347"/><stop offset=".25" stop-color="#a4afb1"/><stop offset=".46" stop-color="#f4f5ec"/><stop offset=".62" stop-color="#c0c8c7"/><stop offset="1" stop-color="#455459"/></linearGradient>
<linearGradient id="arm-shell" x2=".8" y2="1"><stop stop-color="#626c6d"/><stop offset=".35" stop-color="#303b3d"/><stop offset="1" stop-color="#10191b"/></linearGradient>
<linearGradient id="arm-weight" x2="0" y2="1"><stop stop-color="#283336"/><stop offset=".22" stop-color="#a1aaab"/><stop offset=".45" stop-color="#d5dad7"/><stop offset=".7" stop-color="#737f81"/><stop offset="1" stop-color="#283539"/></linearGradient>
</defs>
<!-- Continuous rigid arm: rear weight, bearing yoke, tube and offset headshell. -->
<g stroke-linejoin="round">
<path d="M35 18V172Q35 181 29 187L23 193" fill="none" stroke="#344145" stroke-width="7"/>
<path d="M35 18V172Q35 181 29 187L23 193" fill="none" stroke="url(#arm-metal)" stroke-width="5"/>
<rect x="22" y="9" width="26" height="25" rx="4" fill="url(#arm-weight)" stroke="#485659" stroke-width="1"/>
<path d="M25 11V32M45 11V32" stroke="#eef0e1" opacity=".4"/>
<rect x="25" y="43" width="20" height="18" rx="6" fill="#444f51" stroke="#b4bdb9" stroke-width="2"/>
<circle cx="35" cy="52" r="5" fill="url(#arm-metal)"/><path d="M32 52h6" stroke="#596769"/>
<path d="M25 184L39 191L28 222L13 216Z" fill="#101819" stroke="#7b8583" stroke-width="1"/>
<path d="M23 183L37 190L26 216L12 210Z" fill="url(#arm-shell)" stroke="#909b96" stroke-width=".8"/>
<path d="M19 190L28 194M16 198L25 202" stroke="#0a1011" stroke-width="2"/>
<circle cx="23" cy="188" r="1.7" fill="#bbc3bc"/><circle cx="31" cy="192" r="1.7" fill="#bbc3bc"/>
<path d="M36 194L49 197L53 188" fill="none" stroke="#29373a" stroke-width="3"/>
<path d="M36 193L49 196L52 187" fill="none" stroke="#c5ceca" stroke-width="1"/>
<path d="M15 214L26 218L22 227L12 223Z" fill="#758574" stroke="#34433b"/>
<path d="M17 225L16 230" stroke="#d2cbb4" stroke-width="1.5"/>
</g></svg>`;
const armMount=document.createElement('span');armMount.className='tonearm-mount';arm.before(armMount);
const armRest=document.createElement('span');armRest.className='tonearm-rest';arm.before(armRest);
const themeSwitch=document.querySelector('.ambient-toggle');
themeSwitch.setAttribute('role','switch');themeSwitch.setAttribute('aria-label','night mode');
themeSwitch.innerHTML='<span class="theme-sun" aria-hidden="true">☀</span><span class="theme-moon" aria-hidden="true">☾</span><span class="theme-knob" aria-hidden="true"></span>';
updateAppearance();
// A broad city list, with IANA zones providing daylight-saving-aware time.
const cityData=[
['anchorage','America/Anchorage',61.22,-149.9],['atlanta','America/New_York',33.75,-84.39],['auckland','Pacific/Auckland',-36.85,174.76],['bangkok','Asia/Bangkok',13.76,100.5],['beijing','Asia/Shanghai',39.9,116.4],['berlin','Europe/Berlin',52.52,13.4],['bogotá','America/Bogota',4.71,-74.07],['boston','America/New_York',42.36,-71.06],['buenos aires','America/Argentina/Buenos_Aires',-34.6,-58.38],['cairo','Africa/Cairo',30.04,31.24],['cape town','Africa/Johannesburg',-33.92,18.42],['chicago','America/Chicago',41.88,-87.63],['copenhagen','Europe/Copenhagen',55.68,12.57],['dallas','America/Chicago',32.78,-96.8],['delhi','Asia/Kolkata',28.61,77.21],['denver','America/Denver',39.74,-104.99],['dubai','Asia/Dubai',25.2,55.27],['dublin','Europe/Dublin',53.35,-6.26],['hong kong','Asia/Hong_Kong',22.32,114.17],['honolulu','Pacific/Honolulu',21.31,-157.86],['istanbul','Europe/Istanbul',41.01,28.98],['jakarta','Asia/Jakarta',-6.21,106.85],['johannesburg','Africa/Johannesburg',-26.2,28.04],['karachi','Asia/Karachi',24.86,67.01],['kuala lumpur','Asia/Kuala_Lumpur',3.14,101.69],['lagos','Africa/Lagos',6.52,3.38],['lima','America/Lima',-12.05,-77.04],['lisbon','Europe/Lisbon',38.72,-9.14],['london','Europe/London',51.51,-.13],['los angeles','America/Los_Angeles',34.05,-118.24],['madrid','Europe/Madrid',40.42,-3.7],['manila','Asia/Manila',14.6,120.98],['melbourne','Australia/Melbourne',-37.81,144.96],['mexico city','America/Mexico_City',19.43,-99.13],['miami','America/New_York',25.76,-80.19],['montreal','America/Toronto',45.5,-73.57],['mumbai','Asia/Kolkata',19.08,72.88],['nairobi','Africa/Nairobi',-1.29,36.82],['new york','America/New_York',40.71,-74.01],['paris','Europe/Paris',48.86,2.35],['perth','Australia/Perth',-31.95,115.86],['reykjavík','Atlantic/Reykjavik',64.15,-21.94],['riyadh','Asia/Riyadh',24.71,46.68],['rome','Europe/Rome',41.9,12.5],['san francisco','America/Los_Angeles',37.77,-122.42],['santiago','America/Santiago',-33.45,-70.67],['são paulo','America/Sao_Paulo',-23.55,-46.63],['seattle','America/Los_Angeles',47.61,-122.33],['seoul','Asia/Seoul',37.57,126.98],['shanghai','Asia/Shanghai',31.23,121.47],['singapore','Asia/Singapore',1.35,103.82],['stockholm','Europe/Stockholm',59.33,18.07],['sydney','Australia/Sydney',-33.87,151.21],['taipei','Asia/Taipei',25.03,121.57],['tel aviv','Asia/Jerusalem',32.09,34.78],['tokyo','Asia/Tokyo',35.68,139.69],['toronto','America/Toronto',43.65,-79.38],['vancouver','America/Vancouver',49.28,-123.12],['vienna','Europe/Vienna',48.21,16.37],['wellington','Pacific/Auckland',-41.29,174.78],['zurich','Europe/Zurich',47.38,8.54]];
const clockSelect=document.createElement('select');clockSelect.className='city-select';clockSelect.setAttribute('aria-label','choose a city or use your local time');
clockSelect.add(new Option('your local time','local'));clockSelect.add(new Option('use my location…','locate'));
cityData.forEach((c,i)=>clockSelect.add(new Option(c[0],String(i))));
document.querySelector('.clock').after(clockSelect);
const locationNotice=document.createElement('p');locationNotice.className='location-notice';locationNotice.setAttribute('role','status');locationNotice.hidden=true;
document.querySelector('.hero-bottom').append(locationNotice);
let chosenCity=null,clockRequest=0;
window.renderWorldClock=()=>{const clockEl=document.querySelector('.clock');clockEl.hidden=!chosenCity;if(!chosenCity){clockEl.textContent='';document.body.classList.remove('time-lighting');document.body.style.removeProperty('--bg');return}clockEl.textContent=new Intl.DateTimeFormat([],{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:chosenCity[1]}).format(new Date());if(window.applyTimeLighting)window.applyTimeLighting(chosenCity[1])};
function useCity(city){chosenCity=city;sessionStorage.removeItem('julie-vinyl-theme');window.renderWorldClock();}
clockSelect.onchange=()=>{const request=++clockRequest;locationNotice.hidden=true;
 if(clockSelect.value!=='locate'){useCity(clockSelect.value==='local'?null:cityData[Number(clockSelect.value)]);return}
 clockSelect.value='local';useCity(null);
 if(!navigator.geolocation){locationNotice.textContent='location is unavailable. choose a city instead.';locationNotice.hidden=true;return}
 navigator.geolocation.getCurrentPosition(position=>{if(request!==clockRequest)return;
  const rad=Math.PI/180,lat=position.coords.latitude*rad,lon=position.coords.longitude*rad;
  const nearest=cityData.reduce((best,c)=>{const distance=Math.acos(Math.min(1,Math.max(-1,Math.sin(lat)*Math.sin(c[2]*rad)+Math.cos(lat)*Math.cos(c[2]*rad)*Math.cos(lon-c[3]*rad))));return distance<best.distance?{city:c,distance}:best},{city:null,distance:Infinity}).city;
  clockSelect.value=String(cityData.indexOf(nearest));useCity(nearest);locationNotice.textContent='nearest listed city: '+nearest[0]+'. you can choose another.';locationNotice.hidden=true;
 },()=>{if(request!==clockRequest)return;clockSelect.value='local';useCity(null);locationNotice.textContent='time stays hidden. choose a timezone when you’re ready.';locationNotice.hidden=true},{enableHighAccuracy:false,timeout:10000,maximumAge:300000});
};
window.renderWorldClock();
// Music is handled locally by music-sequence.js.
themeSwitch.addEventListener('click',()=>{
 themeSwitch.classList.remove('bounce-left','bounce-right');
 void themeSwitch.offsetWidth;
 themeSwitch.classList.add(isNight?'bounce-right':'bounce-left');
});
themeSwitch.addEventListener('animationend',()=>themeSwitch.classList.remove('bounce-left','bounce-right'));
