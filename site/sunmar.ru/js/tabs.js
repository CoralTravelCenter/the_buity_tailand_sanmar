import tabs from 'tabs'
import { hostReactAppReady } from '../../common/js/utils'

hostReactAppReady().then(() => {
	const container = document.querySelector('.tab-container')
	tabs(container)
})
