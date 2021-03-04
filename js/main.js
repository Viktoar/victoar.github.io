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
        arrows: false,
        dots: true,
        variableWidth: true,
    });



    $('.tabs-All').on("click", function () {
        elem = document.getElementById("tabs_container").className = "tabs__body-All";
    });
    $('.tabs-Healthcare').on("click", function () {
        elem = document.getElementById("tabs_container").className = "tabs__body-Healthcare";
    });
    $('.tabs-Green').on("click", function () {
        elem = document.getElementById("tabs_container").className = "tabs__body-Green";
    });
    $('.tabs-Interior').on("click", function () {
        elem = document.getElementById("tabs_container").className = "tabs__body-Interior";
    });
    $('.tabs-Office').on("click", function () {
        elem = document.getElementById("tabs_container").className = "tabs__body-Office";
    });
})