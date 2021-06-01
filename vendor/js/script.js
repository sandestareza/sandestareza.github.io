// responsif web
$(document).ready(function () {
    $(window).resize(function () {
        var vWidth = $(window).width()
        if (vWidth <= 992) {
            $('.col-md-7').addClass('order-last')
            $('.col-md-5').addClass('order-first')
        } else {
            $('.col-md-7').removeClass('order-last')
            $('.col-md-5').removeClass('order-first')
        }
    })
})

// nav page active
$('body').scrollspy({
    target: '#navbarNavDropdown',
    offset: 100
})

$('.scroll-page').smoothScroll({
    speed: 800
});

// animasi scroll
$(document).ready(function () {
    AOS.init();
})
