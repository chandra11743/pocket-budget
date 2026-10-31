// Offline cache for Pocket Budget only. Bump VERSION when you update index.html.
// The cache names start with "pocket-budget-": other apps on the same github.io site keep their own caches.
const VERSION = 'pocket-budget-v4';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png', './icon-mask-512.png', './apple-touch-icon.png', './privacy.html'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('pocket-budget-') && k !== VERSION).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin || !url.pathname.startsWith(new URL('./', self.registration.scope).pathname)) return;
  const key = url.origin + url.pathname;   // one cache entry per file, whatever the query string
  // network first ('no-cache' revalidates, so an unchanged file is a tiny 304), cache when offline; only good responses are cached
  e.respondWith(fetch(e.request, {cache: 'no-cache'}).then(r => { if (r.ok && r.type === 'basic') { const copy = r.clone(); caches.open(VERSION).then(c => c.put(key, copy)); } return r; })
    .catch(() => caches.match(key).then(r => r || (e.request.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
