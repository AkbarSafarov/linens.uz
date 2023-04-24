!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).LazyLoad=t()}(this,(function(){"use strict";function n(){return n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},n.apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},c=function(t){return n({},r,t)},l=function(n,t){var e,i="LazyLoad::Initialized",o=new n(t);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},u="src",s="srcset",d="sizes",f="poster",_="llOriginalAttrs",g="data",v="loading",b="loaded",m="applied",p="error",h="native",E="data-",I="ll-status",y=function(n,t){return n.getAttribute(E+t)},k=function(n){return y(n,I)},w=function(n,t){return function(n,t,e){var i="data-ll-status";null!==e?n.setAttribute(i,e):n.removeAttribute(i)}(n,0,t)},A=function(n){return w(n,null)},L=function(n){return null===k(n)},O=function(n){return k(n)===h},x=[v,b,m,p],C=function(n,t,e,i){n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i))},N=function(n,t){o?n.classList.add(t):n.className+=(n.className?" ":"")+t},M=function(n,t){o?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},z=function(n){return n.llTempImage},T=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},R=function(n,t){n&&(n.loadingCount+=t)},G=function(n,t){n&&(n.toLoadCount=t)},j=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},D=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&j(e).forEach(t)},H=function(n,t){j(n).forEach(t)},V=[u],F=[u,f],B=[u,s,d],J=[g],P=function(n){return!!n[_]},S=function(n){return n[_]},U=function(n){return delete n[_]},$=function(n,t){if(!P(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t)})),n[_]=e}},q=function(n,t){if(P(n)){var e=S(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t)}(n,t,e[t])}))}},K=function(n,t,e){N(n,t.class_applied),w(n,m),e&&(t.unobserve_completed&&T(n,t),C(t.callback_applied,n,e))},Q=function(n,t,e){N(n,t.class_loading),w(n,v),e&&(R(e,1),C(t.callback_loading,n,e))},W=function(n,t,e){e&&n.setAttribute(t,e)},X=function(n,t){W(n,d,y(n,t.data_sizes)),W(n,s,y(n,t.data_srcset)),W(n,u,y(n,t.data_src))},Y={IMG:function(n,t){D(n,(function(n){$(n,B),X(n,t)})),$(n,B),X(n,t)},IFRAME:function(n,t){$(n,V),W(n,u,y(n,t.data_src))},VIDEO:function(n,t){H(n,(function(n){$(n,V),W(n,u,y(n,t.data_src))})),$(n,F),W(n,f,y(n,t.data_poster)),W(n,u,y(n,t.data_src)),n.load()},OBJECT:function(n,t){$(n,J),W(n,g,y(n,t.data_src))}},Z=["IMG","IFRAME","VIDEO","OBJECT"],nn=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||C(n.callback_finish,t)},tn=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},en=function(n,t,e){n.removeEventListener(t,e)},on=function(n){return!!n.llEvLisnrs},an=function(n){if(on(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];en(n,e,i)}delete n.llEvLisnrs}},rn=function(n,t,e){!function(n){delete n.llTempImage}(n),R(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),M(n,t.class_loading),t.unobserve_completed&&T(n,e)},cn=function(n,t,e){var i=z(n)||n;on(i)||function(n,t,e){on(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";tn(n,i,t),tn(n,"error",e)}(i,(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_loaded),w(t,b),C(e.callback_loaded,t,i),o||nn(e,i)}(0,n,t,e),an(i)}),(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_error),w(t,p),C(e.callback_error,t,i),e.restore_on_error&&q(t,B),o||nn(e,i)}(0,n,t,e),an(i)}))},ln=function(n,t,e){!function(n){return Z.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),cn(n,t,e),function(n){P(n)||(n[_]={backgroundImage:n.style.backgroundImage})}(n),function(n,t,e){var i=y(n,t.data_bg),o=y(n,t.data_bg_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),z(n).setAttribute(u,r),Q(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_multi),o=y(n,t.data_bg_multi_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage=r,K(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_set);if(i){var o=i.split("|"),a=o.map((function(n){return"image-set(".concat(n,")")}));n.style.backgroundImage=a.join(),""===n.style.backgroundImage&&(a=o.map((function(n){return"-webkit-image-set(".concat(n,")")})),n.style.backgroundImage=a.join()),K(n,t,e)}}(n,t,e)}(n,t,e):function(n,t,e){cn(n,t,e),function(n,t,e){var i=Y[n.tagName];i&&(i(n,t),Q(n,t,e))}(n,t,e)}(n,t,e)},un=function(n){n.removeAttribute(u),n.removeAttribute(s),n.removeAttribute(d)},sn=function(n){D(n,(function(n){q(n,B)})),q(n,B)},dn={IMG:sn,IFRAME:function(n){q(n,V)},VIDEO:function(n){H(n,(function(n){q(n,V)})),q(n,F),n.load()},OBJECT:function(n){q(n,J)}},fn=function(n,t){(function(n){var t=dn[n.tagName];t?t(n):function(n){if(P(n)){var t=S(n);n.style.backgroundImage=t.backgroundImage}}(n)})(n),function(n,t){L(n)||O(n)||(M(n,t.class_entered),M(n,t.class_exited),M(n,t.class_applied),M(n,t.class_loading),M(n,t.class_loaded),M(n,t.class_error))}(n,t),A(n),U(n)},_n=["IMG","IFRAME","VIDEO"],gn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},vn=function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){var o=function(n){return x.indexOf(k(n))>=0}(n);w(n,"entered"),N(n,e.class_entered),M(n,e.class_exited),function(n,t,e){t.unobserve_entered&&T(n,e)}(n,e,i),C(e.callback_enter,n,t,i),o||ln(n,e,i)}(n.target,n,t,e):function(n,t,e,i){L(n)||(N(n,e.class_exited),function(n,t,e,i){e.cancel_on_exit&&function(n){return k(n)===v}(n)&&"IMG"===n.tagName&&(an(n),function(n){D(n,(function(n){un(n)})),un(n)}(n),sn(n),M(n,e.class_loading),R(i,-1),A(n),C(e.callback_cancel,n,t,i))}(n,t,e,i),C(e.callback_exit,n,t,i))}(n.target,n,t,e)}))},bn=function(n){return Array.prototype.slice.call(n)},mn=function(n){return n.container.querySelectorAll(n.elements_selector)},pn=function(n){return function(n){return k(n)===p}(n)},hn=function(n,t){return function(n){return bn(n).filter(L)}(n||mn(t))},En=function(n,e){var o=c(n);this._settings=o,this.loadingCount=0,function(n,t){i&&!gn(n)&&(t._observer=new IntersectionObserver((function(e){vn(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(o,this),function(n,e){t&&(e._onlineHandler=function(){!function(n,t){var e;(e=mn(n),bn(e).filter(pn)).forEach((function(t){M(t,n.class_error),A(t)})),t.update()}(n,e)},window.addEventListener("online",e._onlineHandler))}(o,this),this.update(e)};return En.prototype={update:function(n){var t,o,a=this._settings,r=hn(n,a);G(this,r.length),!e&&i?gn(a)?function(n,t,e){n.forEach((function(n){-1!==_n.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),cn(n,t,e),function(n,t){var e=Y[n.tagName];e&&e(n,t)}(n,t),w(n,h)}(n,t,e)})),G(e,0)}(r,a,this):(o=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,o)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),t&&window.removeEventListener("online",this._onlineHandler),mn(this._settings).forEach((function(n){U(n)})),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;hn(n,e).forEach((function(n){T(n,t),ln(n,e,t)}))},restoreAll:function(){var n=this._settings;mn(n).forEach((function(t){fn(t,n)}))}},En.load=function(n,t){var e=c(t);ln(n,e)},En.resetStatus=function(n){A(n)},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)l(n,e);else l(n,t)}(En,window.lazyLoadOptions),En}));

const lazyLoad = new LazyLoad();

$(document).ready(function() {
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
		}
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

	document.querySelectorAll('.item_product').forEach(function(item) {
		if (item.querySelectorAll('.mySwiper_product_image').length) {
		    const dataId = '.' + item.querySelector('.swiper').dataset.id;
		    const paginationClass = item.querySelector('.swiper-pagination').getAttribute('class');
		    const productSwiper = new Swiper(dataId, {
		        pagination: {
		            el: `.${paginationClass}`,
		            clickable: false,
		        },
		        spaceBetween: 0,
		        loop: false,
		        loopedSlides: 1
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
	        }
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
			console.log(123)
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
