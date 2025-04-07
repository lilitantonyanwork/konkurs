var swiper = new Swiper(".logos__list", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,

    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: "3",
            spaceBetween: 0,
        },
        768: {
            slidesPerView: "4",
            spaceBetween: 0,
        },
        901: {
            slidesPerView: "6",
            spaceBetween: 24,
        },
    },
});
var swiper1 = new Swiper(".gallery__slider", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    loop: true,

    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: "2",
            spaceBetween: 20,
        },
        768: {
            slidesPerView: "3.5",
            spaceBetween: 20,
        },

    },
});

$(document).ready(function () {
    const $listItems = $(".activity__right ul li");
    const $images = $(".activity__left .activity__img");

    $(window).on("scroll", function () {
        $listItems.each(function (index) {
            const $el = $(this);
            const top = $el.offset().top;
            const bottom = top + $el.outerHeight();
            const scrollMiddle = $(window).scrollTop() + ($(window).height() / 2);

            if (scrollMiddle > top && scrollMiddle < bottom) {
                $images.removeClass("active").eq(index).addClass("active");
                return false; // Stop after first visible item
            }
        });
    });
});