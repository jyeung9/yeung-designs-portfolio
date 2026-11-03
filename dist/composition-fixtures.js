/* Local-only review fixtures: never change a public visitor's typography, weather or song. */
if(['127.0.0.1','localhost'].includes(location.hostname)){
 const q=new URLSearchParams(location.search);
 if(q.get('auditText')==='2')document.documentElement.style.fontSize='32px';
 if(q.get('auditLong')==='1'){
  document.querySelector('.themed-city-label').textContent='San Martín de los Andes';
  document.querySelector('.led-track-name').textContent='A very long song title with an extended live instrumental version';
 }
 if(q.has('auditSky')){
  const skies={day:['#f6f3e9','#f6f3e9'],night:['#0e172a','#152235'],sunrise:['#3b3148','#9a666b'],sunset:['#bf8888','#eba977']};
  const pair=skies[q.get('auditSky')];if(pair){document.body.classList.add('time-lighting');document.body.style.setProperty('--ambient-top',pair[0]);document.body.style.setProperty('--ambient-bottom',pair[1]);document.body.style.setProperty('--bg',pair[0])}
 }
 dispatchEvent(new Event('resize'));
}
