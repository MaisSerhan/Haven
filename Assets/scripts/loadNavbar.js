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
    });
  
});
