/* Open */
function openNav() {
  document.getElementById("myNav").style.display = "block";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const aboutSection = document.querySelector("#about");
  const servicesSection = document.querySelector("#services");

  window.addEventListener("scroll", () => {
    const aboutRect = aboutSection.getBoundingClientRect();
    const servicesRect = servicesSection.getBoundingClientRect();

    if (aboutRect.top <= 1 || servicesRect.top <= 1) {
      header.classList.add("blur");
    } else {
      header.classList.remove("blur");
    }
  });
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

const observerOptions = {
  root: null,
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const navLink = document.querySelector(`nav ul li a[href="#${entry.target.id}"]`);
    if (entry.isIntersecting) {
      navLinks.forEach((link) => link.classList.remove("active"));
      if (navLink) {
        navLink.classList.add("active");
      }
    }
  });
}, observerOptions);

sections.forEach((section) => observer.observe(section));

