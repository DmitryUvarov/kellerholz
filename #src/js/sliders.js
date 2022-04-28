// BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('_swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('_gallery')) {
            // slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar = sliderScrollItems.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observerParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                spanOnRelease: false
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


function sliders_bild_callback(params) { }

if (document.querySelector('.slider-main__body')) {
    new Swiper('.slider-main__body', {
        observer: true,
        //direction: "vertical",
        observerParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        watchOverflow: true,
        speed: 800,
        loop: true,
        watchSlidesProgress: true,
        slidesPerView: 1,
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        // Dotts
        pagination: {
            el: '.slider-main__dotts',
            clickable: true,
        },
        // Arrows
        navigation: {
            nextEl: '.slider-main .slider-arrow_next',
            prevEl: '.slider-main .slider-arrow_prev',
        }
    });
}



if (document.querySelector('.slider-menu__body')) {
    new Swiper('.slider-menu__body', {
        observer: true,
        //direction: "vertical",
        observerParents: true,
        spaceBetween: 68,
        watchOverflow: true,
        speed: 800,
        loop: false,
        watchSlidesProgress: true,
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        // Dotts
        pagination: {
            el: '.slider-menu__dotts',
            clickable: true,
        },
        breakpoints: {
            1430: {
                slidesPerView: 4,
            },
            470: {
                slidesPerView: "auto",
            },
            320: {
                slidesPerView: 1,
            },

        },
        // Arrows
        navigation: {
            nextEl: '.slider-menu .slider-menu-arrow_next',
            prevEl: '.slider-menu .slider-menu-arrow_prev',
        }
    });
}



if (document.querySelector('.slider-tabs__body')) {
    new Swiper('.slider-tabs__body', {
        observer: true,
        observerParents: true,
        slidesPerView: 2.5,
        watchOverflow: true,
        spaceBetween: 40,
        speed: 800,
        loop: true,
        watchSlidesProgress: true,
        slidesPerView: 1,
        loopAdditionalSlides: 5,
        preloadImages: false,
        parallax: true,
        // Dotts
        pagination: {
            el: ".controls-slider-tabs-pagination",
            type: "fraction",
        },
        // Arrows
        navigation: {
            nextEl: '.slider-tabs .slider-arrow_next',
            prevEl: '.slider-tabs .slider-arrow_prev',
        },
        /*breakpoints: {

        },*/
    });
}






/*breakpoints: {
    // when window width is >= 320px
    320: {
        slidesPerView: 1.1,
        spaceBetween: 15
    },
    // when window width is >= 768px
    768: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    // when window width is >= 992px
    992: {
        slidesPerView: 3,
        spaceBetween: 32
    },
}*/