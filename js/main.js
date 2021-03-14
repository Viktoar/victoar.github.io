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
        autoplay: true,
        arrows: false,
        dots: true,
        variableWidth: false,
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

})