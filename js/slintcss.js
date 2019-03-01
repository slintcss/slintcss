$(document).ready(function () {
  // Appbar
  $(".appbar-burger").click(function () {
    $(".appbar-list").toggleClass("appbar-list-active");
    $(".appbar-item").each(function (index) {
      if (this.style.animation) {
        this.style.animation = "";
      } else {
        this.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s`;
      }
    });
    $(".appbar-burger").toggleClass("appbar-toggle");
  });

  // BottomAppBar
  $(".bottomappbar-bars").click(function () {
    $(".bottomappbar-list").addClass("bottomappbar-list-active");
    $(document).scroll(function () {
      $(".bottomappbar-list").removeClass("bottomappbar-list-active");
    });
  });

  // Carousel
  const carouselFunction = () => {
    let slideIndex = 1;

    const carousel = document.querySelector('.carousel');
    // create prev element
    const aPrev = document.createElement('a');
    // add class name
    aPrev.className = `carousel-prev`;
    // insert i tag
    aPrev.innerHTML = `<i class="fa fa-angle-left"></i>`;
    // append
    carousel.appendChild(aPrev);

    // create next element
    const aNext = document.createElement('a');
    // add class name
    aNext.className = `carousel-next`;
    // insert i tag
    aNext.innerHTML = `<i class="fa fa-angle-right"></i>`;
    // append
    carousel.appendChild(aNext);

    // display Image function
    const showImage = n => {
      const slide = $(".carousel-slides");
      if (n > slide.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slide.length;
      }

      for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
      }
      if (slide.length !== 0) {
        slide[slideIndex - 1].style.display = "block";
      }
    };

    $(".carousel-next").click(() => {
      showImage((slideIndex += 1));
    });

    $(".carousel-prev").click(() => {
      showImage((slideIndex -= 1));
    });

    setInterval(() => {
      showImage((slideIndex += 1));
    }, 5000);

    showImage(slideIndex);
  }
  carouselFunction();
});