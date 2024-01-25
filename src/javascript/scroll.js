const header = document.querySelector("header");
const mobileHeader = document.querySelector(".header-mobile");
document.addEventListener("DOMContentLoaded", function () {
  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 1) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  }

  window.addEventListener("scroll", handleScroll);
});

//  If the mobile-header is active, the header will disappear on scrolling down.
if (mobileHeader) {
  let prevScrollPos = window.pageYOffset;

  window.addEventListener("scroll", function () {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos < currentScrollPos) {
      // Scrolling down
      header.style.transform = "translateY(-100%)";
    } else {
      // Scrolling up
      header.style.transform = "translateY(0)";
    }

    prevScrollPos = currentScrollPos;
  });
}
