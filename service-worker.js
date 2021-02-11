const CACHE_NAME = 'yu';
const urlsToCache = [
    '/',
    '/wordpress/wp-includes/js/jquery/jquery-migrate.min.js',
    '/wordpress/wp-includes/js/jquery/jquery.min.js',
    '/wordpress/wp-includes/js/wp-embed.min.js'
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    ExtendableEvent.waitUntil():
    
    e.waitUntil(
        caches.open(chache_name).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            console.log(cache);
            return cache.addAll(urlsToCache);
        })
    );
}); 
self.addEventListener('fetch', function (e) {
 console.log('[service worker] fetch',e.request.url);
/*respondWith()*/
    e.resondWith(
        caches.match(e.request).then(function () {
            
           if (response) {
               return response;
           }

          
            var request = e.request.clone(); 
            
            return fetch(request).then(function (httpRes) {
               

                
                if(!httpRes||httpRes.status!==200){
                    return httpRes;
                }
                
                var responseClone = httpRes.clone();
                caches.open(cache_name).then(function (cache) {
                    cache.put(e.request,responseClone);
                });
                return httpRes;
            });

        })
    );

});
