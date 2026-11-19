/* The MP3 button's other half, for the programs (Pinballa, Fractal Crack): their
   Corruption Corp plate IS the site's MP3 button now, always, and its click
   calls window.ccOpenMp3().

   Opened from the site's Programs menu, a program runs inside the site
   (ProgramFrame, `?cc-embed=1` on its URL): the site owns the music, so this
   just asks it — postMessage { type: 'cc:mp3' } to the parent.

   Opened DIRECTLY (/pinballa, /fractalcrack), there is no site round it, so
   this loads /mp3.html — the module alone (src/mp3Main.jsx) — into a
   see-through, full-screen overlay of the program's own, the first time it is
   pressed, and KEEPS it loaded after that: put away (a tap outside, Escape),
   the overlay only stops taking taps, so the music plays on.

   A plain script, served as is (data/site/hud/ is copied untouched), so both
   programs — one a Vite build, one static html — can share it. */
(function () {
  var EMBED = new URLSearchParams(location.search).has('cc-embed') && window.parent !== window;
  var frame = null;
  var ready = false;

  function show() {
    frame.style.pointerEvents = 'auto';
    if (ready) frame.contentWindow.postMessage({ type: 'cc:mp3-show' }, location.origin);
  }

  window.addEventListener('message', function (e) {
    if (e.origin !== location.origin || !frame || e.source !== frame.contentWindow) return;
    if (e.data && e.data.type === 'cc:mp3-hidden') frame.style.pointerEvents = 'none';
    // The page's listener is up (its React effect has run — that can be after
    // the iframe's `load`, so `load` can't be the signal): show it now.
    if (e.data && e.data.type === 'cc:mp3-ready') {
      ready = true;
      show();
    }
  });

  window.ccOpenMp3 = function () {
    if (EMBED) {
      try { window.parent.postMessage({ type: 'cc:mp3' }, location.origin); } catch (err) { /* no parent */ }
      return;
    }
    if (frame) return show();
    frame = document.createElement('iframe');
    frame.src = '/mp3.html';
    frame.title = 'Corruption Corp music player';
    frame.setAttribute('allow', 'autoplay');
    frame.style.cssText =
      'position:fixed;left:0;top:0;width:100%;height:100%;border:0;margin:0;padding:0;' +
      'background:transparent;color-scheme:normal;z-index:2147483647;pointer-events:auto';
    document.body.appendChild(frame);
  };
})();
