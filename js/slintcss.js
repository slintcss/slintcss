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
  $("#fullname").keyup(function() {
    const fullnameRegex = /^[a-zA-Z ]{5,25}$/;
    const fullName = $("#fullname");
    if (!fullnameRegex.test(fullName.val())) {
      $(".feedback-message").addClass("feedback-message-error");
      fullName.removeClass("form-input-success");
      fullName.addClass("form-input-error");
    } else {
      $(".feedback-message").removeClass("feedback-message-error");
      fullName.removeClass("form-input-error");
      fullName.addClass("form-input-success");
    }
  });

  $("#firstname").keyup(function () {
    const firstnameRegex = /^[a-zA-Z ]{2,15}$/;
    const firstname = $("#firstname");
    if (!firstnameRegex.test(firstname.val())) {
      $(".feedback-message").addClass("feedback-message-error");
      firstname.removeClass("form-input-success");
      firstname.addClass("form-input-error");
    } else {
      $(".feedback-message").removeClass("feedback-message-error");
      firstname.removeClass("form-input-error");
      firstname.addClass("form-input-success");
    }
  });

  $("#lastname").keyup(function () {
    const lastnameRegex = /^[a-zA-Z ]{2,15}$/;
    const lastname = $("#lastname");
    if (!lastnameRegex.test(lastname.val())) {
      $(".feedback-message").addClass("feedback-message-error");
      lastname.removeClass("form-input-success");
      lastname.addClass("form-input-error");
    } else {
      $(".feedback-message").removeClass("feedback-message-error");
      lastname.removeClass("form-input-error");
      lastname.addClass("form-input-success");
    }
  });

  $("#email").keyup(function() {
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,10})$/;
    const email = $("#email");
    if (!emailRegex.test(email.val())) {
      $(".feedback-message").addClass("feedback-message-error");
      email.removeClass("form-input-success");
      email.addClass("form-input-error");
    } else {
      $(".feedback-message").removeClass("feedback-message-error");
      email.removeClass("form-input-error");
      email.addClass("form-input-success");
    }
  });

  $("#password").keyup(function() {
    const password = $("#password");
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (!passwordRegex.test(password.val())) {
      $(".feedback-message").addClass("feedback-message-error");
      password.removeClass("form-input-success");
      password.addClass("form-input-error");
    } else {
      $(".feedback-message").removeClass("feedback-message-error");
      password.removeClass("form-input-error");
      password.addClass("form-input-success");
    }
  });

  $("#password2").keyup(function () {
    const password2 = $("#password2");
    if ($("#password").val() !== $("#password2").val()) {
      $(".feedback-message").addClass("feedback-message-error");
      password2.removeClass("form-input-success");
      password2.addClass("form-input-error");
    } else {
      $(".feedback-message").removeClass("feedback-message-error");
      password2.removeClass("form-input-error");
      password2.addClass("form-input-success");
    }
  });
});