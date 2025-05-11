function toggleNav() {
  const overlay = document.getElementById("myNav");
  const icon = document.getElementById("menuIcon");
  const isOpen = overlay.style.width === "100%";

  if (isOpen) {
    overlay.style.width = "0";
    document.body.classList.remove("menu-open");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  } else {
    overlay.style.width = "100%";
    document.body.classList.add("menu-open");
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  }
}

//Active Nav Bar
// Get all navigation links
const navLinks = document.querySelectorAll('.desktop-nav a');

// Function to handle active link
function setActiveLink() {
  let currentSection = '';

  // Loop through each section to find the active one
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));

    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check if the scroll position is within the section
      if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
        currentSection = link.getAttribute('href');
      }
    }
  });

  // Remove active class from all links
  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  // Add active class to the link corresponding to the section in view
  if (currentSection) {
    document.querySelector(`.desktop-nav a[href="${currentSection}"]`).classList.add('active');
  }
}

// Listen for scroll events
window.addEventListener('scroll', setActiveLink);

// Run on page load to set the initial active section
window.addEventListener('load', setActiveLink);

// Close overlay on Escape key press
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    toggleNav();
  }
});