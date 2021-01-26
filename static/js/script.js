$(document).ready(function() {


    $('a').on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 850, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    })


    let clickflag = false;
    $('#hamburger-wrap').on('click', function(event) {
        if (clickflag === false) {
            clickflag = true
            $('#hamburger-wrap').addClass("clicked");
            $('#hamburger-content').addClass('open');

        } else {
            clickflag = false
            $('#hamburger-wrap').removeClass("clicked");
            $('#hamburger-content').removeClass('open');
        }
    })

    function changeMenuContentColor() {
        let bottom = $(document).innerHeight() - $(window).innerHeight();
        if (bottom * 0.99 <= $(window).scrollTop()) {
            $(".menu_line").removeClass("scrolled");
            $('.hamburger-content').removeClass("scrolled-menu");
        } else if ($(window).scrollTop() >= $('#about').offset().top) {
            $('.menu_line').addClass("scrolled");
            $('.hamburger-content').addClass("scrolled-menu");
        } else {
            $(".menu_line").removeClass("scrolled");
            $('.hamburger-content').removeClass("scrolled-menu");
        }
    }

    $(window).scroll(changeMenuContentColor);
    window.addEventListener("load", changeMenuContentColor);

});