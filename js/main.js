
//const lazyLoad = new LazyLoad();

$(document).ready(function() {
	$(document).find('img[loading="lazy"]').lazyload();

	let swiper = new Swiper(".mySwiper", {
	    pagination: {
	        el: ".swiper-pagination",
	        clickable: false,
	    },
	    breakpoints: {
		    0: {
		    	loop: true,
		    	centeredSlides: true,
		    	slidesPerView: "auto",
		    	pagination: false,
		      	spaceBetween: 10
		    },
		    1001: {
		      	slidesPerView: 1,
		      	spaceBetween: 0
		    }
		},
		lazy: true
	});

	const swiperProduct = new Swiper(".mySwiper_product_image_main", {
	    pagination: {
	        el: ".swiper-pagination_pr",
	        clickable: false,
	    },
	    navigation: {
          nextEl: ".swiper-prod-next",
          prevEl: ".swiper-prod-prev",
        },
	    breakpoints: {
		    0: {
		    	centeredSlides: true,
		    	loop: true,
		    	slidesPerView: "auto",
		      	slidesPerView: 1,
		      	spaceBetween: 10
		    },
		    1001: {
		      	slidesPerView: 1,
		      	spaceBetween: 0
		    }
		},
		lazy: true
		
	});


	let mySwiper;
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
		},
		lazy: true
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

	document.querySelectorAll('.item_product').forEach(function(item) {
		if (item.querySelectorAll('.mySwiper_product_image').length) {
		    const dataId = '.' + item.querySelector('.swiper').dataset.id;
		    const paginationClass = item.querySelector('.swiper-pagination').getAttribute('class');
		    const productSwiper = new Swiper(dataId, {
		        pagination: {
		            el: `.${paginationClass}`,
		            clickable: true,
		        },
		        spaceBetween: 0,
		        loop: false,
		        loopedSlides: 1,
				lazy: true
		    });
		}
	});

	$('.swiper-sldier-block').each(function(){
		const sliderId = $(this).data('id');
		const sliderClass = '.' + sliderId;
		const arrow = $(this).data('arrow');		

		const newProductsSwiper = new Swiper(sliderClass, {
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
	          nextEl: '.swiper-' + arrow + '-next',
	          prevEl: '.swiper-' + arrow + '-prev',
	        },
			lazy: true
		});
	})

	const mySwiperReviews = new Swiper(".mySwiper_reviews", {
        spaceBetween: 20,
        loop: true,
    	centeredSlides: false,			
        slidesPerView: 3,
	    breakpoints: {
		    0: {
		    	slidesPerView: "auto",
		    	centeredSlides: true,
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
        },
		lazy: true
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
        },
		lazy: true
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
        },
		lazy: true
    });
})

const body = document.body;
const html = document.documentElement;
const cartBtn = document.querySelector('.cart_btn');

cartBtn.addEventListener('click', function(){
	this.classList.add('opened');
});

const buttonScroll = document.querySelectorAll('.button_id');

buttonScroll.forEach(btn => {
	btn.addEventListener('click', function(e) {
	  e.preventDefault();
	  const target = document.querySelector(this.getAttribute('href'));
	  const targetTop = target.getBoundingClientRect().top + window.pageYOffset - 40;
	  const scrollTop = window.pageYOffset;
	  const duration = 500;
	  const increment = 20;
	  let currentTime = 0;
	  
	  const animateScroll = function() {
	    currentTime += increment;
	    const easing = Math.easeInOutQuad(currentTime, scrollTop, targetTop - scrollTop, duration);
	    window.scrollTo(0, easing);
	    if (currentTime < duration) {
	      setTimeout(animateScroll, increment);
	    }
	  };
	  animateScroll();
	});
})

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

const dLink = document.querySelectorAll('.description_link');
const CommentLink = document.querySelectorAll('.comments_link');

CommentLink.forEach(btn => {
	btn.addEventListener('click', function(){
		const li = document.querySelector('li[data-comments]');
		const clickEvent = new MouseEvent('click', {
			view: window,
			bubbles: true,
			cancelable: true
		});
		li.dispatchEvent(clickEvent);
	})
})

dLink.forEach(btn => {
	btn.addEventListener('click', function(){
		const li = document.querySelector('li[data-descript]');
		const clickEvent = new MouseEvent('click', {
			view: window,
			bubbles: true,
			cancelable: true
		});
		li.dispatchEvent(clickEvent);
	})
});




function blockPopup(btn, wrap) {
	let formWrap = document.querySelector(wrap);
	let closeForm = formWrap.querySelector('.close_btn');
	let formBtn = document.querySelectorAll(btn);
	let formOpened = 'opened';
	let overflowHidden = 'overflowHidden';	
	let wrapMain = document.querySelectorAll('.block_popop_modal');

	closeForm.addEventListener('click', function() {
		formWrap.classList.remove(formOpened);
		formBtn.forEach(function(btn) {
		  btn.classList.remove(formOpened);
		});
		html.classList.remove(overflowHidden);
	});

	formBtn.forEach(btn => {
		btn.addEventListener('click', function(event) {
			document.querySelectorAll('.btn_action').forEach(function(btn) {
			  btn.classList.remove(formOpened);
			});
			wrapMain.forEach(function(wrap) {
			  wrap.classList.remove(formOpened);
			});
			//cartBtn.classList.remove(formOpened);
			this.classList.add(formOpened);
			formWrap.classList.add(formOpened);
			event.preventDefault();
			//$.fancybox.close();
		});
	})

	html.addEventListener('keyup', function(event) {
		if (formWrap.classList.contains(formOpened) && event.keyCode == 27) {
			formWrap.classList.remove(formOpened);
			html.classList.remove(overflowHidden);
			formBtn.forEach(function(btn) {
			  btn.classList.remove(formOpened);
			});
		}
	});
}

blockPopup('.catalog_btn', '.categor_block_fixed');
blockPopup('.review_btn', '.review_block_fixed');
blockPopup('.delev_btn', '.delevery_block_fixed');
blockPopup('.send_btn', '.send_block_fixed');
blockPopup('.cart_btn', '.cart_modal');

const siteWrap = document.querySelector('body');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 1) {
        siteWrap.classList.add('fixed-wrap');
    } else {
        siteWrap.classList.remove('fixed-wrap');
    }
});

function tabsBlock() {
    document.querySelectorAll('.tab_product').forEach(function(tab) {
        const tabTitle = tab.querySelectorAll('.tabs-title li');
        const tabBlocks = tab.querySelectorAll('.tabs-block .tabs-b');
        const tabActive = 'active';
        
        tabTitle.forEach(function(title) {
            title.addEventListener('click', onTabClick);
        });

        function onTabClick(event) {
            const target = event.target.closest('li');
            const index = Array.prototype.indexOf.call(tabTitle, target);

            tabTitle.forEach(function(title) {
                title.classList.remove(tabActive);
            });
            target.classList.add(tabActive);

            tabBlocks.forEach(function(block) {
                block.classList.remove(tabActive);
            });
            tabBlocks[index].classList.add(tabActive);
        }
    });
}

tabsBlock();

const tabTitle = document.querySelectorAll('.cart_inner .tabs-title li');
const tabBlocks = document.querySelectorAll('.cart_inner .tabs-block .tabs-b');
const tabActive = 'active';

tabTitle.forEach(function(title) {
	title.addEventListener('click', function() {
		console.log(123)
		const target = this;
		const index = Array.prototype.indexOf.call(tabTitle, target);

		tabTitle.forEach(function(title) {
			title.classList.remove(tabActive);
		});
		target.classList.add(tabActive);

		tabBlocks.forEach(function(block) {
			block.classList.remove(tabActive);
		});
		tabBlocks[index].classList.add(tabActive);
	});
});

const accorBlock = document.querySelectorAll('.accor_title');

accorBlock.forEach(function(elem) {
    elem.addEventListener('click', function() {
        this.parentNode.classList.toggle('opened');
    });
});

document.querySelector('.cart_btn').addEventListener('click', function(e){
	const firstCart = document.querySelector('.first_cart');
	const clickEvent = new MouseEvent('click', {
	view: window,
	bubbles: true,
	cancelable: true
	});
	firstCart.dispatchEvent(clickEvent);
});

const orderBtn = document.querySelectorAll('.order_cart_tab');

orderBtn.forEach(function(elem) {
	elem.addEventListener('click', function(e){
		const firstCart = document.querySelector('.last_cart');
		const clickEvent = new MouseEvent('click', {
		view: window,
		bubbles: true,
		cancelable: true
		});
		firstCart.dispatchEvent(clickEvent);
	});
})

window.addEventListener('popstate', function(event) {
	if (document.querySelector('.fancybox-is-open') || document.querySelector('.block_popop_modal.opened')) {
		const cloceBlock = document.querySelectorAll('.close_btn');
		const clickEvent = new MouseEvent('click', {
			view: window,
			bubbles: true,
			cancelable: true
		});
		cloceBlock.dispatchEvent(clickEvent);
	  	$.fancybox.close();
	  	event.preventDefault();
	}
  });

const countDownDate = new Date("Apr 3, 2023 00:00:00").getTime();
const timerBlock = document.querySelector('#timer');
if (timerBlock) {
	let x = setInterval(function() {
	    let now = new Date().getTime();
	    let distance = countDownDate - now;
	    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
	    hours = (hours < 10) ? "0" + hours : hours;
	    minutes = (minutes < 10) ? "0" + minutes : minutes;
	    seconds = (seconds < 10) ? "0" + seconds : seconds;
	    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
	    if (distance < 0) {
	        clearInterval(x);
	        document.getElementById("timer").innerHTML = "EXPIRED";
	    }
	}, 1000);
}

const tmenu = document.querySelector('.timer_wrap');

if (tmenu){
	const tmenuOffset = tmenu.offsetTop;

	window.addEventListener('scroll', function() {
	  if (window.pageYOffset > tmenuOffset + 220) {
	    tmenu.classList.add('fixed');
	  } else {
	    tmenu.classList.remove('fixed');
	  }
	});
}
