const sections = document.querySelectorAll(".section, .project-card");

sections.forEach((section) => {
  section.classList.add("reveal");
});

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      section.classList.add("active");
    }
  });
});