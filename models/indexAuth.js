$(document).ready(function() {
    authOnReady();
    handleAuthentication();
    // displayButton();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false
    });
});