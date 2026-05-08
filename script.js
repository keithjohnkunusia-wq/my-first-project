const button = document.getElementById("theme-toggle");

button.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
});

const text1 = "Software Developer & Computer Science Student 💻";
const text2 = "Building modern and interactive digital experiences 🚀";

let index1 = 0;
let index2 = 0;

function typeText1() {

    if (index1 < text1.length) {

        document.getElementById("typing-text").innerHTML += text1.charAt(index1);

        index1++;

        setTimeout(typeText1, 80);
    }
}

function typeText2() {

    if (index2 < text2.length) {

        document.getElementById("typing-text2").innerHTML += text2.charAt(index2);

        index2++;

        setTimeout(typeText2, 80);
    }
}

typeText1();

setTimeout(() => {
    typeText2();
}, 3200);

/* SCROLL ANIMATION */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        } else {

            entry.target.classList.remove("show");

        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));

/* ACTIVE NAVBAR */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* HAMBURGER MENU */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});