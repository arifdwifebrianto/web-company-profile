document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. FITUR DARK MODE
    // ==========================================
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const navbar = document.querySelector('.navbar');

    // Cek LocalStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        if(darkModeToggle) darkModeToggle.innerHTML = "☀️ Light";
        if(navbar) navbar.classList.remove('navbar-light');
        if(navbar) navbar.classList.add('navbar-dark');
    } else {
        if(navbar) navbar.classList.add('navbar-light');
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                darkModeToggle.innerHTML = "☀️ Light";
                localStorage.setItem('theme', 'dark');
                if(navbar) navbar.classList.replace('navbar-light', 'navbar-dark');
            } else {
                darkModeToggle.innerHTML = "🌙 Dark";
                localStorage.setItem('theme', 'light');
                if(navbar) navbar.classList.replace('navbar-dark', 'navbar-light');
            }
        });
    }

    // ==========================================
    // 2. FITUR VALIDASI FORM
    // ==========================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = document.getElementById('name').value;
            const emailInput = document.getElementById('email').value;
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');

            nameError.innerText = "";
            emailError.innerText = "";
            let isValid = true;

            if (nameInput.trim() === "") {
                nameError.innerText = "Nama wajib diisi!";
                isValid = false;
            }

            if (emailInput.trim() === "") {
                emailError.innerText = "Email wajib diisi!";
                isValid = false;
            }

            if (isValid) {
                alert("Terima kasih! Kami akan segera menghubungi Anda.");
                contactForm.reset();
            }
        });
    }
});