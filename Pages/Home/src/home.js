
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
 

  loadHTML('../../Assets/Html/navbar.html', 'navbar-container', () => {
    
  });

  loadHTML('../../Assets/Html/footer.html', 'footer-container', () => {
   
  });
});
