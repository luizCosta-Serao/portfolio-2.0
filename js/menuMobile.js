export default function showMenu() {
  const btnMenuMobile = document.querySelector('.header .menu button');
  const menuMobile = document.querySelector('.header .menu ul');

  btnMenuMobile.addEventListener('click', showMenu);

  function showMenu() {
    menuMobile.classList.toggle('active');
    if (menuMobile.classList.contains('active')) {
      btnMenuMobile.children[0].setAttribute('src', './imgs/close-menu.svg')
      btnMenuMobile.children[0].animate(
        [
          {transform: 'rotate(0deg)'},
          {transform: 'rotate(180deg)'},
        ],
        {
          duration: 400,
        }
      )
    } else {
      btnMenuMobile.children[0].setAttribute('src', './imgs/menu-mobile.svg')
      btnMenuMobile.children[0].animate(
        [
          {transform: 'rotate(0deg)'},
          {transform: 'rotate(-180deg)'},
        ],
        {
          duration: 400,
        }
      )
    }
  };
}