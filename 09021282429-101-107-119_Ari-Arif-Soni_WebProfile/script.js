document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // 1. FITUR DARK MODE
  // ==========================================
  const darkModeToggle = document.getElementById("darkModeToggle");
  
  const rootElement = document.documentElement; 
  const bodyElement = document.body;
  const navbar = document.querySelector(".navbar");

  const isDarkMode = rootElement.classList.contains("dark-mode");

  if (isDarkMode && !bodyElement.classList.contains("dark-mode")) {
      bodyElement.classList.add("dark-mode");
  }

  if (isDarkMode) {
    if (darkModeToggle) darkModeToggle.innerHTML = "☀️ Light";

    if (navbar) {
        navbar.classList.add("navbar-dark");
        navbar.classList.remove("navbar-light");
    }
  } else {

    if (darkModeToggle) darkModeToggle.innerHTML = "🌙 Mode";
    if (navbar) {
        navbar.classList.add("navbar-light");
        navbar.classList.remove("navbar-dark");
    }
  }

  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
    
      rootElement.classList.toggle("dark-mode");

      bodyElement.classList.toggle("dark-mode"); 

      if (rootElement.classList.contains("dark-mode")) {
        darkModeToggle.innerHTML = "☀️ Light";
        localStorage.setItem("theme", "dark");
        if (navbar) navbar.classList.replace("navbar-light", "navbar-dark");
      } else {
        darkModeToggle.innerHTML = "🌙 Mode";
        localStorage.setItem("theme", "light");
        if (navbar) navbar.classList.replace("navbar-dark", "navbar-light");
      }
    });
  }

  // ==========================================
  // 2. FITUR VALIDASI FORM
  // ==========================================
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      let isValid = true;

      if (isValid) {
        alert("Terima kasih! Kami akan segera menghubungi Anda.");
        contactForm.reset();
      }
    });
  }
});