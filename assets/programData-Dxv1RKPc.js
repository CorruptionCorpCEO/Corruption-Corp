const h="/assets/Screenshot_1782752778-C4hZAQdG.png",m="/assets/Screenshot_1782752803-BNDO61nU.png",b="/assets/Screenshot_1782752888-Dz1dd9Ia.png",d="/assets/Screenshot_1782753087-jDOUTKba.png",_="/assets/Screenshot_1782753143-D5dKy6Cb.png",u="/assets/Screenshot_1782753511-BbjtZsup.png",f="/assets/logo-BcBw4Vsn.png",w="/assets/mixpass-cover-BiW991XM.png",v="/assets/bgtexture-CeqNR2mf.png",y="/assets/logo-tRGRXRTp.png",P="/assets/pinball-cover-BpfK0vdr.png",S=`// MixPass "home page" content. Mirrors an artist's id.txt: an [INFO] block of
// key - value lines, then a [DESCRIPTION] block whose raw lines become the body
// (blank line = new paragraph). Edit this file to change the page — no code
// changes needed. Image paths are relative to this folder (see images/).

[INFO]
title			- MixPass
tagline			- StreetPass for music taste
hero image		- images/logo.png
download label		- Download
download		- https://example.com/mixpass
route			- mixpass

[DESCRIPTION]
MixPass is a cross-platform iOS and Android app with a late-2000s Frutiger Aero / Nintendo Wii Menu aesthetic that connects local people who share favourite artists.

Flip on Share Location to send out StreetPass-style signal rings and surface everyone within 25km who loves the same artists — then match and chat in realtime. Post regional shout-outs, vote on the community board, and build a glossy profile with a rainbow name-hue slider.

Built on Expo + React Native + TypeScript with Supabase and the Spotify Web API.
`,x=`// Pinballa "home page" content. Same format as MixPass's page.txt: an [INFO]
// block of key - value lines, then a [DESCRIPTION] block whose raw lines become
// the body (blank line = new paragraph). The \`app\` field embeds the pinball web
// app itself (built into public/pinball/ by the pinball repo's
// \`npm run build:site\`), opened full-screen by the PLAY button; \`route\` gives
// the running game its own URL (corruptioncorp.net/pinballa).

[INFO]
title			- PINBALLA
tagline			- Build, skin & publish your own pinball machines
hero image		- images/logo.png
app			- /pinball/index.html
app label		- PLAY
route			- pinballa

[DESCRIPTION]
Pinballa is a pinball construction set that runs right here in the site. Draw walls point by point, mirror them for symmetry, and drop in bumpers, grabbers, point zones and four-stage bosses — then flip it over and play your table instantly in Classic or Fantasies mode.

Every part of the machine is skinnable: the board overlay, plunger, flippers and ball all take custom art from downloadable templates, and every sound — from plunger charge to jackpot — can be replaced with your own audio.

Save machines to your Machine Shop, then publish them to the shared Arcade for everyone to play and chase high scores on. Your Corruption Corp account works here automatically — sign in once and your name and avatar ride along on every machine you publish.
`,O=Object.assign({"/data/programs/MixPass/page.txt":S,"/data/programs/Pinballa/page.txt":x}),c=Object.assign({"/data/programs/MixPass/images/Screenshot_1782752778.png":h,"/data/programs/MixPass/images/Screenshot_1782752803.png":m,"/data/programs/MixPass/images/Screenshot_1782752888.png":b,"/data/programs/MixPass/images/Screenshot_1782753087.png":d,"/data/programs/MixPass/images/Screenshot_1782753143.png":_,"/data/programs/MixPass/images/Screenshot_1782753511.png":u,"/data/programs/MixPass/images/logo.png":f,"/data/programs/MixPass/mixpass-cover.png":w,"/data/programs/Pinballa/images/bgtexture.png":v,"/data/programs/Pinballa/images/logo.png":y,"/data/programs/Pinballa/pinball-cover.png":P}),M=new Set(["","-","*url*","*directory*"]),C=t=>{const a=(t??"").trim();return M.has(a.toLowerCase())?"":a};function I(t){const a={},o=[];let n="";for(const r of t.split(/\r?\n/)){const s=r.trim();if(s.startsWith("//"))continue;if(s.startsWith("[")&&s.endsWith("]")){n=s.slice(1,-1).trim().toUpperCase();continue}if(n==="DESCRIPTION"){o.push(s);continue}if(!s)continue;const l=s.indexOf("-");if(l===-1)continue;const i=s.slice(0,l).trim().toLowerCase();a[i]=C(s.slice(l+1))}const e=o.join(`
`).trim().split(/\n\s*\n/).map(r=>r.replace(/\s*\n\s*/g," ").trim()).filter(Boolean);return{info:a,description:e}}function L(t){const a=new Map,o=new Map;for(const[n,e]of Object.entries(c)){if(!n.startsWith(t+"/"))continue;const r=n.slice(t.length+1).toLowerCase();a.set(r,e),o.set(r.split("/").pop(),e)}return n=>{if(!n)return"";const e=n.replace(/^\.?\//,"").toLowerCase();return a.get(e)||o.get(e.split("/").pop())||""}}function k(t,a){const o=t.split("/").pop(),n=L(t),{info:e,description:r}=I(a),s=n(e["hero image"]||e.hero||e.image),l=Object.entries(c).filter(([i])=>i.startsWith(t+"/images/")).sort(([i],[g])=>i.localeCompare(g)).map(([,i])=>i).filter(i=>i&&i!==s);return{folder:o,title:e.title||o,tagline:e.tagline||"",hero:s,shots:l,download:e.download||"",downloadLabel:e["download label"]||"Download",app:e.app||"",appLabel:e["app label"]||"Launch",route:(e.route||"").toLowerCase(),description:r}}const p={};for(const[t,a]of Object.entries(O)){const o=t.replace(/\/page\.txt$/,""),n=k(o,a);p[n.folder]=n}const R=t=>p[t]||null,D=t=>Object.values(p).find(a=>a.route&&a.route===t)||null,N=Object.freeze(Object.defineProperty({__proto__:null,PROGRAMS:p,getProgram:R,programForRoute:D},Symbol.toStringTag,{value:"Module"}));export{P as _,y as a,v as b,w as c,f as d,u as e,_ as f,d as g,b as h,m as i,h as j,R as k,N as p};
