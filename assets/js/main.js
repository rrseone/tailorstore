$(document).ready(function() {
    $( "#fabricChoiceTabs" ).tabs();

    $("#onClickFabricMenu").on("click", function() {
        $("#fabricList").slideToggle();
    })

    $('.fabric-choice .fabric-list li').on('click', function(e) {
        var id = $(this).attr('id');
        var imageUrl = "url(\"assets/images/designer/shirt/final/" + id + ".webp\")";
        $('#finalImage').css('background-image', imageUrl);
    });

    $('.sub-menu .close').on('click', function() {
        $("#fabricList").slideUp();
    })

    $('.view-switcher .zoom-in').on('click', function() {
        $('.final-image').css('background-size', 'auto 200%');
        $('.view-switcher .zoom-in').hide();
        $('.view-switcher .zoom-out').show();
    })

    $('.view-switcher .zoom-out').on('click', function() {
        $('.final-image').css('background-size', 'auto 100%');
        $('.view-switcher .zoom-out').hide();
        $('.view-switcher .zoom-in').show();
    })
});