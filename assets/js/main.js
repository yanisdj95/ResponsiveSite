jQuery(function ($) {
    $('.burger__wraper').on('click',function() {
        $('.burger__menu').addClass('is-animate')
        $
        $('.sidebar__mobile').addClass('is-open')
        $('.overlay').toggle()
        $('body').addClass('no-scroll')
    })
    $('.overlay').on('click',function() {
        $('.sidebar__mobile').removeClass('is-open')
        $('.overlay').toggle()
        $('body').removeClass('no-scroll')
        $('.burger__menu').removeClass('is-animate')
    })
function CalculHeroHeight() {
    var heroHeight;
    var headerHeight;
    var screenHeight;
    screenHeight = $(window).height();
    headerHeight = $('.header__main').height();
    heroHeight = screenHeight - headerHeight;
    $('.home__hero').css('height', heroHeight)
}
CalculHeroHeight();
    $(window).on('resize',function() {
        CalculHeroHeight();
    })
})