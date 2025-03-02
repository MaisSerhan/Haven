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

async function updateUI(lang) {
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
      'i18n-join': 'home.join'
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
}

updateUI('en'); // Load English translations