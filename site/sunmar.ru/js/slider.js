import Swiper from 'swiper'
import tabs from 'tabs'
import '../../../node_modules/swiper/swiper-bundle.css'
import { hostReactAppReady, mediaMatcher } from '../../common/js/utils'

hostReactAppReady().then(() => {
	const container = document.querySelector('.tab-container')
	tabs(container)

	const sliders = document.querySelectorAll('[data-slider]');
	sliders.forEach(slider => {
	    const activeSlideElements = slider.querySelectorAll('.active-slide');

	    let swiper = new Swiper(slider, {
	        spaceBetween: 20,
	        observer: true,
					loop: true,
	        observeParents: true,
	        on: {
	            init: function (swiper) {
	                updateSlideIndex(swiper);
	                setTimeout(() => attachSlideNavigation(swiper), 100);
	            },
	            slideChange: function (swiper) {
	                updateSlideIndex(swiper);
	                attachSlideNavigation(swiper);
	            },
	        },
	    });

	    function attachSlideNavigation(swiper) {
	        slider.querySelectorAll('.custom-prev-button, .custom-next-button').forEach(button => {
	            button.replaceWith(button.cloneNode(true));
	        });

	        const activeSlide = swiper.slides[swiper.activeIndex];

	        if (!activeSlide) {
	            setTimeout(() => attachSlideNavigation(swiper), 100);
	            return;
	        }

	        const prevButton = activeSlide.querySelector('.custom-prev-button');
	        const nextButton = activeSlide.querySelector('.custom-next-button');

	        if (prevButton) {
	            prevButton.addEventListener('click', () => swiper.slidePrev());
	        }
	        if (nextButton) {
	            nextButton.addEventListener('click', () => swiper.slideNext());
	        }
	    }

	    function updateSlideIndex(swiper) {
	        activeSlideElements.forEach(el => {
	            el.innerText = swiper.realIndex + 1; // Обновляем только активный индекс
	        });
	    }
	});

	const slides = document.querySelectorAll('.swiper-slide')
	slides.forEach(slide => {
		const topBlock = slide.querySelector('.top-block')
		const customNavWrapper = slide.querySelector('.custom-nav-wrapper')
		mediaMatcher(768, isMobile => {
			if (isMobile) {
				topBlock.insertAdjacentElement('afterend', customNavWrapper)
			}
		})
	})
})
