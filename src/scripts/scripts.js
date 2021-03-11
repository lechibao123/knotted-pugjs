$ = jQuery;
$(function () {
    var header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > header.offsetTop) $('#header').addClass('sticky');else $('#header').removeClass('sticky');
    });
});

$('.owl-hero-banner').owlCarousel({
    //loop: true,
    items: 1,
    dots: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 1,
        }
    }
    //autoplay: true,
    //autoplayTimeout: 2000,
});
// $('.rugs-slide').owlCarousel({
//     items: 3,
//     loop: false,
//     center: true,
//     margin: 10,
//     URLhashListener: true,
//     autoplayHoverPause: true,
//     startPosition: 'URLHash'
// });
$(document).ready(function() {
    $('.owl-rugs-slide').owlCarousel({
        dots: false,
        center: true,
        items: 3,
        URLhashListener: true,
        autoplayHoverPause: true,
        //autoWidth: true,
        startPosition: 'URLHash',
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        },
    });
    // let owlCarouselActive = document.getElementsByClassName("owl-item active");
    // let last = owlCarouselActive[owlCarouselActive.length - 1]; //get last item
    // last.style.opacity = 0.6;
});
$('.owl-how-works').owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1024: {
            items: 2,
        },
        1300: {
            items: 3,
        }

    }
});
$('.owl-artist-rug-2').owlCarousel({
    //loop: true,
    items: 4,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        }
    }
});
$('.owl-artist-list').owlCarousel({
    //loop: true,
    items: 1,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        1000: {
            items: 2,
        }
    }
});
$('.artist__item').owlCarousel({
    //loop: true,
    items: 3,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});
$('.owl-detail-rug').owlCarousel({
    //loop: true,
    items: 1,
    dots: true,
    responsive: {
        0: {
            items: 1,
            dots: false,
        },
        600: {
            items: 1,
            dots: false,
        },
        1000: {
            items: 1,
        }
    }
});

const loadMore = function(item, show) {
    $('.gallery-items li:lt(3)').show();
    $('.less').hide();
    let items = item;
    let shown = show;
    $('.more').click(function() {
        $('.less').hide();
        shown = $('.gallery-items li:visible').length + show;
        if (shown < items) $('.gallery-items li:lt(' + shown + ')').show(300);
        else {
            $('.gallery-items li:lt(' + items + ')').show(600);
            $('.more').hide();
            $('.less').show();
        }
    });
    $('.less').click(function() {
        $('.gallery-items li').not(':lt(3)').hide(600);
        $('.more').show();
        $('.less').hide();
    });
};

loadMore($('.count').length,3);

const loadMoreNews = function(item) {
    $('.gallery-item li:lt(6)').show();
    $('.less').hide();
    let items = item;
    let shown = 6;
    $('.more').click(function() {
        $('.less').hide();
        shown = $('.gallery-item li:visible').length + 6;
        if (shown < items) $('.gallery-item li:lt(' + shown + ')').show(300);
        else {
            $('.gallery-item li:lt(' + items + ')').show(300);
            $('.more').hide();
            $('.less').show();
        }
    });
    $('.less').click(function() {
        $('.gallery-item li').not(':lt(6)').hide(300);
        $('.more').show();
        $('.less').hide();
    });
};

loadMoreNews($('.count').length);

const toggle = document.querySelector('#toggle-menu');
const nav = document.querySelector('.nav');
toggle.onclick = toggleMenu;

function toggleMenu() {
    toggle.classList.toggle('active');
    nav.classList.toggle('show');
    console.log(nav);
};

// Collapse menu
function collapseMenu() {
    $('.artist-list li').click(function() {
        $(this).toggleClass(' active-collapse ');
        $(this).siblings().removeClass(' active-collapse ');
        $('.submenu').stop().slideUp();
        $('.active-collapse .submenu').stop().slideDown();
        return false;
    });
};

collapseMenu();

$('#collapse_specs').collapse({
    show: false
});
$('#collapse_shipping').collapse({
    show: false
});

$(document).ready(function() {
    $('#field_ampc').select2();
    $("select").select2({
        width: '100%',
        minimumResultsForSearch: -1,
        dropdownAutoWidth: true,
        dropdownCssClass: 'options',
        placeholder: "SELECT SUBJECT"
    });
});

