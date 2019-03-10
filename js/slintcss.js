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
    $('<a class="carousel-prev"><i class="fa fa-angle-left"></i></a>').appendTo(".carousel");
    $('<a class="carousel-next"><i class="fa fa-angle-right"></i></a>').appendTo(".carousel");

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

  // Form validation
  // firstname and lastname regex
  const fullnameRegex = /^[a-zA-Z ]{5,25}$/;
  const firstnameAndLastnameRegex = /^[a-zA-Z ]{2,15}$/;
  const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,10})$/;
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const [fullName, firstName, lastName, email, password, invalidInput, formInputSuccess, formInputError] = [$("#fullname"), $("#firstname"), $("#lastname"), $("#email"), $("#password"), "invalid-input", "form-input-success", "form-input-error"];

  const formValidation = (inputName, regex) => {
    inputName.keyup(function () {
      if (!regex.test(inputName.val())) {
        inputName.addClass(invalidInput);
        inputName.removeClass(formInputSuccess);
        inputName.addClass(formInputError);
      } else {
        inputName.removeClass(invalidInput);
        inputName.removeClass(formInputError);
        inputName.addClass(formInputSuccess);
      }
    });
  }

  formValidation(fullName, fullnameRegex);
  formValidation(firstName, firstnameAndLastnameRegex);
  formValidation(lastName, firstnameAndLastnameRegex);
  formValidation(email, emailRegex);
  formValidation(password, passwordRegex);

  $("#password2").keyup(function () {
    const password2 = $("#password2");
    if ($("#password").val() !== $("#password2").val()) {
      password2.addClass(invalidInput);
      password2.removeClass(formInputSuccess);
      password2.addClass(formInputError);
    } else {
      password2.removeClass(invalidInput);
      password2.removeClass(formInputError);
      password2.addClass(formInputSuccess);
    }
  });

  // Modal Function
  $("#modal").click(function() {
    $(".modal").css("display", "block");
  });

  $(".modal-close").click(function () {
    $(".modal").css("display", "none");
  });

  $(window).click(function(e) {
    const modal = document.querySelector("#s-model");
    if (e.target === modal) {
      $(".modal").css("display", "none");
    }
  });
});