$(function () {

    $('.top__slider').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        fade: true,



    });

    $('.feedback__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        arrows: false,
        dots: true,

        responsive: [
            {
                breakpoint: 1141,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        fixedContentPos: true,

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });



    $('.tabs-All').on("click", function () {
        $('.tabs__item').css({ 'color': 'black' });
        $('.tabs-All').css({ 'color': '#fab702' });
        elem = document.getElementById("tabs_container").className = "tabs__body-All";
    });
    $('.tabs-Healthcare').on("click", function () {
        $('.tabs__item').css({ 'color': 'black' });
        $('.tabs-Healthcare').css({ 'color': '#fab702' });
        elem = document.getElementById("tabs_container").className = "tabs__body-Healthcare";
    });
    $('.tabs-Green').on("click", function () {
        $('.tabs__item').css({ 'color': 'black' });
        $('.tabs-Green').css({ 'color': '#fab702' });
        elem = document.getElementById("tabs_container").className = "tabs__body-Green";
    });
    $('.tabs-Interior').on("click", function () {
        $('.tabs__item').css({ 'color': 'black' });
        $('.tabs-Interior').css({ 'color': '#fab702' });
        elem = document.getElementById("tabs_container").className = "tabs__body-Interior";
    });
    $('.tabs-Office').on("click", function () {
        $('.tabs__item').css({ 'color': 'black' });
        $('.tabs-Office').css({ 'color': '#fab702' });
        elem = document.getElementById("tabs_container").className = "tabs__body-Office";
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });
    $('.fa-search').on('click', function () {
        $('.search__form').toggleClass('search__form--active');
    });
    $('.tabs__menu').on('click', function () {
        $('.tabs__items').toggleClass('tabs__items--active');
    });
    $('.posts').on('click', function () {
        $('.posts__list').toggleClass('posts__list--active');
    });
    $('.info').on('click', function () {
        $('.info__list').toggleClass('info__list--active');
    });
    $('.recent').on('click', function () {
        $('.footer__news-block').toggleClass('footer__news-block--active');
    });
})