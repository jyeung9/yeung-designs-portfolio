const assert=require('node:assert/strict');
const fs=require('node:fs');
const os=require('node:os');
const path=require('node:path');
const {spawnSync,execFileSync}=require('node:child_process');
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'portfolio-gate-test-'));
try{
 const file=path.join(dir,'review.json');
 fs.writeFileSync(file,JSON.stringify({artifactHash:'stale-artifact',approval:null}));
 const stale=spawnSync(process.execPath,['scripts/check-release.mjs','--evidence',file],{encoding:'utf8'});
 assert.notEqual(stale.status,0);assert.match(stale.stderr,/another artifact/);
 const sha=execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
 const unapproved=spawnSync(process.execPath,['scripts/prepare-release.mjs','--approved-commit',sha,'--evidence',file],{encoding:'utf8'});
 assert.notEqual(unapproved.status,0);assert.match(unapproved.stderr,/actual user approval/);
 console.log('Release gate rejects stale rendered evidence and missing approval. No artifact built or published.');
}finally{fs.rmSync(dir,{recursive:true,force:true})}
