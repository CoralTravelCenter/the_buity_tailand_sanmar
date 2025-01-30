import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import { hostReactAppReady } from '../../common/js/utils'
hostReactAppReady().then(() => {
	const triggers = document.querySelectorAll('.tippy-trigger')
	triggers.forEach(trigger => {
		tippy(trigger, {
			theme: 'light',
			content:
				'Цена указана в условных единицах и может варьироваться в зависимости от текущего курса валюты',
		})
	})
})
