"use strict";

jQuery(document).on('ready', function ($) {

    /*---------------------------------
     //------ PRELOADER ------//
     ----------------------------------*/
    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut('slow');

    /*---------------------------------
     //------ ANIMATE HEADER ------//
     ----------------------------------*/
    $(window).on('scroll', function () {
        var sticky = $(".sticky-header");
        var scroll = $(window).scrollTop();
        if (scroll < 265) {
            sticky.removeClass("sticky");
        } else {
            sticky.addClass("sticky");
        }
    });


    /*----------------------------------
     //------ OWL CAROUSEL ------//
     -----------------------------------*/
    $('.style1').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1,
                margin: 20
            },
            500: {
                items: 1,
                margin: 20
            },
            768: {
                items: 2,
                margin: 20
            },
            991: {
                items: 2,
                margin: 20
            },
            1025: {
                items: 3,
                margin: 20
            }
        }
    });

    $('.style2').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        autoWidth: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 2,
                margin: 20
            },
            400: {
                items: 2,
                margin: 20
            },
            500: {
                items: 3,
                margin: 20
            },
            768: {
                items: 4,
                margin: 20
            },
            992: {
                items: 5,
                margin: 20
            },
            1000: {
                items: 6,
                margin: 20
            }
        }
    });

    $('.style3').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1200,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 2
            },
            400: {
                items: 2,
                margin: 20
            },
            500: {
                items: 2,
                margin: 20
            },
            768: {
                items: 2,
                margin: 20
            },
            991: {
                items: 2,
                margin: 20
            },
            1000: {
                items: 4,
                margin: 30
            }
        }
    });

    $('.carousel4').owlCarousel({
        autoPlay: false,
        navigation: true,
        slideSpeed: 600,
        items: 3,
        itemsDesktop: [1239, 3],
        itemsTablet: [991, 2],
        itemsMobile: [767, 1]
    });

    /*----------------------------------
     //------ TOP LOCATION ------//
     -----------------------------------*/
    if ($('#tp-carousel').length) {
        $('#tp-carousel').owlCarousel({
            loop: true,
            margin: 2,
            dots: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true
                },
                1024: {
                    items: 3,
                    nav: true
                },
                1025: {
                    items: 5,
                    nav: true,
                    loop: false
                }
            }
        })
    }

    /*----------------------------------
     //------ JQUERY SCROOLTOP ------//
     -----------------------------------*/
    var go = $(".go-up");
    $(window).on('scroll', function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            go.fadeIn();
        } else {
            go.fadeOut();
        }
    });

    /*----------------------------------
     //------ MAGNIFIC POPUP ------//
     -----------------------------------*/
    $(document).ready(function () {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });

    /*----------------------------------------------
     //------ FILTER TOGGLE (ON GOOGLE MAPS) ------//
     ----------------------------------------------*/
    $('.filter-toggle').on('click', function () {
        $(this).parent().find('form').stop(true, true).slideToggle();
    });

    /*----------------------------------
     //------ RANGE SLIDER ------//
     -----------------------------------*/
    $(".slider-range").slider({
        range: true,
        min: 5000,
        max: 200000,
        step: 1000,
        values: [60000, 130000],
        slide: function (event, ui) {
            $(".slider_amount").val("$" + ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " - $" + ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        }
    });
    $(".slider_amount").val("Price Range: $" + $(".slider-range").slider("values", 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " - $" + $(".slider-range").slider("values", 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

    /*----------------------------------
     //------ MODAL ------//
     -----------------------------------*/
    var modal = {};
    modal.hide = function () {
        $('.modal').fadeOut();
        $("html, body").removeClass("hid-body");
    };
    $('.modal-open').on("click", function (e) {
        e.preventDefault();
        $('.modal').fadeIn();
        $("html, body").addClass("hid-body");
    });
    $('.close-reg').on("click", function () {
        modal.hide();
    });

    /*----------------------------------
     //------ TABS ------//
     -----------------------------------*/
    $(".tabs-menu a").on("click", function (a) {
        a.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var b = $(this).attr("href");
        $(".tab-contents").not(b).css("display", "none");
        $(b).fadeIn();
    });

}(jQuery));

function showDiv() {
    document.getElementById('section1').style.display = "block";
}

function hideDiv() {
    document.getElementById('section1').style.display = "none";
}

$('.go-up').on("click", function () {
    $(window).scrollTop(0);
});


$(window).on('load', function () {
    $('.loader').fadeOut();
    $('.loader-brand').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow': 'visible'});
});

$('.style1').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1,
            margin: 20
        },
        500: {
            items: 1,
            margin: 20
        },
        768: {
            items: 2,
            margin: 20
        },
        991: {
            items: 2,
            margin: 20
        },
        1025: {
            items: 4,
            margin: 20
        }
    }
});


$('.slick-lancers').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 1292,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows: false
            }
        }, {
            breakpoint: 993,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows: false
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }]
});


$('.slick-lancers2').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 1292,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows: false
            }
        }, {
            breakpoint: 993,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows: false
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
            }
        }]
});