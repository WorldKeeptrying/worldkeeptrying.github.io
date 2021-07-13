self.addEventListener('install', function(e) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/index.js',
        '/sw2.js',
        '/manifest.json',
        '/js/matery.js',
      ]);
    })
  );
});
self.addEventListener('install', function(e) {
  console.log('install success')
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  // e.respondWith(
  //   caches.match(e.request).then(function(response) {
  //     return response || fetch(e.request);
  //   })
  // );
});




self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(e.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();
        
        caches.open('v1').then(function (cache) {
          cache.put(e.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/sw-test/gallery/myLittleVader.jpg');
      });
    }
  }));
});