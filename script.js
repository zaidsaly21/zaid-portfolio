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

// Contact form handling: if you have a Formspree endpoint, set it here.
const FORMSPREE_ENDPOINT = ""; // e.g. https://formspree.io/f/xyz

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("cf-name").value.trim();
    const email = document.getElementById("cf-email").value.trim();
    const message = document.getElementById("cf-message").value.trim();
    const submitBtn = contactForm.querySelector("button[type=submit]");

    if (!name || !email || !message) {
      alert("Please complete all fields before sending.");
      return;
    }

    submitBtn.disabled = true;

    if (FORMSPREE_ENDPOINT) {
      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });

        if (res.ok) {
          alert("Message sent — thank you! I will reply soon.");
          contactForm.reset();
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (err) {
        alert("There was a problem sending your message. Please email me directly.");
      }
    } else {
      const subject = encodeURIComponent(`Website message from ${name}`);
      const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
      window.location.href = `mailto:zaidsaly81@gmail.com?subject=${subject}&body=${body}`;
    }

    submitBtn.disabled = false;
  });
}