$(document).ready(function() {
    authOnReady();
    handleAuthentication();
    getProfile();
    // displayButtons();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false
    });
});

$("#btn-back").on("click", function() {
    authOnReady();
    handleAuthentication();
    getProfile();
    webAuth.authorize();
    // displayButtons();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false
    });
});