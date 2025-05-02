// Handle Page Load & Language Persistence
document.addEventListener('DOMContentLoaded', function () {
    loadHTML('../../Assets/Html/navbar.html', 'navbar-container', () => {
        publicationLink ();
    });
    loadHTML('../../Assets/Html/footer.html', 'footer-container', () => {
    });
  });

function publicationLink () {
    const publicationLink = document.querySelector('.i18n-publications');
    console.log(publicationLink)
    if (publicationLink) {
        publicationLink.textContent = 'اختيار الاسم';
        publicationLink.setAttribute('href', '../Pregnant/name.html');
    } else {
        console.warn('لم يتم العثور على رابط المنشورات لتغييره.');
    }
};