/*// Get audio element
const audio = new Audio('https://youtu.be/D4VpVRtbx7w?si=_zwIcqGRIBJWynVd'); // Replace with your audio link

// Get buttons
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const stopButton = document.getElementById('stopButton');

// Play audio
playButton.addEventListener('click', function() {
  audio.play();
});

// Pause audio
pauseButton.addEventListener('click', function() {
  audio.pause();
});

// Stop audio (reset to beginning)
stopButton.addEventListener('click', function() {
  audio.pause();
  audio.currentTime = 0; // Reset playback to the beginning
});

//Optional: Audio ended event.
audio.addEventListener('ended', function(){
    console.log("Audio Ended");
    //Optional actions after audio ends.
});

//Optional: Adding volume control.
const volumeSlider = document.getElementById("volumeSlider");

if(volumeSlider){
    volumeSlider.addEventListener("input", function(){
        audio.volume = this.value;
    });
}*/
//for scroll up and down
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.classList.add('hidden');
  } 
  else {
    // Scrolling up
    header.classList.remove('hidden');
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});

//for lang
async function loadLanguage(lang) {
  const response = await fetch(`../../../language/${lang}.json`);
  const data = await response.json();
  return data;
}

async function translate(lang, key) {
  const languageData = await loadLanguage(lang);
  const keys = key.split('.');
  let value = languageData;
  for (let k of keys) {
      value = value[k];
      if (value === undefined) {
          return key; // Return the key if translation is missing
      }
  }
  return value;
}

async function updateUI(lang,name) {
  language = document.getElementById('language');
  ritleft = document.querySelectorAll('.rit-left');
  navbar =document.querySelector('.navbar-nav');
  logo = document.querySelector('.navbar-brand.logo');
  join = document.querySelector('.i18n-join');

  language.textContent=name;
  const translations = {
      'i18n-haven-title': 'home.haven',
      'i18n-home': 'home.home',
      'i18n-about': 'home.about',
      'i18n-reels': 'home.reels',
      'i18n-stages': 'home.stages',
      'i18n-pregnancy': 'home.pregnancy',
      'i18n-birth': 'home.birth',
      'i18n-year1': 'home.year1',
      'i18n-year2-3': 'home.year2-3',
      'i18n-blog': 'home.blog',
      'i18n-publications': 'home.publications',
      'i18n-join': 'home.join',
      'i18n-learn': 'home.learn',
      'i18n-inform_Support' : 'home.inform_Support',
      'i18n-Joyful': 'home.Joyful',
      'i18n-enter': 'home.enter',
      'i18n-confSupp': 'home.confSupp',
      'i18n-mum': 'home.mum',
      'i18n-child': 'home.child',
      'i18n-family': 'home.family',
      'i18n-Community': 'home.Community',
      'i18n-Forums': 'home.Forums',
      'i18n-Events': 'home.Events',
      'i18n-Resources': 'home.Resources',
      'i18n-Follow': 'home.Follow',
      'i18n-Support': 'home.Support',
      'i18n-Status': 'home.Status',
      'i18n-Privacy': 'home.Privacy',
      'i18n-Terms': 'home.Terms',
      'i18n-Contact': 'home.Contact',
      'i18n-H2025' : 'home.H2025'
  };

  for (const className in translations) {
      if (translations.hasOwnProperty(className)) {
          const translationKey = translations[className];
          const elements = document.querySelectorAll('.' + className);
          elements.forEach(async element => {
              element.textContent = await translate(lang, translationKey);
          });
      }
  }
  console.log(ritleft)
  ritleft.forEach(async element => {
    if(lang =='ar'){
      element.style.flexDirection = 'row-reverse';
      navbar.classList.add('fs-5');
    }
    else if(lang =='en'){
      element.style.flexDirection = 'row';
      navbar.style.fontSize = '1.2rem';
      console.log( navbar.style.fontSize)
      navbar.classList.remove('fs-5');
      logo.classList.add('fs-3');
      logo.classList.remove('fs-2');
    }
  });

}

updateUI('ar','العربية'); // Load English translations
//for
