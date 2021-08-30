/**

 * 

 *

 * This file contains all main JS functions

 *

--------------------------------------------------------------

            [Table of Contents]

--------------------------------------------------------------

* 01 - review-box-tab

* 02 -  sliders

        - banner__slider Slider

        - course__cards Slider

        - partners__names Slider

        - student__cards Slider

        - large__course__cards Slider

        - student__cards-v2 Slider 

        - testimonal__list Slider 

        - lesson__list Slider 

        - recommended__cards Slider 

        - st__view__cards Slider

        - deal__cards Slider

        - blog__cards Slider

--------------------------------------------------------------*/



(function($) {

    "use strict";



/* ================================= */

  /*===== review-box-tab =====*/

/* ================================= */



try {

    $('button.review-btn').on('click',function(){ 

        $('.tab-content, button.review-btn').removeClass('active');

        var dataTarget = $(this).attr('data-target');

        $('#'+ dataTarget).toggleClass('active');

        $(this).toggleClass('active');

    });

} catch (error) {

    

}

/* ================================= */

  /*===== sliders =====*/

/* ================================= */



//  banner__slider Slider

try {

    $('.banner__slider').slick({

        infinite: true,

        autoplay:true,

        dots:true,

	    arrows: false,

        speed: 300,

        slidesToShow: 1,

        slidesToScroll: 1,

       

    });

} catch (error) {   

}   



//  course__cards Slider

try {

    $('.course__cards').slick({

        dots: true,

        infinite: true,

        speed: 300,

        arrows: true,

        slidesToShow: 3,

        slidesToScroll: 1,

        responsive: [

            {

                breakpoint: 992,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                    infinite: true,

                }

            },

            {

                breakpoint: 700,

                settings: {

                    infinite: true,

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

            },

            {

                breakpoint: 481,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    autoplay: true,

                    infinite: true,

                    arrows: false,

                    dots: true,

                }

            }

        ]

    });

} catch (error) {

    

}



//  partners__names Slider

try {

    $('.partners__names').slick({

        dots: false,

        infinite: true,

        speed: 300,

        arrows: true,

        slidesToShow: 5,

        slidesToScroll: 1,

        responsive: [{

                breakpoint: 992,

                settings: {

                    slidesToShow: 5,

                    slidesToScroll: 1,

    

                }

            },

            {

                breakpoint: 768,

                settings: {

                    slidesToShow: 4,

                    slidesToScroll: 1,

                    dots: true,

                    arrows:false

                }

            },

            {

                breakpoint: 576,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 2,

                    arrows: false,

                    dots: true,

                    autoplay: true,

                    infinite: true, 

                }

            },

        ]

    });

} catch (error) {

    

}









//  student__cards Slider        

try {

    $('.student__cards').slick({

        dots: false,

        infinite: true,

        speed: 300,

        arrows: true,

        slidesToShow: 2,

        slidesToScroll: 1,

        responsive: [{

                breakpoint: 768,

                settings: { 

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    infinite: true,

                    dots: true,

                    arrows: false,

                }

            },

            {

                breakpoint: 481,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    infinite: true,

                    dots: true,

                    arrows: false,

                }

            }   

        ]

    });

    

} catch (error) {

    

}





//  large__course__cards Slider

        

try {

    $('.large__course__cards').slick({

        dots: true,

        infinite: true,

        speed: 300,

        arrows: true,

        slidesToShow: 3,

        slidesToScroll: 1,

          responsive: [

            {

                breakpoint: 992,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                    infinite: true,

                }

            },

            {

                breakpoint: 700,

                settings: {

                    infinite: true,

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

            },

            {

                breakpoint: 481,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    autoplay: true,

                    infinite: true,

                    arrows: false,

                    dots: true,

                }

            }

          ]

    });

    

} catch (error) {

    

}



//  student__cards-v2 Slider 

        

try {

    $('.student__cards-v2').slick({

        dots: false,

        infinite: true,

        speed: 300,

        arrows: true,

        slidesToShow: 3,

        slidesToScroll: 1,

          responsive: [

            {

              breakpoint: 992,

              settings: {

                slidesToShow: 2,

                slidesToScroll: 1,

                infinite: true,

                

              }

            },

            {

              breakpoint: 576,

              settings: {

                slidesToShow: 1,

                slidesToScroll: 1,

                dots:true,

                arrows: false,

              }

            },

          ]

    });

} catch (error) {

    

}



//  testimonal__list Slider 

        

try {

    $('.testimonal__list').slick({

        dots: false,

        infinite: true,

        speed: 300,

        arrows: true,

        slidesToShow: 1,

        slidesToScroll: 1,

          responsive: [

        

            {

              breakpoint: 576,

              settings: {

                slidesToShow: 1,

                slidesToScroll: 1,

                dots: true,

                arrows: false,

              }

            }

    

          ]

    });

} catch (error) {

    

}



//  lesson__list Slider 

        

try {

    $('.lesson__list').slick({

        dots: true,

        infinite: true,

        speed: 300,

        arrows: true,

        slidesToShow: 2,

        slidesToScroll: 1,

          responsive: [

       

            {

              breakpoint: 768,

              settings: {

                arrows:false,

                slidesToShow: 1,

                slidesToScroll: 1

              }

            }

    

          ]

    });

} catch (error) {

    

}

//  recommended__cards Slider 

        

try {

    $('.recommended__cards').slick({

        dots: true,

        infinite: true,

        speed: 300,

        arrows: true,

        slidesToShow: 3,

        slidesToScroll: 1,

        responsive: [

            {

                breakpoint: 992,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                    infinite: true,

                }

            },

            {

                breakpoint: 700,

                settings: {

                    infinite: true,

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

            },

            {

                breakpoint: 481,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    autoplay: true,

                    infinite: true,

                    arrows: false,

                    dots: true,

                }

            }

    

        ]

    });

} catch (error) {

    

}



//  st__view__cards Slider       

try {

    $('.st__view__cards').slick({

        dots: true,

        infinite: false,

        speed: 300,

        arrows: true,

        slidesToShow: 3,

        slidesToScroll: 1,

        responsive: [

            {

                breakpoint: 992,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                    infinite: true,

                }

            },

            {

                breakpoint: 700,

                settings: {

                    infinite: true,

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

            },

            {

                breakpoint: 481,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    autoplay: true,

                    infinite: true,

                    arrows: false,

                    dots: true,

                }

            }

    

        ]

    });

} catch (error) {

  

}



//  deal__cards Slider

        

try {

    $('.deal__cards').slick({

        dots: true,

        infinite: true,

        speed: 300,

        arrows: true,

        slidesToShow: 3,

        slidesToScroll: 1,

          responsive: [

            { 

                breakpoint: 992,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                    infinite: true,

                }

            },

            {

                breakpoint: 700,

                settings: {

                    infinite: true,

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

            },

            {

                breakpoint: 481,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    autoplay: true,

                    infinite: true,

                    arrows: false,

                    dots: true,

                }

            }

    

          ]

    });

} catch (error) {

    

}





//  blog__cards Slider

try {

    $('.blog__cards').slick({

        dots: true,

        infinite: true,

        speed: 300,

        arrows: true,

        slidesToShow: 2,

        slidesToScroll: 1,

          responsive: [

            {

              breakpoint: 768,

              settings: {

                slidesToShow: 1,

                slidesToScroll: 1,

                infinite: true,

                arrows: false,

                dots: true

              }

            },

         

    

          ]

    });

} catch (error) {

    

}

})(jQuery);