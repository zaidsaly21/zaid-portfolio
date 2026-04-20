const reveals = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.88;

    reveals.forEach((item) => {
        const top = item.getBoundingClientRect().top;
        if (top < triggerBottom) {
            item.classList.add("show");
        }
    });
};

const setActiveLink = () => {
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
    revealOnScroll();
    setActiveLink();
});

window.addEventListener("load", () => {
    revealOnScroll();
    setActiveLink();
});