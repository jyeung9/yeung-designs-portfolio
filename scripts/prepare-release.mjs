// Creates a local sealed artifact only. Publication is a separate authorized Sites action.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
const value=key=>{const i=process.argv.indexOf(key);return i<0?null:process.argv[i+1]};
const sha=value('--approved-commit'),evidencePath=value('--evidence');
assert(sha&&/^[0-9a-f]{40}$/.test(sha)&&evidencePath,'Required: --approved-commit <40-char SHA> --evidence <review.json>');
const evidence=JSON.parse(fs.readFileSync(evidencePath));
assert(evidence.approval?.by==='Julie'&&evidence.approval?.commit===sha&&evidence.approval?.message&&evidence.approval?.at,'Record actual user approval of this commit before preparing a release');
assert.equal(execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim(),sha,'HEAD is not the approved commit');
assert.equal(execFileSync('git',['status','--porcelain','--untracked-files=no'],{encoding:'utf8'}).trim(),'','Commit tracked changes before release');
// Check approved evidence against current artifact before creating anything.
execFileSync(process.execPath,['scripts/check-release.mjs','--evidence',path.resolve(evidencePath)],{stdio:'inherit'});
execFileSync('npm',['test'],{stdio:'inherit'});
const root=fs.mkdtempSync(path.join(os.tmpdir(),'yeung-approved-release-'));
const archive=execFileSync('git',['archive',sha],{maxBuffer:256*1024*1024});
execFileSync('tar',['-xf','-','-C',root],{input:archive});
// Build exactly once from an immutable commit, never from untracked preview files.
execFileSync('git',['init','-q',root]);
execFileSync('git',['-C',root,'fetch','-q',process.cwd(),sha]);
execFileSync('git',['-C',root,'reset','-q',sha]);
execFileSync(process.execPath,['scripts/build-assets.mjs'],{cwd:root,stdio:'inherit'});
const built=JSON.parse(fs.readFileSync(path.join(root,'dist/build-manifest.json')));
assert.equal(built.sourceCommit,sha);assert.equal(built.artifactHash,evidence.artifactHash,'Rebuilt artifact differs from approved preview; stop and review');
assert.equal(built.dirty,false,'Release source is not clean');
fs.writeFileSync(path.join(root,'release-seal.json'),JSON.stringify({sourceCommit:sha,artifactHash:built.artifactHash,approval:evidence.approval,artifactDirectory:path.join(root,'dist')},null,2));
console.log('Sealed artifact (not published): '+path.join(root,'dist'));
