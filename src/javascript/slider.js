"use strict";

// Slider

const slider = function () {
  const slides = document.querySelectorAll(".slider-list-item");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  let interval;
  let touchStartX;

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
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      if (i === slide) {
        s.classList.add("displayed");
        s.classList.remove("notDisplayed");
      } else {
        s.classList.remove("displayed");
        s.classList.add("notDisplayed");
      }
    });

    // Mark the clicked dot as displayed
    const dots = document.querySelectorAll(".dots__dot");
    dots.forEach((dot, i) => {
      if (i === slide) {
        dot.classList.add("displayed");
      } else {
        dot.classList.remove("displayed");
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

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  const setNewInterval = function () {
    clearInterval(interval);
    interval = setInterval(nextSlide, 3000);
  };

  setNewInterval();

  // Touch event handlers
  document.addEventListener("touchstart", function (e) {
    touchStartX = e.touches[0].clientX;
  });

  document.addEventListener("touchend", function (e) {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;

    if (deltaX > 50) {
      prevSlide();
    } else if (deltaX < -50) {
      nextSlide();
    }

    setNewInterval();
  });

  // Event handlers
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevSlide();
      setNewInterval();
    }
    if (e.key === "ArrowRight") {
      nextSlide();
      setNewInterval();
    }
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const slide = parseInt(e.target.dataset.slide, 10);
      goToSlide(slide);
      activateDot(slide);
      setNewInterval();
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  slider();
});
