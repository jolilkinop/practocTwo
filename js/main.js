// Slider
const sliderBtnLeft = document.querySelector(".slider_btn-left");
const sliderImages = document.querySelectorAll(".slider_images");
const sliderBrnRight = document.querySelector(".slider_brn-right");
const sliderSwitchItems = document.querySelectorAll(".slider_switch-items");
const reviewItem = document.querySelectorAll(".review_item");
const reviewBtnRight = document.querySelector(".review_btn-right");
const reviewBtnLeft = document.querySelector(".review_btn-left");







// Слайдер
index = 0;

const activeSlide = n => {
    for(slides of sliderImages) {
        slides.classList.remove('active');
    }
    sliderImages[n].classList.add("active");
}

const activeSwitch = n => {
    for(switchSlide of sliderSwitchItems) {
        switchSlide.classList.remove("active-switch");
    }
    sliderSwitchItems[n].classList.add("active-switch");
}

const slideNext = () => {
    if(index == sliderImages.length - 1) {
        index = 0;
        activeSlide(index);
        activeSwitch(index);
    } else {
        index++;
        activeSlide(index);
        activeSwitch(index);
    }
}

const slidePrev = () => {
    if(index == 0) {
        index = sliderImages.length - 1;
        activeSlide(index);
        activeSwitch(index);
    } else {
        index--;
        activeSlide(index);
        activeSwitch(index);
    }
}

// Slider review
indexReview = [0, 1, 2, 3];

const activeSlideReview = ir => {
    for(reviewImg of reviewItem){
        reviewImg.classList.remove('active');
        reviewImg.classList.remove('img-one');
        reviewImg.classList.remove('img-two');
        reviewImg.classList.remove('img-fhree');
        reviewImg.classList.remove('img-foru');
    }
    for(irn of ir){
        reviewItem[irn].classList.add('active');
    }
    reviewItem[ir[0]].classList.add('img-one');
    reviewItem[ir[1]].classList.add('img-two');
    reviewItem[ir[2]].classList.add('img-fhree');
    reviewItem[ir[3]].classList.add('img-foru');
}

const slideReviewNext = () => {
    if(indexReview[indexReview.length - 1] == reviewItem.length - 1) {
        indexReview.shift();
        indexReview.push(0);
        activeSlideReview(indexReview);
    } else if(indexReview[indexReview.length - 1] == 0 || indexReview[indexReview.length - 1] > 0 && indexReview[indexReview.length - 1] !== reviewItem.length - 1) {
        indexReview.shift();
        indexReview.push(indexReview[indexReview.length - 1] + 1);
        activeSlideReview(indexReview);
    } else {
        indexReview.shift();
        indexReview.push(indexReview[indexReview.length - 1] + 1);
        activeSlideReview(indexReview);
    }
}

const slideReviewPrev = () => {
    if(indexReview[0] == 0) {
        indexReview.pop();
        indexReview.unshift(indexReview.length);
        activeSlideReview(indexReview);
    } else if(indexReview[0] == indexReview.length - 1 || indexReview[0] > 0 && indexReview[indexReview.length - 1] !== reviewItem.length - 1) {
        indexReview.pop();
        indexReview.unshift(indexReview[0] - 1);
        activeSlideReview(indexReview);
    } else {
        indexReview.pop();
        indexReview.unshift(indexReview[0] - 1);
        activeSlideReview(indexReview);
    }
}

sliderSwitchItems.forEach((item, indexSlBtn) => {
    item.addEventListener('click', () => {
        index = indexSlBtn;
        activeSlide(index);
        activeSwitch(index);
        clearInt()
    })
})

const clearInt = () => {
    clearInterval(interval)
}

const interval = setInterval(slideNext, 3500);
const intervalRewiew = setInterval(slideReviewNext, 3500);

// Events
sliderBtnLeft.addEventListener('click', slidePrev)
sliderBtnLeft.addEventListener('click', clearInt)
sliderBrnRight.addEventListener('click', slideNext)
sliderBrnRight.addEventListener('click', clearInt)
reviewBtnRight.addEventListener('click', slideReviewNext)
reviewBtnLeft.addEventListener('click', slideReviewPrev)