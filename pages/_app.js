import '../public/css/reset.css'
import App from 'next/app'
import { Provider } from 'mobx-react'
import RootStore from '../src/models/RootStore'

const rootStore = new RootStore()

export default class NextApp extends App {
	constructor(props) {
		super(props)
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Provider {...rootStore.getStores()}>
				<Component {...pageProps} />
			</Provider>
		)
	}
}
