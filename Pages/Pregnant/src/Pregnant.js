// Function to load the HTML content from an external file into a container
function loadHTML(url, containerId, callback) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          document.getElementById(containerId).innerHTML = data;
          if (callback) callback(); // Ensure updates happen after loading
      })
      .catch(error => console.error('Error loading the HTML file:', error));
}

document.addEventListener('DOMContentLoaded', function() {

  loadHTML('../../Assets/Html/navbar.html', 'navbar-container', () => {
   //   updateUI(savedLang, langName);
  });

  loadHTML('../../Assets/Html/footer.html', 'footer-container', () => {
   // updateUI(savedLang, langName);
  });

  //updatePost(savedLang, langName);
});

