(function($) {
    function FooterBottom() { 
        $('body').css('margin-bottom', $('.footer').outerHeight())
    };

    FooterBottom();
    window.addEventListener('resize', FooterBottom, false);  
})(jQuery);

$(document).ready(function(){
    $('.dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown("fast");
    });

    $('.dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp("fast");
    });
});

$(document).ready(function(){
    $(function () {
        'use strict'
        $('[data-toggle="offcanvas"]').on('click', function () {
            $('.offcanvas-collapse').toggleClass('open');
            $('.navbar-toggler-icon').toggleClass('open')
        })
    })
});

$(document).ready(function(){
    function handleFirstTab(e) {
        if (e.keyCode === 9) {
            document.body.classList.add('user-is-tabbing');

            window.removeEventListener('keydown', handleFirstTab);
            window.addEventListener('mousedown', handleMouseDownOnce);
        }
    }

    function handleMouseDownOnce() {
        document.body.classList.remove('user-is-tabbing');

        window.removeEventListener('mousedown', handleMouseDownOnce);
        window.addEventListener('keydown', handleFirstTab);
    }

    window.addEventListener('keydown', handleFirstTab);
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 750) {
            $('.scroll-to-top').fadeIn(200);
        } 
        else {
            $('.scroll-to-top').fadeOut(200);
        }
    });
    $('.scroll-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},300);
        return false;
    });
});

$(document).ready(function(){
    var $grid = $('.img-grid').masonry({
        itemSelector: 'figure',
        percentPosition: true
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
        $grid.masonry();
    });  
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function numberWithCommas(number) {
    var parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}
$(document).ready(function() {
    $(".number").each(function() {
        var num = $(this).text();
        var commaNum = numberWithCommas(num);
        $(this).text(commaNum);
    });
});

(function($) {
    function NavbarScroll() {
        var scroll = $(window).scrollTop(),
            topbar = $('.top-bar').outerHeight();

        if(scroll > topbar){
            $('.navbar').addClass('fixed-top');
            $('.top-bar').css('margin-bottom','54px');
            $('.offcanvas-collapse').addClass('now-scrolling');
        } 
        else {
            $('.navbar').removeClass('fixed-top');
            $('.top-bar').css('margin-bottom','0');
            $('.offcanvas-collapse').removeClass('now-scrolling');
        }
    };

    NavbarScroll();
    window.addEventListener('scroll', NavbarScroll, false);  
})(jQuery);

jQuery(function($){
    $(".SNILS-input").mask("999-999-999 99",{placeholder:"_"});
    $(".OGRN-input").mask("9999999999999",{placeholder:""});
    $(".OGRNIP-input").mask("999999999999999",{placeholder:""});
    $(".PHONE-input").mask("+7 (999) 999-99-99",{placeholder:"_"});
    $(".PASSPORTNUMBER-input").mask("9999 999999",{placeholder:"_"});
    $(".DATE-input").mask("99.99.9999",{placeholder:"дд.мм.гггг"});
    $(".DRIVERCARDNUMBER-input").mask("9999 999999",{placeholder:"_"});
    $(".DRIVERCARDGIBDD-input").mask("ГИБДД 9999",{placeholder:"_"});
    $(".INN-input").mask("9999999999",{placeholder:""});
    $(".KPP-input").mask("999999999",{placeholder:""});
    $(".BIK-input").mask("999999999",{placeholder:""});
    $(".RASCH-input").mask("99999999999999999999",{placeholder:""});
    $(".KORR-input").mask("99999999999999999999",{placeholder:""});
});

$(document).ready(function() {
    $('.reg-doc-tabs a[data-toggle="tab"]').on('show.bs.tab', function(e) {
        var activepane = $(e.target).attr("href");

        $('.reg-doc-pane input, .reg-doc-pane textarea').prop('required',false);

        $(activepane).find('input, textarea').prop('required',true);
    });
});

$(document).ready(function() {
    $('.calc-input').on('keyup change blur', function() {
        var koef = parseFloat($(this).data('koef'));
        var number = parseFloat($(this).val())*koef;

        number = number || 0;
        $('.calc-result').text(number.toFixed(2));

        function numberWithCommas(number) {
            var parts = number.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            return parts.join(".");
        }
        $(document).ready(function() {
            $(".calc-result").each(function() {
                var num = $(this).text();
                var commaNum = numberWithCommas(num);
                $(this).text(commaNum);
            });
        });
    })
});

(function($) {
    function MtchHeight() { 
        if(window.matchMedia('(min-width: 576px)').matches){
            $(function() {
                $('.news-item').matchHeight({
                    byRow: false
                });
            });

            $(function() {
                $('.function-card').matchHeight({
                    byRow: false
                });
            });

            $(function() {
                $('.request-card').matchHeight({
                    byRow: false
                });
            });
        }
        else {
            $(function() {
                $('.request-card').matchHeight({
                    byRow: false
                });
            });

            $(function() {
                $('.news-item').matchHeight({
                    byRow: true
                });
            });

            $(function() {
                $('.function-card').matchHeight({
                    byRow: true
                });
            });
        };
    };

    MtchHeight();
    window.addEventListener('resize', MtchHeight, false);  
})(jQuery);

$('.custom-file-input').on('change',function(){
    //get the file name
    var fileName = $(this).val(),
        cleanFileName = fileName.replace('C:\\fakepath\\', " ");

    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(cleanFileName);
})