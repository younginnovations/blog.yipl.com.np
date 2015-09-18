$(document).ready(function(){
    $(".trigger").click( function(event){
        //hide navigation wrap when clicked esc key


        $(document).keyup(function(event) {
            if(event.which === 27) {
                $( ".navigation-wrap" ).animate({
                    'opacity': '0',
                    'width': '0%',
                    'height': '100%',
                    'top': '400px',
                    'left': '50%'
                },300, function() {
                    // Animation complete.
                });
                $('.navigation-wrapper').addClass('noscroll').removeClass('scroll');
                $('body').removeClass('fixed');
                $('.trigger').removeClass('active').addClass('inactive');
            }
            else {
                $( ".navigation-wrap" ).animate({
                    'opacity': '1',
                    'width': '100%',
                    'height': '100%',
                    'top': '0',
                    'left': '0'
                }, 10, function() {
                    // Animation complete.
                });

            }
        });

        $(".nav ul").slideToggle("300");
        var firstmenu = $("ul li:nth-child(1)");
        firstmenu.one('webkitAnimationEnd oAnimationend msAnimationEnd animationend', function (e) {
            // code to execute after transition ends
            $("ul li:nth-child(2)").css("opacity", "1");
        });
        $("ul li:nth-child(2)").css("opacity", "0");

        $(this).toggleClass("inactive");
        $(this).toggleClass("active");
        $('.navigation-wrapper').removeClass('noscroll');
        $(this).parents('.navigation-wrapper').toggleClass('scroll');
        $('body').toggleClass('fixed');
        $('.trigger').delay(600).queue(function(){
            $(this).toggleClass('open').clearQueue();
        });

        event.preventDefault();
        if ($(this).hasClass("inactive") ) {
            $( ".navigation-wrap" ).animate({
                'opacity': '0',
                'width': '0%',
                'height': '100%',
                'top': '400px',
                'left': '50%'
            },400, function() {
                // Animation complete.
            });
        } else {
            $( ".navigation-wrap" ).animate({
                'opacity': '1',
                'width': '100%',
                'height': '100%',
                'top': '0',
                'left': '0'
            }, 400, function() {
                // Animation complete.
            });
        }
        return false
    });
});

