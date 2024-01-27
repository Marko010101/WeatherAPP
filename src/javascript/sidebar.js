const body = document.querySelector("body");
const menuIcon = document.getElementById("menuIcon");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

function toggleMenu(event) {
  event.stopPropagation();
  mobileMenu.style.right = "0";
  body.classList.add("no-scroll", "sidebarFilter");
  mobileMenu.style.filter = "brightness(1.65)";
  mobileMenu.style.top =
    (document.documentElement.scrollTop || document.body.scrollTop) + "px";
}

function closeMobileMenu() {
  mobileMenu.style.filter = "brightness(1)";
  mobileMenu.style.right = "-100%";
  body.classList.remove("no-scroll", "sidebarFilter");
}

if (window.innerWidth < 750) {
  // Click and touchstart for menu icon
  menuIcon.addEventListener("click", toggleMenu);
  menuIcon.addEventListener("touchstart", toggleMenu);

  // Click and touchstart for close icon
  closeMenu.addEventListener("click", closeMobileMenu);
  closeMenu.addEventListener("touchstart", closeMobileMenu);

  // Click and touchstart for document
  document.addEventListener("click", closeMobileMenu);
  document.addEventListener("touchstart", closeMobileMenu);

  // If the user clicks inside the menu or on the menu icon, prevent closing
  mobileMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  menuIcon.addEventListener("touchstart", function (event) {
    event.stopPropagation();
  });
}
