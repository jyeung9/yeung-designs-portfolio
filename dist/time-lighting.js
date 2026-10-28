// Opt-in timezone lighting. No device timezone or location is read automatically.
const lightingStops=[
 [0,[14,23,42],[21,34,53]], [5,[14,23,42],[21,34,53]],
 [6,[59,49,72],[154,102,107]], [7,[223,173,148],[246,217,173]],
 [8,[246,243,233],[246,243,233]], [16,[246,243,233],[246,243,233]],
 [17,[245,220,188],[235,191,155]], [18,[191,136,136],[235,169,119]],
 [19,[70,56,87],[134,92,115]], [20,[14,23,42],[21,34,53]], [24,[14,23,42],[21,34,53]]
];
function paletteAt(hour){const i=lightingStops.findIndex(s=>s[0]>hour),a=lightingStops[Math.max(0,i-1)],b=lightingStops[i<0?lightingStops.length-1:i],t=(hour-a[0])/(b[0]-a[0]||1);return [1,2].map(k=>a[k].map((v,n)=>Math.round(v+(b[k][n]-v)*t)))}
window.applyTimeLighting=zone=>{
 if(sessionStorage.getItem('julie-vinyl-theme'))return;
 const parts=new Intl.DateTimeFormat('en-GB',{timeZone:zone,hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date());
 const hour=+parts.find(p=>p.type==='hour').value+(+parts.find(p=>p.type==='minute').value)/60;
 const [a,b]=paletteAt(hour),light=a[0]*.21+a[1]*.72+a[2]*.07>150;
 isNight=!light;updateAppearance();document.body.classList.add('time-lighting');
 const style=document.body.style;style.setProperty('--ambient-top',`rgb(${a.join(',')})`);style.setProperty('--ambient-bottom',`rgb(${b.join(',')})`);style.setProperty('--bg',`rgb(${a.join(',')})`);
 document.body.dataset.lightPhase=hour<5||hour>=20?'night':hour<8?'sunrise':hour<17?'day':'sunset';
};
themeSwitch.addEventListener('click',()=>{document.body.classList.remove('time-lighting');document.body.style.removeProperty('--bg')});
window.renderWorldClock();
