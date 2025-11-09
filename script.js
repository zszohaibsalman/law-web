/**
 * Handles:
 * - Mobile navigation toggle
 * - Smooth scroll for anchor + "Explore services" button
 * - Scroll-to-top button visibility and behavior
 * - Lightweight contact form validation + success message (no backend)
 */

document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");
  const scrollTopBtn = document.querySelector(".scroll-top");
  const exploreBtns = document.querySelectorAll(".ghost-link[data-scroll]");
  const contactForm = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");

  // Mobile nav toggle
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("open");
      hamburger.classList.toggle("active");
    });

    // Close nav when clicking a link
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        hamburger.classList.remove("active");
      });
    });
  }

  // Smooth scroll for hero "Explore services"
  exploreBtns.forEach((btn) => {
    const targetSelector = btn.getAttribute("data-scroll");
    if (!targetSelector) return;
    btn.addEventListener("click", () => {
      const target = document.querySelector(targetSelector);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Scroll to top visibility
  const handleScroll = () => {
    if (!scrollTopBtn) return;
    const threshold = 260;
    if (window.scrollY > threshold) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  // Scroll to top behavior
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Contact form (client-side only)
  if (contactForm && formNote) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();

      if (!name || !email || !message) {
        formNote.textContent = "Please complete all required fields before submitting.";
        formNote.style.color = "#b3261e";
        return;
      }

      // Simple email pattern check
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        formNote.textContent = "Enter a valid email address.";
        formNote.style.color = "#b3261e";
        return;
      }

      // Simulated success
      formNote.textContent =
        "Thank you. Your request has been recorded and our team will contact you shortly.";
      formNote.style.color = "#1d6f42";

      contactForm.reset();

      // Subtle fade-out after a delay
      setTimeout(() => {
        formNote.textContent = "";
      }, 5000);
    });
  }
});