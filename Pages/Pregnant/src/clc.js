document.addEventListener('DOMContentLoaded', function () {
  loadHTML('../../Assets/Html/navbar.html', 'navbar-container', () => {
 const iframe = document.getElementById("myIframe");
const suss=document.querySelector('.bg-success');
console.log(iframe ,suss)
iframe.onload = function() {console.log(iframe ,suss)
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.body.style.backgroundColor = "rgb(255, 171, 200)";
    suss.style.backgroundColor="rgb(255 171 200) !important" ;
});   
});


