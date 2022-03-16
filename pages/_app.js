import '../public/css/reset.css'
import App from 'next/app'
import { Provider } from 'mobx-react'
import todo from '../stores/todo'
export default class NextApp extends App {
	constructor(props) {
		super(props)
	}

	render() {
		const { Component, pageProps } = this.props
		return (
			<Provider store={todo}>
				<Component {...pageProps} />
			</Provider>
		)
	}
}
