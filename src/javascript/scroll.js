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

//  If screen width is less than 750px, the header will disappear on scrolling down.
document.addEventListener("DOMContentLoaded", function () {
  function handleScroll() {
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
      header.style.transform = "translateY(0)";
    }

    if (mobileHeader && window.innerWidth < 750) {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos < currentScrollPos) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }

      prevScrollPos = currentScrollPos;
    } else {
      if (scrollPosition > 1) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    }
  }

  let prevScrollPos = window.pageYOffset;
  window.addEventListener("scroll", handleScroll);
});
