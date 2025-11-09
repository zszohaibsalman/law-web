document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      menuToggle.classList.toggle("active");
    });
  }

  const eligibilityForm = document.getElementById("eligibilityForm");
  if (eligibilityForm) {
    eligibilityForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you. A PakLex advisor will contact you shortly (demo only).");
      eligibilityForm.reset();
    });
  }

  const contactForm = document.getElementById("contactForm");
  const contactMessage = document.getElementById("contactMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (contactMessage) {
        contactMessage.textContent =
          "Thank you. Your details have been received. Our team will contact you within 24 business hours. (Demo only)";
      }
      contactForm.reset();
    });
  }

  // Smooth scroll for same-page nav links (lightweight)
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top: y, behavior: "smooth" });
        if (nav && nav.classList.contains("open")) {
          nav.classList.remove("open");
          menuToggle && menuToggle.classList.remove("active");
        }
      }
    });
  });
});