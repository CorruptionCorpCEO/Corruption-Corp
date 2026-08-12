// Service worker — the minimum an installable app needs, and deliberately no
// more than that.
//
// WHY IT EXISTS: Chrome will only offer to install a web app if the origin has
// a service worker that answers a navigation while offline. That is the whole
// job. This site is NOT an offline app — it needs its bundle, scene.glb and
// Firebase — so it does not pretend to be one: the shell is cached so a
// navigation returns something rather than a browser error page, and everything
// else goes to the network as usual.
//
// WHY IT IS NETWORK-FIRST: the site ships as static files behind GitHub Pages,
// where a deploy is just new files appearing. A cache-first worker would keep
// serving the old shell to everyone who had already visited — a permanent,
// invisible staleness bug that outlives the deploy that caused it. Every
// navigation goes to the network first here; the cache is only what answers
// when the network doesn't.
//
// Hashed assets (/assets/<hash>.js) are immutable and the HTTP cache already
// handles them well. Copying them in here would only add a second, staler copy
// to reason about, so nothing else is cached.

const CACHE = 'cc-shell-v1'
const SHELL = '/'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      // `cache: 'reload'` so installing can't pick the shell out of the HTTP
      // cache — the point of installing is to capture the CURRENT one.
      .then((cache) => cache.add(new Request(SHELL, { cache: 'reload' })))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting()), // offline at install time: carry on
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  // Only navigations are handled. Everything else falls through to the browser
  // untouched (no respondWith), which is exactly the normal network path.
  if (req.method !== 'GET' || req.mode !== 'navigate') return
  event.respondWith(
    fetch(req)
      .then((res) => {
        // Keep the offline fallback current — but only from the SHELL's own
        // URL. Every deep link (/mixpass, /<artist>) serves its own copy of the
        // html, and storing one of those under "/" would make the offline
        // fallback whichever page happened to be visited last. Opaque/error
        // responses are never stored: they would answer a later navigation
        // with a failure.
        if (res && res.ok && res.type === 'basic' && new URL(req.url).pathname === SHELL) {
          const copy = res.clone()
          caches.open(CACHE).then((cache) => cache.put(SHELL, copy))
        }
        return res
      })
      .catch(() => caches.match(SHELL)),
  )
})
