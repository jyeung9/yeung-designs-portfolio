"""Estimate beat grids from 20ms RMS onsets. Section labels are energy heuristics, not musical ground truth."""
import array,json,math,pathlib,subprocess
root=pathlib.Path(__file__).resolve().parents[1];result={}
for path in sorted((root/'dist/assets/music').glob('*.mp3')):
 raw=subprocess.check_output(['ffmpeg','-v','error','-i',str(path),'-af','highpass=f=45,lowpass=f=2500','-f','f32le','-ac','1','-ar','4000','-'])
 data=array.array('f');data.frombytes(raw)
 energy=[math.sqrt(sum(x*x for x in data[i:i+80])/len(data[i:i+80])) for i in range(0,len(data),80)]
 onset=[max(0,e-(sum(energy[max(0,i-4):i])/min(i,4) if i else e)) for i,e in enumerate(energy)]
 scores={lag:sum(onset[i]*onset[i-lag] for i in range(lag,len(onset)))/(len(onset)-lag) for lag in range(17,44)}
 lag=max(scores,key=scores.get);period=lag*.02
 phase=max(range(lag),key=lambda k:sum(onset[k::lag]))
 beats=[];pos=phase
 while pos<len(onset):
  center=round(pos);lo=max(0,center-4);hi=min(len(onset),center+5)
  peak=max(range(lo,hi),key=lambda i:onset[i]*(1-abs(i-pos)/8))
  # Follow locally detected percussion without snapping to every transient.
  corrected=pos*.55+peak*.45;beats.append(round(corrected*.02,3));pos=corrected+lag
 result[path.name]={'bpm':round(60/period,1),'beats':beats}
 print(path.name,round(60/period,1),'estimated BPM')
(root/'dist/track-rhythm.js').write_text('// Estimated from audio onsets; review musical phrasing by ear.\nwindow.TRACK_RHYTHM='+json.dumps(result,separators=(',',':'))+';\n')
