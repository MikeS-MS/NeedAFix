var AnimSpeed = 200;

function getDarkMode() {
    let darkmode = sessionStorage.getItem('darkmode');
    return darkmode == 'true';
}

function setDarkMode(mode) {
    sessionStorage.setItem('darkmode', mode);
}

function HandleDarkModeTrue() {
    $('.dark-mode-button-circle').addClass('dark-mode-button-circle-dark');
    $('body').addClass('dark-mode-body');
    $('.picture-frame').addClass('dark-mode-frame');
    $('.post-frame').addClass('dark-mode-frame');
    $('.thumbnail-text').addClass('dark-mode-text');
    $('.post-text').addClass('dark-mode-text')
    $('.author').addClass('dark-mode-text');
    $('#terms-text p, #terms-text h3, #terms-text li').addClass('dark-mode-text');
    $("#contact-us label, #contact-us input, #contact-us buton").addClass('dark-mode-text');
    $('.post-divider').addClass('dark-mode-background-color');
    $('.comment-container').addClass('dark-mode-comment-background')
}

function HandleDarkModeFalse() {
    $('.dark-mode-button-circle-dark').removeClass('dark-mode-button-circle-dark');
    $('.dark-mode-body').removeClass('dark-mode-body');
    $('.dark-mode-frame').removeClass('dark-mode-frame');
    $('.dark-mode-background-color').removeClass('dark-mode-background-color');
    $('.dark-mode-text').removeClass('dark-mode-text');
    $('.dark-mode-comment-background').removeClass('dark-mode-comment-background')
}

function DarkMode() {
    let darkmode = getDarkMode();

    if (!darkmode) {
        $('.dark-mode-button-circle').animate({
            left: 40
        }, AnimSpeed, function() {
            HandleDarkModeTrue()
            setDarkMode(true)
        });

    } else {
        $('.dark-mode-button-circle').animate({
            left: 0
        }, AnimSpeed, function() {
            HandleDarkModeFalse()
            setDarkMode(false)
        });
    }
}

function HandlePageLoadDarkMode() {
    let darkmode = getDarkMode();

    if (darkmode) {
        HandleDarkModeTrue();
        $('.dark-mode-button-circle').animate({ left: 50 }, AnimSpeed)
    } else {
        HandleDarkModeFalse();
        $('.dark-mode-button-circle').animate({ left: 0 }, AnimSpeed)
    }
}
HandlePageLoadDarkMode()


var state = false;
var finished = true;

function ToggleOverviewAnim() {
    if (state == false) {
        //Mobile
        if (document.documentElement.clientWidth < 768) {
            if (finished) {
                finished = false;
                $(".menu-bar").animate({ width: 0 }, AnimSpeed);
                $(".menu").animate({ left: '50%' }, AnimSpeed);
                $(".menu-overview").animate({ bottom: 100 }, AnimSpeed, function() {
                    $(".cross-bar").animate({ width: '50px' }, AnimSpeed);
                    $(".cross").animate({ left: '-20px' }, AnimSpeed, function() {
                        finished = true;
                        state = !state;
                    });
                });
            }
        }
        // Tablet
        else if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1024) {
            if (finished) {
                finished = false;
                $(".menu-bar").animate({ width: 0 }, AnimSpeed);
                $(".menu").animate({ left: '50%' }, AnimSpeed);
                $(".menu-overview").animate({ left: 100 }, AnimSpeed, function() {
                    $(".cross-bar").animate({ width: '50px' }, AnimSpeed);
                    $(".cross").animate({ left: '-30px' }, AnimSpeed, function() {
                        finished = true;
                        state = !state;
                    });
                });
                // $(".image-scroll").animate({ marginLeft: '100px' });
            }
        }
        // Desktop
        else if (document.documentElement.clientWidth >= 1024) {
            if (finished) {
                finished = false;
                $(".menu-bar").animate({ width: 0 }, AnimSpeed);
                $(".menu").animate({ left: '25px' }, AnimSpeed);
                $(".menu-overview").animate({ left: 0 }, AnimSpeed, function() {
                    $(".cross-bar").animate({ width: '50px' });
                    $(".cross").animate({ left: '0px' }, AnimSpeed, function() {
                        finished = true;
                        state = !state;
                    });
                });
                // $(".image-scroll").animate({ marginLeft: '100px' }, 500);
            }
        }
    } else {
        // Mobile
        if (document.documentElement.clientWidth < 768) {
            if (finished) {
                finished = false;
                $(".cross-bar").animate({ width: 0 }, AnimSpeed);
                $(".cross").animate({ left: 20 }, 500, function() {
                    $(".menu-bar").animate({ width: '90%' }, AnimSpeed);
                    $(".menu").animate({ left: '5%' }, AnimSpeed);
                    $(".menu-overview").animate({ bottom: 0 }, AnimSpeed, function() {
                        finished = true;
                        state = !state;
                    });
                });
            }
        }
        // Tablet
        else if (document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 1024) {
            if (finished) {
                finished = false;
                $(".cross-bar").animate({ width: '0' });
                $(".cross").animate({ left: '0px' }, AnimSpeed, function() {
                    $(".menu-bar").animate({ width: 50 }, AnimSpeed);
                    $(".menu").animate({ left: '20px' }, AnimSpeed);
                    $(".menu-overview").animate({ left: -50 }, AnimSpeed, function() {
                        finished = true;
                        state = !state;
                    });
                    // $(".image-scroll").animate({ marginLeft: '0' });
                });
            }
        }
        // Desktop
        else if (document.documentElement.clientWidth >= 1024) {
            if (finished) {
                finished = false;
                $(".cross-bar").animate({ width: '0px' });
                $(".cross").animate({ left: '20px' }, AnimSpeed, function() {
                    $(".menu-bar").animate({ width: 50 }, AnimSpeed);
                    $(".menu").animate({ left: 0 }, 500);
                    $(".menu-overview").animate({ left: -350 }, AnimSpeed, function() {
                        finished = true;
                        state = !state;
                    });
                    // $(".image-scroll").animate({ marginLeft: '0' }, AnimSpeed);
                });
            }
        }
    }
}

function defaultsMobile(mediaQueryMobile) {
    if (mediaQueryMobile.matches) {
        $("#menu-overview").removeClass("desktop");
        // console.log("mobile")
        // $(".image-scroll").css({
        //     marginLeft: 0
        // });
        $(".cross").css({
            position: 'absolute',
            top: 10,
            left: 5,
            height: 50,
            width: 50
        });
        $(".cross-bar").css({
            height: 8,
            width: 0,
            backgroundColor: 'white'
        });
        $('.menu').css({
            position: 'relative',
            top: 0,
            left: '5%',
            marginLeft: 0
        });
        $(".menu-bar").css({
            position: 'relative',
            left: 0,
            backgroundColor: 'white',
            margin: '5px 0 5px 0',
            height: 8,
            width: '90%'
        });
        $(".menu-overview").css({
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 100,
            backgroundColor: 'rgb(47, 49, 54)'
        });
        state = false;
        finished = true;
    }
}

function defaultsTablet(mediaQueryTablet) {
    if (mediaQueryTablet.matches) {
        $("#menu-overview").removeClass("desktop");
        // console.log("tablet")
        // $(".image-scroll").css({
        //     marginLeft: 0
        // });
        $(".cross").css({
            position: 'absolute',
            top: 10,
            left: 0,
            height: 50,
            width: 50
        });
        $(".cross-bar").css({
            height: 8,
            width: 0,
            backgroundColor: 'white'
        });
        $('.menu').css({
            position: 'relative',
            marginLeft: 0,
            top: 60,
            left: 20
        });
        $(".menu-bar").css({
            position: 'relative',
            left: '5%',
            backgroundColor: 'white',
            margin: '5px 0 5px 0',
            height: 8,
            width: 50
        });
        $(".menu-overview").css({
            position: 'fixed',
            bottom: 0,
            left: -50,
            width: 150,
            height: '100%',
            backgroundColor: 'rgb(47, 49, 54)'
        });
        state = false;
        finished = true;
    }
}

function defaultsLaptop(mediaQueryLaptop) {
    if (mediaQueryLaptop.matches) {
        // console.log("laptop")
        // $(".image-scroll").css({
        //     marginLeft: 100
        // });
    }
}

function defaultsDesktop(mediaQueryDesktop) {
    if (mediaQueryDesktop.matches) {
        $("#menu-overview").addClass("desktop");
        // console.log("desktop")
        // $(".image-scroll").css({
        //     marginLeft: 0
        // });
        $(".cross").css({
            position: 'absolute',
            top: 2,
            left: 20,
            height: '50px',
            width: '50px',
        });
        $(".cross-bar").css({
            height: 8,
            width: 0,
            backgroundColor: 'white'
        });
        $('.menu').css({
            marginLeft: 10,
            position: 'relative',
            top: 30,
            left: 0
        });
        $('.menu-bar').css({
            position: 'relative',
            left: 0,
            backgroundColor: 'white',
            margin: '5px 0 5px 0',
            height: 8,
            width: 50
        });
        $(".menu-overview").css({
            position: 'fixed',
            bottom: 0,
            left: -350,
            width: 350,
            height: '100%',
            backgroundColor: 'rgb(47, 49, 54)'
        });
        state = false;
        finished = true;
    }

}

// Reset styles when query tablet hits.

//Mobile
var mediaQueryMobile = window.matchMedia('(max-width: 767px)');

defaultsMobile(mediaQueryMobile);
mediaQueryMobile.addListener(defaultsMobile);

//Tablet
var mediaQueryTablet = window.matchMedia('(min-width: 767px) and (max-width: 1023px)');

defaultsTablet(mediaQueryTablet);
mediaQueryTablet.addListener(defaultsTablet);

// Laptop
var mediaQueryLaptop = window.matchMedia('(min-width: 931px) and (max-width: 1024px)');

defaultsLaptop(mediaQueryLaptop);
mediaQueryLaptop.addListener(defaultsLaptop);

// Desktop
var mediaQueryDesktop = window.matchMedia('(min-width: 1023px)');

defaultsDesktop(mediaQueryDesktop);
mediaQueryDesktop.addListener(defaultsDesktop);