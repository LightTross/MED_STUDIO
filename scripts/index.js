const burgerButton = document.querySelector('.header__btn-burger')
const navigationMenu = document.querySelector('.header__navigation')

//Открытие меню
function openNavigationMenu() {
  navigationMenu.classList.add('header__navigation_opened'); //добавляем класс открытого меню
  burgerButton.classList.add('header__btn-burger_close'); //добавляем класс с кнопкой закрытия
  burgerButton.removeEventListener('click', openNavigationMenu); //удаляем событие открытия меню

  const burgerCloseButton = document.querySelector('.header__btn-burger_close') //находим кнопку закрытия
  burgerCloseButton.addEventListener('click', closeNavigationMenu) //добавляем событие закрытия меню
}

//Закрытие меню
function closeNavigationMenu() {
  navigationMenu.classList.remove('header__navigation_opened'); //убираем класс открытого меню
  burgerButton.classList.remove('header__btn-burger_close'); //убираем класс с кнопкой закрытия (возвращаем бургер)

  burgerButton.addEventListener('click', openNavigationMenu); //добавляем событие открытия меню
  burgerButton.removeEventListener('click', closeNavigationMenu) //удаляем событие закрытия меню
}

burgerButton.addEventListener('click', openNavigationMenu); //добавляем событие открытия меню
