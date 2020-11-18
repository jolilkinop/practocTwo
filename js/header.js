const headerBurgerItem = document.querySelector(".header_burger-item");
const popupNav = document.querySelector(".popup-nav");
const popupNavClose = document.querySelector(".popup-nav_close");
const popupBellClose = document.querySelector(".popup-bell_close");
const popupBell = document.querySelector(".popup-bell");
const headerBtn = document.querySelector('.header_btn');
const popupBellBtn = document.querySelector(".popup-bell_btn");
const basketPop = document.querySelector(".basket-pop");
const basketPopClose = document.querySelector(".basket-pop_close");

headerBurgerItem.addEventListener('click', () => {
    popupNav.style.display = 'flex';
})

popupNavClose.addEventListener('click', () => {
    popupNav.style.display = 'none';
})

headerBtn.addEventListener('click', () => {
    popupBell.style.display = 'flex';
})

popupBellClose.addEventListener('click', () => {
    popupBell.style.display = 'none';
})

popupBellBtn.addEventListener('click', () => {
    basketPop.style.display = 'flex';
    popupBell.style.display = 'none';
})

basketPopClose.addEventListener('click', () => {
    basketPop.style.display = 'none';
})