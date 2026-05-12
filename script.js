const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const cards = document.querySelectorAll(".section-card");
const heroImage = document.querySelector(".hero-image img");

const revealSections = () => {
    const triggerPoint = window.innerHeight * 0.85;

    cards.forEach((card) => {
        const top = card.getBoundingClientRect().top;
        if (top < triggerPoint) {
            card.classList.add("show");
        }
    });
};

const setActiveNav = () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
};

window.addEventListener("scroll", () => {
    revealSections();
    setActiveNav();
});

window.addEventListener("load", () => {
    revealSections();
    setActiveNav();

    if (heroImage) {
        heroImage.classList.add("hero-visible");
    }

});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});