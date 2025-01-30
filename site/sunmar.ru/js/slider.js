import Swiper from 'swiper'
import tabs from 'tabs'
import '../../../node_modules/swiper/swiper-bundle.css'
import { hostReactAppReady, mediaMatcher } from '../../common/js/utils'

hostReactAppReady().then(() => {
	const container = document.querySelector('.tab-container')
	tabs(container)

	const sliders = document.querySelectorAll('[data-slider]')
	sliders.forEach(slider => {
		const swiperLength = slider.querySelectorAll('.slides-length')
		const activeSlide = slider.querySelectorAll('.active-slide')

		let swiper = new Swiper(slider, {
			spaceBetween: 20,
			on: {
				init: function (swiper) {
					updateSlideCount(swiper, swiperLength, activeSlide)
					attachSlideNavigation(swiper) // Привязываем кнопки к слайдам
				},
				slideChange: function (swiper) {
					updateSlideCount(swiper, swiperLength, activeSlide)
					attachSlideNavigation(swiper) // Обновляем кнопки для нового активного слайда
				},
			},
		})

		function attachSlideNavigation(swiper) {
			// Удаляем старые обработчики (чтобы не дублировались)
			slider
				.querySelectorAll('.custom-prev-button, .custom-next-button')
				.forEach(button => {
					button.replaceWith(button.cloneNode(true))
				})

			// Получаем текущий активный слайд
			const activeSlide = swiper.slides[swiper.activeIndex]

			if (activeSlide) {
				const prevButton = activeSlide.querySelector('.custom-prev-button')
				const nextButton = activeSlide.querySelector('.custom-next-button')

				if (prevButton) {
					prevButton.addEventListener('click', () => swiper.slidePrev())
				}
				if (nextButton) {
					nextButton.addEventListener('click', () => swiper.slideNext())
				}
			}
		}
	})

	// Функция обновления количества слайдов
	function updateSlideCount(swiper, swiperLength, activeSlide) {
		swiperLength.forEach(item => (item.innerText = swiper.slides.length))
		activeSlide.forEach(item => (item.innerText = swiper.realIndex + 1))
	}

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
