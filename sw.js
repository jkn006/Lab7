// // sw.js - Service Worker

// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('sw.js').then(function(registration) {
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       }, function(err) {
//         console.log('ServiceWorker registration failed: ', err);
//       });
//     });
//   }

// var CACHE_NAME = 'Lab7-service-worker';
// var urlsToCache = [
//     'https://cse110lab6.herokuapp.com/entries'
// ];
// // You will need 3 event listeners:
// //   - One for installation
// self.addEventListener('install', function(event) {
//     // Perform install steps
//     event.waitUntil(
//       caches.open(CACHE_NAME)
//         .then(function(cache) {
//           console.log('Opened cache');
//           return cache.addAll(urlsToCache);
//         })
//     );
// });

// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.match(event.request)
//             .then(function (response) {
//                 // Cache hit - return response
//                 if (response) {
//                     return response;
//                 }
//                 return fetch(event.request);
//             }
//             )
//     );
// });

// self.addEventListener('activate', event => {
//     event.waitUntil(clients.claim());
// });

