// Function to load the HTML content from an external file into a container
function loadHTML(url, containerId) {
  fetch(url)
      .then(response => response.text())
      .then(data => {
          document.getElementById(containerId).innerHTML = data;
          updateUI('ar', 'العربية'); // Load English translations
      })
      .catch(error => console.error('Error loading the HTML file:', error));
}

document.addEventListener('DOMContentLoaded', function() {
  loadHTML('../../Assets/Html/navbar.html', 'navbar-container');
  loadHTML('../../Assets/Html/footer.html', 'footer-container');
  
});

 
function srcnav(){
  console.log(document.querySelector('img.logo').src)
  document.querySelector('img.logo').src="../../Assets/images/HalfTranLogo.png";
  document.querySelector('#nav-login').href="../Login_Signup/login.html" ;
  document.querySelector('#nav-signup').href="../Login_Signup/signup.html" ;
}
