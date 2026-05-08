// ===============================
// HAMBURGER MENU
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    // CHANGE ICON

    if (document.body.classList.contains("light-mode")) {
        themeToggle.innerHTML = "☀️";
    } else {
        themeToggle.innerHTML = "🌙";
    }

});

// ===============================
// SCROLL ANIMATION
// ===============================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));

// ===============================
// ACTIVE NAV LINK
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach((a) => {

        a.classList.remove("active");

        if (a.getAttribute("href") === "#" + current) {
            a.classList.add("active");
        }

    });

});

// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Message sent successfully!");

    contactForm.reset();

});