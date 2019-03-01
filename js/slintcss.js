$(document).ready(function() {
  // Appbar
  $(".appbar-burger").click(function() {
    $(".appbar-list").toggleClass("appbar-list-active");
    $(".appbar-item").each(function(index) {
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
  $(".bottomappbar-bars").click(function() {
    $(".bottomappbar-list").addClass("bottomappbar-list-active");
    $(document).scroll(function() {
      $(".bottomappbar-list").removeClass("bottomappbar-list-active");
    });
  });

  // Carousel Function
  // prettier-ignore
  const carouselFunction = () => {
    let slideIndex = 1;
    const carousel = document.querySelector('.carousel');
    const aPrev = document.createElement('a'); // create prev element
    aPrev.className = `carousel-prev`; // add classname
    aPrev.innerHTML = `<i class="fa fa-angle-left"></i>`; // insert i tag in the a tag
    if(carousel !== null ) carousel.appendChild(aPrev); // appendchild into its parent
    const aNext = document.createElement('a'); // create next element
    aNext.className = `carousel-next`; // add classname
    aNext.innerHTML = `<i class="fa fa-angle-right"></i>`; // insert i tag in the a tag
    if(carousel !== null ) carousel.appendChild(aNext); // appendchild into its parent
    const showImage = n => { // display image function
      const slide = $(".carousel-slides");
      if (n > slide.length) slideIndex = 1; // check if n is greater than slide.length
      if (n < 1) slideIndex = slide.length; // checking if n is less than 1
      for (let i = 0; i < slide.length; i++) { // looping through the slides and applying display of none to them
        slide[i].style.display = "none";
      }
      if (slide.length !== 0) slide[slideIndex - 1].style.display = "block"; // subtract 1 from the loop and display the first image
    };
    $(".carousel-next").click(() => { showImage((slideIndex += 1)); }); // add 1 when next icon is clicked
    $(".carousel-prev").click(() => { showImage((slideIndex -= 1)); }); // subtract 1 when prev icon is clicked
    setInterval(() => { showImage((slideIndex += 1)); }, 5000); // set time interval so the function can be called per the time set
    showImage(slideIndex); // run functio before anything
  }
  carouselFunction(); // call the main function
});
