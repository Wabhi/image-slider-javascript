//selecting the slider element and inside slider element all images..................
const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');

//selecting all button , like prev and next to make clickable....................
const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');

//selecting size of image to we can get how much with/area I want to slide images one by one.............
//creating a variable count so that we can monitor images , which image we are selecting...............
let counter = 1;
const size = sliderImages[0].clientWidth;
console.log(size);
slider.style.transform = 'translateX(' + (-size * counter) + 'px)'

//button listner, so that we can slide image forward and backward directions............................
nextButton.addEventListener('click', () => {
    if (counter >= sliderImages.length - 1) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
});
prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
});

//transitionend basically fired when transition will be done,its kind of evenListner which is fired after transition..................................
slider.addEventListener('transitionend', () => {
    //console.log('fired...............')
    //we want to jump next image, basically we want to loop through the images once again,not want to just leave empty.........
    if (sliderImages[counter].id === "lastImg") {
        slider.style.transition = "none";
        counter = sliderImages.length - 2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
    if (sliderImages[counter].id === "firstImg") {
        slider.style.transition = "none";
        counter = sliderImages.length - counter;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})
