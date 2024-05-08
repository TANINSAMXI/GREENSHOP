$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 1100,
    autoplaySpeed: 500,
    loop:true,
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        1100:{
            items:4
        }
    }
});