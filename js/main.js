document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function() {
      menu.classList.toggle("active");
    });
    document.querySelectorAll(".nav-link").forEach(function(link) {
      link.addEventListener("click", function() {
        menu.classList.remove("active");
      });
    });
  }
});
