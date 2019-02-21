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
});