// Three equal navigation objects; only the player remains on the table.
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
collectionMenu.classList.add('balanced-menu');
collectionMenu.hidden=false;
requestAnimationFrame(fitWelcome);
// Pen and writing share a coordinate system, so the nib follows the letter baseline.
note.querySelector('.note-paper').append(note.querySelector('.desk-pen'));
// A dimensionally consistent arm: pivot, counterweight, tube, headshell and stylus.
const arm=document.querySelector('.live-arm');
arm.innerHTML='<span class="arm-counterweight"></span><span class="arm-bearing"></span><span class="arm-tube"></span><span class="arm-cartridge"><span class="arm-stylus"></span></span>';
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
window.renderWorldClock=()=>{const options={hour:'2-digit',minute:'2-digit',hour12:false};if(chosenCity)options.timeZone=chosenCity[1];document.querySelector('.clock').textContent=new Intl.DateTimeFormat([],options).format(new Date())};
function useCity(city){chosenCity=city;window.renderWorldClock();const hour=Number(new Intl.DateTimeFormat('en-GB',{hour:'2-digit',hourCycle:'h23',...(city?{timeZone:city[1]}:{})}).format(new Date()));isNight=hour<7||hour>=19;sessionStorage.removeItem('julie-vinyl-theme');updateAppearance()}
clockSelect.onchange=()=>{const request=++clockRequest;locationNotice.hidden=true;
 if(clockSelect.value!=='locate'){useCity(clockSelect.value==='local'?null:cityData[Number(clockSelect.value)]);return}
 clockSelect.value='local';useCity(null);
 if(!navigator.geolocation){locationNotice.textContent='location is unavailable. choose a city instead.';locationNotice.hidden=false;return}
 navigator.geolocation.getCurrentPosition(position=>{if(request!==clockRequest)return;
  const rad=Math.PI/180,lat=position.coords.latitude*rad,lon=position.coords.longitude*rad;
  const nearest=cityData.reduce((best,c)=>{const distance=Math.acos(Math.min(1,Math.max(-1,Math.sin(lat)*Math.sin(c[2]*rad)+Math.cos(lat)*Math.cos(c[2]*rad)*Math.cos(lon-c[3]*rad))));return distance<best.distance?{city:c,distance}:best},{city:null,distance:Infinity}).city;
  clockSelect.value=String(cityData.indexOf(nearest));useCity(nearest);locationNotice.textContent='nearest listed city: '+nearest[0]+'. you can choose another.';locationNotice.hidden=false;
 },()=>{if(request!==clockRequest)return;clockSelect.value='local';useCity(null);locationNotice.textContent='using your device’s local time. you can choose a city.';locationNotice.hidden=false},{enableHighAccuracy:false,timeout:10000,maximumAge:300000});
};
window.renderWorldClock();
// Spotify stays inline. Never launch a separate page, window, or optimistic motor state.
const spotifyPanel=document.createElement('div');spotifyPanel.className='spotify-inline';spotifyPanel.hidden=true;
spotifyPanel.innerHTML='<div id="spotify-inline-host"></div>';
intro.append(spotifyPanel);
let spotifyController=null,spotifyLoading=false,spotifyWanted=false,spotifyReady=false,spotifyWatchdog;
function spotifyMessage(text){musicNote.textContent=text;musicNote.hidden=!text;requestAnimationFrame(fitWelcome)}
function startSpotify(){spotifyPanel.hidden=false;spotifyWanted=true;spotifyMessage('loading spotify…');
 spotifyWatchdog=setTimeout(()=>{if(!musicButton.classList.contains('playing'))spotifyMessage(spotifyReady?'press play in the Spotify player below if needed.':'Spotify isn’t available in this browser right now.')},12000);
 if(spotifyLoading)return;spotifyLoading=true;
 window.onSpotifyIframeApiReady=api=>api.createController(document.getElementById('spotify-inline-host'),{uri:'spotify:playlist:5GrWuliLODvT0KtZTDhYKT',width:'100%',height:80},controller=>{
 spotifyController=controller;
 controller.addListener('ready',()=>{spotifyReady=true;if(spotifyWanted)controller.play();requestAnimationFrame(fitWelcome)});
 controller.addListener('playback_update',e=>{const playing=!e.data.isPaused&&!e.data.isBuffering;musicState(playing);if(playing){clearTimeout(spotifyWatchdog);spotifyMessage('')}else if(e.data.isBuffering)spotifyMessage('buffering music…')});
 });
 const script=document.createElement('script');script.src='https://open.spotify.com/embed/iframe-api/v1';script.async=true;script.onerror=()=>{spotifyLoading=false;spotifyMessage('Spotify couldn’t load. try again later.');musicState(false)};document.head.append(script);
}
musicButton.onclick=()=>{audio.pause();if(!spotifyController){startSpotify();return}if(musicButton.classList.contains('playing')){spotifyWanted=false;spotifyController.pause()}else{spotifyWanted=true;spotifyController.play()}};
new ResizeObserver(()=>requestAnimationFrame(fitWelcome)).observe(spotifyPanel);
themeSwitch.addEventListener('click',()=>{
 themeSwitch.classList.remove('bounce-left','bounce-right');
 void themeSwitch.offsetWidth;
 themeSwitch.classList.add(isNight?'bounce-right':'bounce-left');
});
themeSwitch.addEventListener('animationend',()=>themeSwitch.classList.remove('bounce-left','bounce-right'));
