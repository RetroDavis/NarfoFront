//make sure sw are supported
if ('serviceWorker' in navigator) {
    console.log('serviceWorker supported');
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('../sw_cached_page.js')
            .register('../cache_site.js')
            .then(reg => console.log('Service Worker: Registered'))
            .catch(err => console.log('Service Worker: Error: ${err}'));
    });
}