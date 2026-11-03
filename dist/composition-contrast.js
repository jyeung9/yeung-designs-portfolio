/* [design-preview:surface-pairs] Keep the authored color whenever it meets 4.5:1; adapt only text to its local sky/surface. */
(()=>{
 const C=CompositionContrast;
 window.compositionSkyAt=y=>{const s=getComputedStyle(document.body),base=s.getPropertyValue('--bg').trim();return document.body.classList.contains('time-lighting')?C.mix(s.getPropertyValue('--ambient-top'),s.getPropertyValue('--ambient-bottom'),y/innerHeight):C.rgb(base)};
 const selectors='.brand-name,.masthead nav a,.greeting,.headline-top,.headline-bottom,.role-line,.menu-label,.clock,.clock-period,.weather-temperature,.weather-summary,.themed-city-trigger,.weather-peek,.theme-sun,.theme-moon,.timezone-picker h2,.timezone-picker button,.timezone-picker input';
 function surface(el,y){let color=window.compositionSkyAt(y);const ancestors=[];for(let n=el;n&&n!==document.body;n=n.parentElement)ancestors.unshift(n);for(const n of ancestors){const bg=getComputedStyle(n).backgroundColor,parts=bg.match(/[\d.]+/g);if(parts&&parts.length>=3){const alpha=parts.length>3?+parts[3]:1;color=C.mix(color,C.rgb(bg),alpha)}}return color}
 function refresh(){document.querySelectorAll(selectors).forEach(el=>{const r=el.getBoundingClientRect();if(!r.width||!r.height)return;el.style.removeProperty('color');const preferred=getComputedStyle(el).color,ink=C.ink([surface(el,r.top),surface(el,r.bottom)],preferred);el.style.setProperty('color',ink,'important')})}
 let pending=false;function queue(){if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;refresh()})}
 new MutationObserver(queue).observe(document.body,{attributes:true,attributeFilter:['class','style']});
 // Weather arrives asynchronously; refresh new text without observing our own color writes.
 new MutationObserver(queue).observe(document.body,{childList:true,subtree:true,characterData:true});
 addEventListener('resize',queue);addEventListener('scroll',queue,{passive:true});addEventListener('hashchange',queue);document.addEventListener('click',queue);document.fonts.ready.then(queue);queue();
})();
