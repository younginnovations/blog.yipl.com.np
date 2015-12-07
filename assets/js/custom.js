$(document).ready(function(){
    $(".trigger").click( function(event){
        //hide navigation wrap when clicked esc key


        $(".nav ul").slideToggle("300");
        
        $('nav ul li').addClass('needs_animation');

        var $divs = $('nav ul li.needs_animation'),
            count = $divs.length;

        (function animateDiv(i) {
            var $div = $divs.eq(i);
            if (i < count) {
                $('nav ul li:nth-child(2)').css("opacity", "0");
                $div.removeClass('needs_animation');
                $div.animate({ opacity: 1 }, 500, function() {
                    animateDiv(i + 1)
                });
            }
        })(0);



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
        

        $(document).keydown(function(event) {
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
                $('.nav ul').css('display','none');
            }
        });
       return false;
    });

    $('.article-wrap ul li p a').parents('ul').addClass('links-list');

    // fix the post title to the top on scroll
    $(window).on('scroll',function(){
        var scrollHeight = $(document).scrollTop();
        var navigationHeight = $('.navigation-wrapper').outerHeight();
        var postTopHeight = $('.post-top-wrap').outerHeight();
        var totalHeight = navigationHeight + postTopHeight;
        if(scrollHeight > totalHeight) {
            $('.top-wrap').addClass('top-wrap-show');
            $('.post-top-wrap').hide();
            // $('.fixed-top-wrap').show();
            var imageScrollHeight = totalHeight - 100;
            $('.image-wrap').addClass('scroll-image-wrap').css('padding-top',imageScrollHeight);
        }
        else {
            $('.top-wrap').removeClass('top-wrap-show');
            $('.post-top-wrap').show();
            // $('.fixed-top-wrap').hide();
            $('.image-wrap').removeClass('scroll-image-wrap').css('padding-top','0');
        }
    });

    $(".social-share-menu").hover(function() {
        $(this).toggleClass("active"); 
    });

    if(!Modernizr.svg) {
        $('img[src*="svg"]').attr('src', function() {
            return $(this).attr('src').replace('.svg', '.png');
        });
}
   
});

