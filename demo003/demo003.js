$("body").click(function() {
    $("body").toggleClass("dark-mode");

    var angle = $('.dark-mode-planet').data('angle') + 360 || 360;
    $('.dark-mode-planet').css({'transform': 'rotate(' + angle + 'deg'});
    $('.dark-mode-planet').data('angle',angle);
});