var slider_btn_left = document.querySelector('.content-slider-show-icon-left');
var slider_btn_right = document.querySelector('.content-slider-show-icon-right');

var slides = document.querySelectorAll('.content-slider-ad1-img');

var i = 0;

function auto() {
    if (i < slides.length - 1) {
        slides[i].classList.remove('active');
        slides[i + 1].classList.add('active');
        i++;
    } else if (i === slides.length - 1) {
        slides[i].classList.remove('active');
        slides[0].classList.add('active');
        i = 0;
    }
}

setInterval(auto, 4000);



slider_btn_right.onclick = function() {
    if (i < slides.length - 1) {
        slides[i].classList.remove('active');
        slides[i + 1].classList.add('active');
        i++;
    } else if (i === slides.length - 1) {
        slides[i].classList.remove('active');
        slides[0].classList.add('active');
        i = 0;
    }
}

slider_btn_left.onclick = function() {
    if (i > 0) {
        slides[i].classList.remove('active');
        slides[i - 1].classList.add('active');
        i--;
    } else if (i === 0) {
        slides[i].classList.remove('active');
        slides[slides.length - 1].classList.add('active');
        i = slides.length - 1;
    }
}