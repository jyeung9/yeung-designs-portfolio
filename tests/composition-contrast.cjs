const assert=require('node:assert/strict');
const C=require('../dist/contrast-rules.js');
assert.equal(C.ratio('#000000','#ffffff'),21);
assert.deepEqual(C.rgb('color(srgb 1 0.5 0 / 0.58)'),[255,127.5,0]);
const surfaces=['#f6f3e9','#0e172a','#152235','#3b3148','#9a666b','#bf8888','#eba977','#b99968','#e0c392','#081812'];
for(const surface of surfaces)assert(C.ratio(C.ink([surface],'#292e31'),surface)>=4.5,surface);
assert(C.ratio('#bbffc2','#081812')>=4.5);
for(let v=0;v<256;v++)assert(C.ratio(C.ink([[v,v,v]]),[v,v,v])>=4.5);
console.log('Contrast: 267 surface/ink checks passed (including all grayscale transitions).');
