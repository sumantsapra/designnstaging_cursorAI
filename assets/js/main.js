const setupNav = () => {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const navLinks = document.querySelector("[data-nav-links]");
  const navBackdrop = document.querySelector("[data-nav-backdrop]");
  const navClose = document.querySelector("[data-nav-close]");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      if (navBackdrop) {
        navBackdrop.classList.toggle("show", isOpen);
      }
    });
  }

  const closeNav = () => {
    if (!navLinks || !menuToggle) {
      return;
    }

    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    if (navBackdrop) {
      navBackdrop.classList.remove("show");
    }
  };

  if (navBackdrop) {
    navBackdrop.addEventListener("click", closeNav);
  }

  if (navClose) {
    navClose.addEventListener("click", closeNav);
  }
};

const setupYear = () => {
  const yearTarget = document.querySelector("[data-current-year]");
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }
};

setupNav();
setupYear();
