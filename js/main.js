$(document).ready(function() {
	var swiper = new Swiper(".mySwiper", {
	    pagination: {
	        el: ".swiper-pagination",
	        clickable: true,
	    },
	    breakpoints: {
		    0: {
		    	centeredSlides: true,
		    	loop: true,
		    	slidesPerView: "auto",
		    	pagination: false,
		      	slidesPerView: 1,
		      	spaceBetween: 10
		    },
		    1001: {
		      	slidesPerView: 1,
		      	spaceBetween: 0
		    }
		}
	});


	var mySwiper;
	function initSwiper() {
	  mySwiper = new Swiper('.mySwiper_categor', {
	    loop: true,
	    slidesPerView: "auto",
	    breakpoints: {
		    0: {
		      	spaceBetween: 8
		    },
		    1001: {
		      	spaceBetween: 20
		    }
		}
	  });
	}

	if (window.matchMedia("(max-width: 1200px)").matches) {
	  initSwiper();
	}

	window.addEventListener('resize', function() {
	  if (window.matchMedia("(max-width: 1200px)").matches) {
	    if (!mySwiper) {
	      initSwiper();
	    }
	  } else {
	    if (mySwiper) {
	      mySwiper.destroy();
	      mySwiper = undefined;
	    }
	  }
	});

	$('.item_product').each(function(){
    	const dataId = '.' + $(this).find('.swiper').data('id');
    	const paginationClass = $(this).find('.swiper-pagination').attr('class');
    	const productSwiper = new Swiper(dataId, {
    		pagination: {
		      	el: '.swiper-pagination',
	        	clickable: true,
		    },
	        spaceBetween: 0,
	        loop: false,
	        loopedSlides: 1
	    });
    })

	const newProductsSwiper = new Swiper(".mySwiper_product_new", {
        loop: false,
        slidesPerView: "auto",
        loopedSlides: 1,
	    breakpoints: {
		    0: {
		      	spaceBetween: 8
		    },
		    761: {
		      	spaceBetween: 20
		    }
		},
		navigation: {
          nextEl: ".swiper-new-next",
          prevEl: ".swiper-new-prev",
        }
	});

	const hitProductsSwiper = new Swiper(".mySwiper_product_hit", {
        loop: false,
        slidesPerView: "auto",
        loopedSlides: 1,
	    breakpoints: {
		    0: {
		      	spaceBetween: 8
		    },
		    761: {
		      	spaceBetween: 20
		    }
		},
		navigation: {
          nextEl: ".swiper-hit-next",
          prevEl: ".swiper-hit-prev",
        }
	});

	const prProductsSwiper = new Swiper(".mySwiper_product_pr", {
        loop: false,
        slidesPerView: "auto",
        loopedSlides: 1,
	    breakpoints: {
		    0: {
		      	spaceBetween: 8
		    },
		    761: {
		      	spaceBetween: 20
		    }
		},
		navigation: {
          nextEl: ".swiper-pr-next",
          prevEl: ".swiper-pr-prev",
        }
	});

	const mySwiperReviews = new Swiper(".mySwiper_reviews", {
        spaceBetween: 20,
        loop: true,
    	centeredSlides: false,			
        slidesPerView: 3,
	    breakpoints: {
		    0: {
		    	centeredSlides: true,
		    	slidesPerView: "auto",
		      	spaceBetween: 8
		    },
		    761: {
		      	spaceBetween: 20,
		      	slidesPerView: 2
		    },
		    1000: {
		      	spaceBetween: 20,
		      	slidesPerView: 3
		    }
		},
        navigation: {
          nextEl: ".swiper-review-next",
          prevEl: ".swiper-review-prev",
        }
    });

    const mySwiperPreim = new Swiper(".mySwiper_prem", {
        spaceBetween: 20,
        loop: true,
    	centeredSlides: false,			
        slidesPerView: 4,
        pagination: {
	      	el: '.swiper-prem-pagination',
        	clickable: true,
	    },
	    breakpoints: {
		    0: {
		    	slidesPerView: 1,
		      	spaceBetween: 8
		    },
		    700: {
		      	spaceBetween: 20,
		      	slidesPerView: 2
		    },
		    1000: {
		      	spaceBetween: 20,
		      	slidesPerView: 3
		    },
		    1100: {
		      	spaceBetween: 20,
		      	slidesPerView: 4
		    }
		},
        navigation: {
          nextEl: ".swiper-prem-next",
          prevEl: ".swiper-prem-prev",
        }
    });

    const mySwiperVideo = new Swiper(".mySwiper_video", {
        spaceBetween: 20,
        loop: true,
    	centeredSlides: false,			
        slidesPerView: 2,
	    breakpoints: {
		    0: {
		    	slidesPerView: 1,
		      	spaceBetween: 8
		    },
		    1000: {
		      	spaceBetween: 20,
		      	slidesPerView: 2
		    }
		},
        navigation: {
          nextEl: ".swiper-video-next",
          prevEl: ".swiper-video-prev",
        }
    });
})

const accorBlock = document.querySelectorAll('.accor_title');

accorBlock.forEach(function(elem) {
    elem.addEventListener('click', function() {
        this.parentNode.classList.toggle('opened');
    });
});


var countDownDate = new Date("Mar 12, 2023 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);




// $(function(){

//     $('.nft_faq_name').on('click', function(){
//       if ($(this).closest('.nft_faq_accor').hasClass('opened')){
//         $(this).closest('.nft_faq_accor').removeClass('opened');
//         $(this).closest('.nft_faq_accor').find('.nft_faq_body').slideUp();
//       } else {
//         $(this).closest('.nft_faq_accor').addClass('opened');
//         $(this).closest('.nft_faq_accor').find('.nft_faq_body').slideDown();
//       }
//     });

//     const menuClone = $('.top_menu_header > ul').clone();

//     menuClone.appendTo('.menu_top');

//     if ( window.matchMedia('(max-width : 767px)').matches ) {
// 	    var $slider = $('.nft_keys_inner');

// 	    if ($slider.find('.nft_keys_item').length > 1) {
// 	        $slider.slick({
// 	          dots: true,
// 	          speed: 300,
// 	          arrows: false,
// 	          slidesToShow: 1,
// 	          slidesToScroll: 1
// 	        });
// 	    };
// 	}

// 	$('.menu_scroll_link a').on('click', function(e){
// 		e.preventDefault();
// 		$('html, body').animate({
// 			scrollTop: $($(this).attr('href')).offset().top - 50
// 		},500);
// 	});


// 	var $body = $(document.body),
//       $html = $(document.documentElement);

//  //  function formPopup($btn,$wrap){

//  //    var closeForm = $('.formExtraWrapper .close-form'),
//  //        formWrap = $($wrap),
//  //        formBtn = $($btn),
//  //        formOpened = 'opened',
//  //        overflowHidden = 'oveflowHidden';

//  //    closeForm.on('click', function() {
//  //        formWrap.removeClass(formOpened);
//  //        $html.removeClass(overflowHidden);
//  //    });
//  //    formBtn.on('click', function(event) {
//  //        formWrap.addClass(formOpened);
//  //        $html.toggleClass(overflowHidden);
//  //        event.preventDefault();
//  //    });

//  //    $html.on('keyup', function(event) {
//  //        if (formWrap.hasClass(formOpened) && event.keyCode == 27) {
//  //            formWrap.removeClass(formOpened);
//  //            $html.removeClass(overflowHidden);
//  //        }
//  //    });
//  //    $body.on('click touchstart', function(a) {
//  //        if ($(a.target).closest('.formExtraWrapper').length || $(a.target).closest(formBtn).length) return;
//  //        if (formWrap.hasClass(formOpened)) {
//  //            formWrap.removeClass(formOpened);
//  //            $html.removeClass(overflowHidden);
//  //        }
//  //    });
//  //  }

// 	// formPopup('.contacts_btn','.contacts_popup');
// })

// $(function(){
//     var $html = $(document.documentElement),
//         menuBtn = $('.burger'),
//         menuWrapper = $('.menu_burger'),
//         menuClose = $('.menuClose'),        
//         openedMenu = 'opened',
//         overflowHidden = 'oveflowHidden';

//     menuBtn.on("click", function(event) {
//         menuWrapper.toggleClass(openedMenu);
//         menuBtn.toggleClass(openedMenu);
//         $html.toggleClass(overflowHidden);
//         $html.toggleClass('open_menu');
//     });
//     menuClose.on("click", function(event) {
//         menuWrapper.removeClass(openedMenu);
//         menuBtn.removeClass(openedMenu);
//         $html.removeClass(overflowHidden);
//         $html.removeClass('open_menu');
//     });

//     $(document).on('click touchstart', function(e){
//         if( $(e.target).closest(menuBtn).length || $(e.target).closest(menuWrapper).length) 
//           return;
//         if (menuBtn.hasClass(openedMenu)){
//             menuWrapper.removeClass(openedMenu);
//             menuBtn.removeClass(openedMenu);
//             $html.removeClass(overflowHidden);
//             $html.removeClass('open_menu');
//         }
//     });
// });