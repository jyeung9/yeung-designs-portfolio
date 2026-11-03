"""Measure 100 ms RMS windows from the local music files for the listener animation."""
import array, json, math, pathlib, subprocess
root=pathlib.Path(__file__).resolve().parents[1]
result={}
for path in sorted((root/'dist/assets/music').glob('*.mp3')):
    raw=subprocess.check_output(['ffmpeg','-v','error','-i',str(path),'-f','f32le','-ac','1','-ar','8000','-'])
    data=array.array('f');data.frombytes(raw)
    levels=[math.sqrt(sum(x*x for x in data[i:i+800])/len(data[i:i+800])) for i in range(0,len(data),800)]
    peak=sorted(levels)[int(len(levels)*.95)] or 1
    result[path.name]=[round(min(1,v/peak),3) for v in levels]
(root/'dist/track-energy.js').write_text('// Generated from local audio: 100 ms RMS, normalized to each track’s 95th percentile.\nwindow.TRACK_ENERGY='+json.dumps(result,separators=(',',':'))+';\n')
print('Measured',len(result),'tracks')
