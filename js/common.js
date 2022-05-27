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
    var $menu = $('.ddwSearchWrapper');
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
    //     $('.ddwMainMenu li').mouseover(function () {
    //         headHover = true
    //         $(this).addClass('on').siblings().removeClass('on');
    //     }).mouseleave(function () {
    //         headHover = false
    //         setTimeout(() => {
    //             if (headHover == false) {
    //                 $('.ddwMainMenu li').removeClass('on')
    //                 hover = false
    //             }
    //         }, 300)
    //     })
    // } else {
    //     $('.ddwMainMenu li').on('click', ' a', function (evt) {
    //         let hasClassIcon = $('.ddwMainMenu li a span').attr('class')
    //         if (evt.target.className == hasClassIcon) {
    //             evt.preventDefault();
    //         }
    //         let $saCon = $(this).next('.ddwASubmenus')
    //         if (!$saCon.hasClass('active')) {
    //             $saCon.hide().slideDown(250, function () {});
    //             $saCon.addClass('active')
    //         } else {
    //             $saCon.show().slideUp(250, function () {});
    //             $saCon.removeClass('active')
    //         }

    //     })
    // }

    $('.ddwChangeMore').on('click', function () {
        $(this).toggleClass('show')
    })

    if ($('.ddwHomeBannerWrap').length) {
        var ddwHomeBannerWrap = new Swiper('.ddwHomeBannerWrap', {
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

    if ($('.ddwGoodsImgsSwiper').length || $('.ddwProductBannersSwiper').length) {
        var ddwGoodsImgsSwiper = new Swiper(".ddwGoodsImgsSwiper", {
            spaceBetween: 10,
            slidesPerView: 6,
            slideToClickedSlide: true,
            watchSlidesVisibility: true, // 避免出现BUG
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            thumbs: {
                swiper: ddwProductBannersSwiper,
            },
        });
        var ddwProductBannersSwiper = new Swiper('.ddwProductBannersSwiper', {
            effect: 'fade', // cards
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            thumbs: {
                swiper: ddwGoodsImgsSwiper,
            },
        })
        ddwProductBannersSwiper.el.onmouseover = function () {
            changeStop()
        }
        ddwProductBannersSwiper.el.onmouseleave = function () {
            changeStart()
        }
        ddwGoodsImgsSwiper.el.onmouseover = function () {
            changeStop()
        }
        ddwGoodsImgsSwiper.el.onmouseleave = function () {
            changeStart()
        }

        function changeStop() {
            ddwProductBannersSwiper.autoplay.stop();
            ddwGoodsImgsSwiper.autoplay.stop();
        }

        function changeStart() {
            ddwProductBannersSwiper.autoplay.start();
            ddwGoodsImgsSwiper.autoplay.start();
        }

    }

    if ($('.ddwAboutBanner').length) {
        var ddwAboutBanner = new Swiper('.ddwAboutBanner', {
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

    if ($('#ddwHotProductsOne').length) {
        var ddwAboutBanner = new Swiper('#ddwHotProductsOne', {
            effect: 'cards', // cards
            loop: true,
            slidesPerView: 4,
            spaceBetween: 0,
            autoplay: {
                delay: 3000,
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

    if ($('#ddwHotProductsTwo').length) {
        var ddwAboutBanner = new Swiper('#ddwHotProductsTwo', {
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

    if ($('#ddwHotProductsThree').length) {
        var ddwAboutBanner = new Swiper('#ddwHotProductsThree', {
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