jQuery(document).ready(function () {
    jQuery(".item-ykien-phuhuynh").matchHeight();

    jQuery('#slider-home').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        responsiveClass: true,
        nav: false,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: false
            }
        }
    });

    jQuery('#hocsinh_tieubieu').owlCarousel({
        loop: true,
        margin: 20,
        items: 3,
        responsiveClass: true,
        nav: false,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false
            },
            600: {
                items: 2,
                nav: true,
                dots: false
            },
            1000: {
                items: 3,
                nav: true,
                dots: false
            }
        }
    });

    jQuery('#logo').owlCarousel({
        loop: true,
        margin: 10,
        items: 5,
        responsiveClass: true,
        nav: true,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false
            }
        }
    });
    jQuery('a[href^="tel:"]').attr('href', function (_, v) {
        return v.replace(/\(0\)|\s+/g, '')
    });
    jQuery('a[href^="https://zalo.me"]').attr('href', function (_, v) {
        return v.replace(/\(0\)|\s+/g, '')
    });
    jQuery(".click_form").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ($("#dangky-box").offset().top) - 0
        }, 200);
        return false;
    });
});


var cc = 30;
var interval = setInterval(function () {
    --cc;
    if (cc == 0) {
        clearInterval(interval);
        jQuery("#exampleModal").modal("show");
    }
}, 1000);

var bb = 60;
var interval2 = setInterval(function () {
    --bb;
    if (bb == 0) {
        clearInterval(interval2 );
        jQuery("#exampleModal2").modal("show");
    }
}, 1000);