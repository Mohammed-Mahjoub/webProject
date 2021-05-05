$(document).scroll(function () {
    var top = $(document).scrollTop();
    if (top >= 400) {
        $('.back-top').fadeIn();
    } else {
        $('.back-top').fadeOut();
    }
});

$('.back-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1500);
});

