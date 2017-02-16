$(document).ready(function() {
    $("#show").click(function() {
        $(".walrus-showing").fadeIn(4000);
        $(".walrus-hidden").fadeOut(1000);
    });
    $("#hide").click(function() {
        $(".walrus-showing").fadeOut(1000);
        $(".walrus-hidden").fadeIn(4000);
    });

});
