const basketBtn = document.querySelector(".basket_btn");
const basketPopup = document.querySelector(".basket-popup");
const basketPop = document.querySelector(".basket-pop");
const basketPopClose = document.querySelector(".basket-pop_close");
const basketPopupDelete = document.querySelector(".basket-popup_delete");
const basketPopupLabelCheckbox = document.querySelector(".basket-popup_label-checkbox");


basketBtn.addEventListener('click', () => {
    basketPopup.style.display = 'flex';
})

basketPopupDelete.addEventListener('click', () => {
    basketPopup.style.display = 'none';
})

basketPopupLabelCheckbox.addEventListener('click', () => {
    basketPop.style.display = 'flex';
    basketPopup.style.display = 'none';
})

basketPopClose.addEventListener('click', () => {
    basketPop.style.display = 'none';
})