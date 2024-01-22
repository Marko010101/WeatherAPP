const slider = function () {
  const slides = document.querySelectorAll(".slider-list-item");
  const btnLeft = document.querySelector(".partners-btn-prev");
  const btnRight = document.querySelector(".partners-btn-next");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide = "${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      if (i === slide) {
        s.classList.add("d-flex");
        s.classList.remove("d-none");
      } else {
        s.classList.remove("d-flex"); // Remove from all slides
        s.classList.add("d-none");
      }
    });

    // Mark the clicked dot as d-flex
    const dots = document.querySelectorAll(".dots__dot");
    dots.forEach((dot, i) => {
      if (i === slide) {
        dot.classList.add("d-flex");
      } else {
        dot.classList.remove("d-flex"); // Remove from all dots
      }
    });
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };
  // Next slide

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();
  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const slide = parseInt(e.target.dataset.slide, 10); // Convert to number
      goToSlide(slide);
      activateDot(slide);
    }
  });
};

slider();
