/* =========================
   TYPING ANIMATION
========================= */

const words = [
    "Problem Solver",
    "Developer",
    "Programmer",
    "Web Developer"
];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

const typing = document.getElementById("typing");


function typeEffect() {

    const currentWord = words[wordIndex];


    if (!isDeleting) {

        typing.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;


        if (charIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;


        if (charIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }


    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}


typeEffect();


/* =========================
   MOBILE MENU
========================= */

const menu = document.querySelector(".menu");

const navLinks = document.querySelector(".nav-links");


menu.addEventListener("click", function () {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";

        navLinks.style.flexDirection = "column";

        navLinks.style.position = "absolute";

        navLinks.style.top = "75px";

        navLinks.style.right = "20px";

        navLinks.style.background = "#0b1025";

        navLinks.style.padding = "20px";

        navLinks.style.borderRadius = "10px";
    }

});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".section-title, .education-card, .about-card, .skill, .project-card, .contact-info, form"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


/* =========================
   PROJECT CARD STAGGER
========================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});


/* =========================
   ABOUT CARD STAGGER
========================= */

const aboutCards = document.querySelectorAll(".about-card");

aboutCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});
navLinks.classList.toggle("active");