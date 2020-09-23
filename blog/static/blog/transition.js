// Page transition
$(document).ready(function() {
    $('body').hide().fadeIn(200);
    $(".l").click(function(e) {
        e.preventDefault();
        $link = $(this).attr("href");
        $("body").fadeOut(200, function() {
            window.location = $link;
        });
    });
});