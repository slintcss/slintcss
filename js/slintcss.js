const appbarBurger = document.querySelector('.appbar-burger');
const appbarList = document.querySelector('.appbar-list');
const appbarItem = document.querySelectorAll('.appbar-item');

appbarBurger.addEventListener('click', () => {
  appbarList.classList.toggle('appbar-list-active');

  appbarItem.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = '';
    } else {
      item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });

  appbarBurger.classList.toggle('toggle');
});