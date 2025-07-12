const toggleTheme     = document.getElementById("toggleTheme");
const rootHtml        = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion-header");
const menuLinks       = document.querySelectorAll(".menu-link");

function applyTheme(theme) {
  rootHtml.setAttribute("data-theme", theme);

  if (theme === "dark") {
    toggleTheme.classList.add("bi-moon-stars");
    toggleTheme.classList.remove("bi-sun");
  } else {
    toggleTheme.classList.add("bi-sun");
    toggleTheme.classList.remove("bi-moon-stars");
  }
}

function changeTheme() {
  const nextTheme = rootHtml.getAttribute("data-theme") === "dark"
    ? "light"
    : "dark";

  applyTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme")
    || (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

  applyTheme(savedTheme);

  toggleTheme.addEventListener("click", changeTheme);

  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      item.classList.toggle("active");
    });
  });

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuLinks.forEach(i => i.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
