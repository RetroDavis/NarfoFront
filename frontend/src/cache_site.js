const cacheName = "v2"

//Call install Event
self.addEventListener('install', e => {
    console.log('Service Worker: Installed');

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);

            })
            .then(() => self.skipWaiting())
    )
});

//Call Activate Event
self.addEventListener('activate', e => {
    console.log('Service Worker: Activated');

    //Remove unwanted cache
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== cacheName) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

//Call Fetch Event
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching');
    e.respondWith(
        fetch(e.request)
            .then(res => {
                const resClone = res.clone();
                caches
                    .open(cacheName)
                    .then(cache => {
                        cache.put(e.request, resClone);
                    });
                return res;
            }).catch(err=> caches.match(e.request).then(res => res))
    )
})