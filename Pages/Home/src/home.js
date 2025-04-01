
// Load External HTML (Navbar, Footer)
function loadHTML(url, containerId, callback) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          document.getElementById(containerId).innerHTML = data;
          if (callback) callback();
          navbar();
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

function navbar(){
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  console.log(navLinks,navLinks[0],navbarCollapse)
  navLinks.forEach(link => {
      link.addEventListener("click", () => {
          if (navbarCollapse.classList.contains("show")) {
            navbarCollapse.classList.remove("show");
          }
      });
  });
};
