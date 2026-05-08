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
// EMAILJS SETUP
// ===============================

emailjs.init({
    publicKey: "gZ_HspRCZ_uyUCq8x",
});

// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_98no1s2",
        "m1xrwno",
        this
    )

    .then(() => {

        alert("Message sent successfully!");

        contactForm.reset();

    })

    .catch((error) => {

        console.log(error);

        alert("Failed to send message.");

    });

});