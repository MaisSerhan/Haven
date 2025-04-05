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

document.addEventListener("DOMContentLoaded", function() {
  // الحصول على الأزرار الخاصة بالقائمة المنسدلة
  const growthStageButton = document.querySelector("a[href='#growth-stage-content']");
  const careTipsButton = document.querySelector("a[href='#care-tips-content']");
  const motorDevelopmentsButton = document.querySelector("a[href='#motor-developments-content']");
  const dailyActivitiesButton = document.querySelector("a[href='#daily-activities-content']");
  const linguisticDevelopmentsButton = document.querySelector("a[href='#linguistic-developments-content']");
  const socialDevelopmentButton = document.querySelector("a[href='#social-development-content']");
  const entertainmentActivitiesButton = document.querySelector("a[href='#entertainment-activities-content']");
  const motorTrainingButton = document.querySelector("a[href='#motor-training-content']");

  // الأقسام التي سيتم عرضها أو إخفاؤها
  const growthStageContent = document.getElementById("growth-stage-content");
  const careTipsContent = document.getElementById("care-tips-content");
  const motorDevelopmentsContent = document.getElementById("motor-developments-content");
  const dailyActivitiesContent = document.getElementById("daily-activities-content");
  const linguisticDevelopmentsContent = document.getElementById("linguistic-developments-content");
  const socialDevelopmentContent = document.getElementById("social-development-content");
  const entertainmentActivitiesContent = document.getElementById("entertainment-activities-content");
  const motorTrainingContent = document.getElementById("motor-training-content");

  // دالة لإخفاء جميع الأقسام
  function hideAllSections() {
      const sections = [
          growthStageContent,
          careTipsContent,
          motorDevelopmentsContent,
          dailyActivitiesContent,
          linguisticDevelopmentsContent,
          socialDevelopmentContent,
          entertainmentActivitiesContent,
          motorTrainingContent
      ];

      sections.forEach(section => {
          section.style.display = "none";
      });
  }

  // إضافة الأحداث لكل زر لتغيير المحتوى المعروض
  growthStageButton.addEventListener("click", function() {
      hideAllSections();
      growthStageContent.style.display = "block";
  });

  careTipsButton.addEventListener("click", function() {
      hideAllSections();
      careTipsContent.style.display = "block";
  });

  motorDevelopmentsButton.addEventListener("click", function() {
      hideAllSections();
      motorDevelopmentsContent.style.display = "block";
  });

  dailyActivitiesButton.addEventListener("click", function() {
      hideAllSections();
      dailyActivitiesContent.style.display = "block";
  });

  linguisticDevelopmentsButton.addEventListener("click", function() {
      hideAllSections();
      linguisticDevelopmentsContent.style.display = "block";
  });

  socialDevelopmentButton.addEventListener("click", function() {
      hideAllSections();
      socialDevelopmentContent.style.display = "block";
  });

  entertainmentActivitiesButton.addEventListener("click", function() {
      hideAllSections();
      entertainmentActivitiesContent.style.display = "block";
  });

  motorTrainingButton.addEventListener("click", function() {
      hideAllSections();
      motorTrainingContent.style.display = "block";
  });

  // إخفاء الأقسام عند تحميل الصفحة
  hideAllSections();
});
