document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");

  if (header) {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 1) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    }

    window.addEventListener("scroll", handleScroll);
  } else {
    console.error("Header element not found");
  }
});
