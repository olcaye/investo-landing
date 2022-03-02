$('document').ready(function(){
    $( "#menu-trigger" ).click(function() {
        if(!$('body').hasClass('drawerIsActive')) {
            $("body").addClass("drawerIsActive");
            $("#menu").addClass("animate__slideInLeft");
            $("#menu").removeClass("animate__slideOutLeft");
            $('#sticky-footer').addClass('animate__animated animate__fadeOutDown');

        } else {
            $("body").removeClass("drawerIsActive");
            $("#menu").removeClass("animate__slideInLeft");
            $("#menu").addClass("animate__slideOutLeft");
            $('#sticky-footer').removeClass('animate__fadeOutDown').addClass('animate__fadeInUp');
        }
    });

    var $inputVal = $('#hiddenInput');
    $("#formType button").click(function () {
        $inputVal.val($(this).attr("id"));
        $inputVal.attr('name',$(this).attr("id") )
        $(this).addClass('btn-ig-active').siblings().removeClass('btn-ig-active');
    });


    var swiper = new Swiper('#project-detail-slider .swiper',{
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var swiper = new Swiper('#investo-about-detail .swiper',{
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        spaceBetween: 30,
        loop: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });



});
