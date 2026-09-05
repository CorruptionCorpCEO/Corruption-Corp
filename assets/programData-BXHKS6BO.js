import{_ as d,a as m,b,c as u,d as _,e as f,f as w,g as y,h as v,i as k,j as P,k as x,l as S}from"./pinballa-cover-B6FL3X3S.js";const C=`// Fractal Crack "home page" content. Same format as Pinballa/MixPass's
// page.txt: an [INFO] block of key - value lines, then a [DESCRIPTION] block
// whose raw lines become the body (blank line = new paragraph). The \`app\`
// field embeds the fractal-crack web app itself (a static HTML+JS toy hand-
// edited straight in data/site/fractalcrack/ — see that folder's note in
// data/site/README.txt), opened full-screen by the PLAY button; \`route\` gives
// the running tool its own URL (corruptioncorp.net/fractalcrack).

[INFO]
title			- FRACTAL CRACK
tagline			- A live analog video-feedback fractal generator
hero image		- images/logo.png
app			- /fractalcrack/index.html
app label		- PLAY
route			- fractalcrack

[DESCRIPTION]
Fractal Crack simulates the classic trick of pointing a camera at the screen it's feeding — endless recursive echoes of the last frame folding back into the next — and puts every stage of that loop on knobs you can turn live, right here in the site.

Camera controls zoom, rotate, pan and warp the lens; Signal shapes brightness, contrast, sharpness, colour, hue and gain; Feedback dials in chroma bleed, delay, kaleidoscope mirroring and edge behaviour; Seed injects shapes into the loop and sets how they drift. Play, reset, inject a fresh seed, randomise the whole rig, or upload your own shape to feed in.

Everything renders in real time in WebGL, so a small nudge on any knob ripples through the feedback loop and comes back transformed a moment later.
`,L=`// MixPass "home page" content. Mirrors an artist's id.txt: an [INFO] block of
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
// Not released yet: the Programs grid shows this one greyed out with a padlock
// and refuses to open it (like the Grit / Store menus). Delete this line - or
// set it to false - to launch it.
locked			- true

[DESCRIPTION]
MixPass is a cross-platform iOS and Android app with a late-2000s Frutiger Aero / Nintendo Wii Menu aesthetic that connects local people who share favourite artists.

Flip on Share Location to send out StreetPass-style signal rings and surface everyone within 25km who loves the same artists — then match and chat in realtime. Post regional shout-outs, vote on the community board, and build a glossy profile with a rainbow name-hue slider.

Built on Expo + React Native + TypeScript with Supabase and the Spotify Web API.
`,I=`// Pinballa "home page" content. Same format as MixPass's page.txt: an [INFO]
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
`,O=Object.assign({"/data/programs/Fractal Crack/page.txt":C,"/data/programs/MixPass/page.txt":L,"/data/programs/Pinballa/page.txt":I}),p=Object.assign({"/data/programs/Fractal Crack/fractal-crack-cover.png":S,"/data/programs/Fractal Crack/images/logo.png":x,"/data/programs/MixPass/images/Screenshot_1782752778.png":P,"/data/programs/MixPass/images/Screenshot_1782752803.png":k,"/data/programs/MixPass/images/Screenshot_1782752888.png":v,"/data/programs/MixPass/images/Screenshot_1782753087.png":y,"/data/programs/MixPass/images/Screenshot_1782753143.png":w,"/data/programs/MixPass/images/Screenshot_1782753511.png":f,"/data/programs/MixPass/images/logo.png":_,"/data/programs/MixPass/mixpass-cover.png":u,"/data/programs/Pinballa/images/bgtexture.png":b,"/data/programs/Pinballa/images/logo.png":m,"/data/programs/Pinballa/pinballa-cover.png":d}),M=new Set(["","-","*url*","*directory*"]),g=t=>{const a=(t??"").trim();return M.has(a.toLowerCase())?"":a};function R(t){const a={},s=[];let n="";for(const r of t.split(/\r?\n/)){const o=r.trim();if(o.startsWith("//"))continue;if(o.startsWith("[")&&o.endsWith("]")){n=o.slice(1,-1).trim().toUpperCase();continue}if(n==="DESCRIPTION"){s.push(o);continue}if(!o)continue;const l=o.indexOf("-");if(l===-1)continue;const i=o.slice(0,l).trim().toLowerCase();a[i]=g(o.slice(l+1))}const e=s.join(`
`).trim().split(/\n\s*\n/).map(r=>r.replace(/\s*\n\s*/g," ").trim()).filter(Boolean);return{info:a,description:e}}function F(t){const a=new Map,s=new Map;for(const[n,e]of Object.entries(p)){if(!n.startsWith(t+"/"))continue;const r=n.slice(t.length+1).toLowerCase();a.set(r,e),s.set(r.split("/").pop(),e)}return n=>{if(!n)return"";const e=n.replace(/^\.?\//,"").toLowerCase();return a.get(e)||s.get(e.split("/").pop())||""}}function A(t,a){const s=t.split("/").pop(),n=F(t),{info:e,description:r}=R(a),o=n(e["hero image"]||e.hero||e.image),l=Object.entries(p).filter(([i])=>i.startsWith(t+"/images/")).sort(([i],[h])=>i.localeCompare(h)).map(([,i])=>i).filter(i=>i&&i!==o);return{folder:s,title:e.title||s,tagline:e.tagline||"",hero:o,shots:l,download:e.download||"",downloadLabel:e["download label"]||"Download",app:e.app||"",appLabel:e["app label"]||"Launch",route:(e.route||"").toLowerCase(),locked:/^(true|yes|1)$/i.test(g(e.locked)),description:r}}const c={};for(const[t,a]of Object.entries(O)){const s=t.replace(/\/page\.txt$/,""),n=A(s,a);c[n.folder]=n}const E=t=>c[t]||null,D=t=>Object.values(c).find(a=>a.route&&a.route===t)||null;export{c as PROGRAMS,E as getProgram,D as programForRoute};
