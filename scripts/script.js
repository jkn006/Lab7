// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

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
          router.setState('entry', newPost, currNumber);
        })
        elemNumber++;
      });
    });
});

var setting = document.querySelector('img');
setting.addEventListener('click', function(){
  router.setState('settings', null);
})

window.addEventListener('popstate', () => {
  let body = document.querySelector("body");
  if(body.className == "settings"){
    body.removeAttribute("class", "settings");
  }
  else if(body.className == "single-entry"){
    body.removeAttribute("class", "single-entry");
    let entryPage = document.querySelector('entry-page');
    entryPage.remove();
    let newEntryPage = document.createElement('entry-page');
    body.appendChild(newEntryPage);
  }
  let top = document.querySelector("header h1");
  top.innerHTML = "Journal Entries";
})

var titl = document.querySelector('h1');
titl.addEventListener('click', () => {
  let body = document.querySelector("body");
  if(body.className == "settings"){
    body.removeAttribute("class", "settings");
  }
  else if(body.className == "single-entry"){
    body.removeAttribute("class", "single-entry");
    let entryPage = document.querySelector('entry-page');
    entryPage.remove();
    let newEntryPage = document.createElement('entry-page');
    body.appendChild(newEntryPage);
  }
  let top = document.querySelector("header h1");
  top.innerHTML = "Journal Entries";
  history.back();
})

