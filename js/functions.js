$(document).ready(function () {
    $(".all_items").slick({
        rows: 2,
        slidesPerRow: 3,
        
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    rows: 3,
                    slidesPerRow: 2,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });
    //share 
    $(".share").on("click", function () {
        $(".socials").toggle();
    });
});




