$(document).ready(function () {
  // Appbar
  $(".appbar-burger").click(function () {
    $(".appbar-list").toggleClass("appbar-list-active");
    $(".appbar-item").each(function (index) {
      if (this.style.animation) {
        this.style.animation = '';
      } else {
        this.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    })
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
  let slideIndex = 1;

  function showImage(n) {
    var slide = $('.carousel-slides');
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
  }

  $('.carousel-next').click(function () {
    showImage(slideIndex += 1);
  });

  $('.carousel-prev').click(function () {
    showImage(slideIndex -= 1);
  })

  showImage(slideIndex);
});