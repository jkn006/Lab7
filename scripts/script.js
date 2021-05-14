// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;
const goBack = router.goBack;

var location = window.location;

// Make sure you register your service worker here too

var elemNumber = 1;

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        document.querySelector('main').appendChild(newPost);

        let currNumber = elemNumber
        newPost.addEventListener('click', function(){
          setState('entry', newPost, currNumber);
        })
        elemNumber++;
      });
    });
});

var setting = document.querySelector('img');
setting.addEventListener('click', function(){
  setState('settings', null, null);
})

window.addEventListener('popstate', () => {
  goBack();
})

var titl = document.querySelector('h1');
titl.addEventListener('click', () => {
  if(location.hash != ""){
    setState('journal-entry', null, null);
  }
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
