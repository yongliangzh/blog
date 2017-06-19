var nowposition = 0;
$(window).scroll(function () {
    if ($(window).scrollTop() > nowposition) {
        $(".public-header").animate({
            height: 'hide',
        });
    } else {
        $(".public-header").animate({
            height: 'show',
        });
    }
    nowposition = $(window).scrollTop();
});