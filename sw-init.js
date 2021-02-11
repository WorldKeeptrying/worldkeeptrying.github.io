window.onload = function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js', {
      scope: '/'
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.warn('ServiceWorker registration failed: ' + err);
    });
  }
}
