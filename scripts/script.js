// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;
const goBack = router.goBack;

var location = window.location;

// Make sure you register your service worker here too

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/Lab7/sw.js').then(function(registration) {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

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
          setState({ type: "entry", entry: entry }, currNumber, false);
        });
        elemNumber++;
      });
    });
    setState({type: "journal-entry"}, 0 , false);
});

var setting = document.querySelector('img');
setting.addEventListener('click', function(){
  setState({type: "settings"}, 0, false);
})

window.addEventListener('popstate', (event) => {
  setState(event.state, 0, true);
})

var titl = document.querySelector('h1');
titl.addEventListener('click', () => {
  if(location.hash != ""){
    setState({type: "journal-entry"}, 0, false);
  }
})
