
// Load External HTML (Navbar, Footer)
function loadHTML(url, containerId, callback) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          document.getElementById(containerId).innerHTML = data;
          if (callback) callback();
      })
      .catch(error => console.error('Error loading the HTML file:', error));
}

// Handle Page Load & Language Persistence
document.addEventListener('DOMContentLoaded', function () {
  let savedLang = localStorage.getItem('selectedLang') || 'ar'; // Default to Arabic
  let langName = savedLang === 'ar' ? 'العربية' : 'English';

  loadHTML('../../Assets/Html/navbar.html', 'navbar-container', () => {
      updateUI(savedLang, langName);
  });

  loadHTML('../../Assets/Html/footer.html', 'footer-container', () => {
    updateUI(savedLang, langName);
  });
});

// Update Post Content Translation
async function updatePost(lang, name) {
  const language = document.getElementById('language');
  language.textContent = name;

  const translations = {
      "i18n-a-Team": "Post.a-Team",
      "i18n-a-PTUK": "Post.a-PTUK",
      "i18n-a-Haven-Vision": "Post.a-Haven-Vision",
      "i18n-p-Team": "Post.p-Team",
      "i18n-p-PTUK": "Post.p-PTUK",
      "i18n-p-Haven-Vision": "Post.p-Haven-Vision",
      'i18n-about-us': 'Post.about-us',
      'i18n-p-about': 'Post.p-about',
      'i18n-a-post1': 'Post.a-post1',
      'i18n-p-post1': 'Post.p-post1',
      'i18n-d-post1': 'Post.d-post1',
      'i18n-readmore': 'Post.readmore',
      'i18n-a-post2': 'Post.a-post2',
      'i18n-p-post2': 'Post.p-post2',
      'i18n-d-post2': 'Post.d-post2',
      'i18n-a-post3': 'Post.a-post3',
      'i18n-p-post3': 'Post.p-post3',
      'i18n-d-post3': 'Post.d-post3',
  };

  for (const className in translations) {
      if (translations.hasOwnProperty(className)) {
          const translationKey = translations[className];
          const elements = document.querySelectorAll('.' + className);

          await Promise.all(Array.from(elements).map(async (element) => {
              element.textContent = await translate(lang, translationKey);
          }));
      }
  }

  let about = document.querySelector('.i18n-p-about');
  if (lang === 'ar') {
      about.classList.remove("text-start");
      about.classList.add("text-end");
      about.dir = "rtl";
  } else {
      about.classList.remove("text-end");
      about.classList.add("text-start");
      about.dir = "ltr";
  }
}
