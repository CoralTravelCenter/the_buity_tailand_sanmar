import Accordion from 'accordion-js'
import 'accordion-js/dist/accordion.min.css'
import { hostReactAppReady } from '../../common/js/utils'

hostReactAppReady().then(() => {
	const accContainers = [...document.querySelectorAll('.accordion-container')]
	new Accordion(accContainers, {
		duration: 300,
	})
})
