jQuery(document).ready(function ($) {
    animateImg();

    function animateImg() {
        // var wow = new WOW({
        //     mobile: false,
        //     live: true
        // });
        // wow.init();
        // http://michalsnik.github.io/aos/
        AOS.init({
            disable: 'mobile',
            // easing: 'ease-out-back',
            duration: 1000
        });
    }
    var $menu = $('.hysSearchWrapper');
    var $mainMenuState = $('.onSearch');

    function changeHeader() {

        if ($mainMenuState.length) {
            $mainMenuState.click(function (e) {
                if (!$mainMenuState.hasClass('on')) {
                    $menu.hide().slideDown(250, function () {});
                    $(this).addClass('on')
                    $(".navMobileWrap").removeClass('show').addClass('hi');
                    $(".mOpenBtn").removeClass('active')
                } else {
                    $menu.show().slideUp(250, function () {});
                    $(this).removeClass('on')
                }
            });
            $('.searchMask').on('click', function (e) {
                $menu.hide().slideUp(250, function () {
                    // $menu.css('display', '');
                });
                $(this).removeClass('on')
                $mainMenuState.removeClass('on')

            })
        }
 
        $(window).scroll(function () {
    
        })

        if ($(window).width() < 1199) {
            $(".mOpenBtn").click(function (e) {
                $menu.hide()
                $mainMenuState.removeClass('on')
                $(this).addClass('on')
                if ($(this).hasClass('active')) {
                    $("body").css("overflow", "inherit");
                    $('.navMobileWrap').addClass('hi')
                } else {
                    $("body").css("overflow", "hidden");
                    $('.navMobileWrap').removeClass('hi')
                }
                $(this).toggleClass("active");
                $(".navMobileWrap").toggleClass('show');
            });
            $('.navEmpty').click(function (e) {
                $(".navMobileWrap").toggleClass('show').addClass('hi');
                $(".mOpenBtn").removeClass('active')
            })



            $(".mMmenuLay dl").each(function (i) {
                var _this = $(this);
                if (_this.find("dd").size() > 0) {
                    _this.find(".mToggle").show();
                }
            });
            $(".mToggle").click(function (e) {
                e.stopPropagation();
                var _this2 = $(this)
                if (_this2.parents("dl").hasClass("on")) {
                    _this2.parents("dl").removeClass("on");
                    _this2.removeClass("mToggle2");
                    _this2.parents("dl").find(".mToggle_a").removeClass("mToggle2_a");
                    _this2.parents("dl").find(".mMenu_dd3").slideUp(300);
                } else {
                    $(".mMmenuLay dl").removeClass("on");
                    $(".mToggle").removeClass("mToggle2");
                    _this2.addClass("mToggle2");
                    _this2.parents("dl").addClass("on");
                    $(".mToggle_a").removeClass("mToggle2_a");
                    $(".mMenu_dd3").slideUp(300);
                }

            });



            $(".mToggle_a").click(function (event) {

                event.stopPropagation();

                var _this3 = $(this);

                _this3.toggleClass("mToggle2_a");

                _this3.parents("dd").next(".mMenu_dd3").slideToggle(300);

            });

        }

    }
    changeHeader()
    $(window).resize(function () {
        changeHeader()
    })
    let hover = false;
    let headHover = true

    // if ($(window).width() > 767) {
    //     $('.hysMainMenu li').mouseover(function () {
    //         headHover = true
    //         $(this).addClass('on').siblings().removeClass('on');
    //     }).mouseleave(function () {
    //         headHover = false
    //         setTimeout(() => {
    //             if (headHover == false) {
    //                 $('.hysMainMenu li').removeClass('on')
    //                 hover = false
    //             }
    //         }, 300)
    //     })
    // } else {
    //     $('.hysMainMenu li').on('click', ' a', function (evt) {
    //         let hasClassIcon = $('.hysMainMenu li a span').attr('class')
    //         if (evt.target.className == hasClassIcon) {
    //             evt.preventDefault();
    //         }
    //         let $saCon = $(this).next('.hysASubmenus')
    //         if (!$saCon.hasClass('active')) {
    //             $saCon.hide().slideDown(250, function () {});
    //             $saCon.addClass('active')
    //         } else {
    //             $saCon.show().slideUp(250, function () {});
    //             $saCon.removeClass('active')
    //         }

    //     })
    // }

    $('.hysChangeMore').on('click', function () {
        $(this).toggleClass('show')
    })

    if ($('.hysHomeBannerWrap').length) {
        var hysHomeBannerWrap = new Swiper('.hysHomeBannerWrap', {
            effect: 'fade', // cards
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev ',
            },
        })
    }
    if ($('.hysHomeProductSwiper').length) {
        var hysHomeProductSwiper = new Swiper('.hysHomeProductSwiper', {
            effect: 'cards', // cards
            loop: true,
            slidesPerView: 4,
            spaceBetween: 20,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: '.hysHomeProduct-button-prev',
                prevEl: '.hysHomeProduct-button-next',
            },
            breakpoints: {
                "767": {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                "993": {
                    slidesPerView: 3,
                    spaceBetween: 15,
                }
            },
        })
    }


    if ($('.hysGallerySwiper').length) {
        var hysHomeProductSwiper = new Swiper('.hysGallerySwiper', {
            effect: 'cards', // cards
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: '.hysGallery-button-prev',
                prevEl: '.hysGallery-button-next',
            },
 
        })
    }

    if ($('.hysGoodsImgsSwiper').length || $('.hysProductBannersSwiper').length) {
        var hysGoodsImgsSwiper = new Swiper(".hysGoodsImgsSwiper", {
            spaceBetween: 10,
            slidesPerView: 6,
            slideToClickedSlide: true,
            watchSlidesVisibility: true, // 避免出现BUG
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            thumbs: {
                swiper: hysProductBannersSwiper,
            },
        });
        var hysProductBannersSwiper = new Swiper('.hysProductBannersSwiper', {
            effect: 'fade', // cards
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            thumbs: {
                swiper: hysGoodsImgsSwiper,
            },
        })
        hysProductBannersSwiper.el.onmouseover = function () {
            changeStop()
        }
        hysProductBannersSwiper.el.onmouseleave = function () {
            changeStart()
        }
        hysGoodsImgsSwiper.el.onmouseover = function () {
            changeStop()
        }
        hysGoodsImgsSwiper.el.onmouseleave = function () {
            changeStart()
        }

        function changeStop() {
            hysProductBannersSwiper.autoplay.stop();
            hysGoodsImgsSwiper.autoplay.stop();
        }

        function changeStart() {
            hysProductBannersSwiper.autoplay.start();
            hysGoodsImgsSwiper.autoplay.start();
        }

    }

    if ($('.hysAboutBanner').length) {
        var hysAboutBanner = new Swiper('.hysAboutBanner', {
            effect: 'fade', // cards
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiperAboutPagination',
                type: 'bullets',
                clickable: true,
            },

        })
    }


    if ($('#hysHotProductsTwo').length) {
        var hysAboutBanner = new Swiper('#hysHotProductsTwo', {
            effect: 'cards', // cards
            loop: true,
            slidesPerView: 4,
            spaceBetween: 0,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev ',
            },
            breakpoints: {
                "767": {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                "993": {
                    slidesPerView: 2,
                    spaceBetween: 0,
                }
            },
        })
    }

    if ($('#hysHotProductsThree').length) {
        var hysAboutBanner = new Swiper('#hysHotProductsThree', {
            effect: 'cards', // cards
            loop: true,
            slidesPerView: 4,
            spaceBetween: 0,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev ',
            },
            breakpoints: {
                "767": {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                "993": {
                    slidesPerView: 2,
                    spaceBetween: 0,
                }
            },
        })
    }
    // $(window).resize(function () {

    // });


})