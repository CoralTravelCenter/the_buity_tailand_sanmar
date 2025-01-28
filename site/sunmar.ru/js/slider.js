import Swiper from 'swiper'
import 'swiper/css'
import { hostReactAppReady } from '../../common/js/utils'

hostReactAppReady().then(() => {
	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'vertical',
		loop: true,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
})
