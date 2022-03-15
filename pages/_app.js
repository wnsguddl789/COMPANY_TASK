import '../public/css/reset.css'
import { Provider, observer } from 'mobx-react'
import Todo from '../stores/todo'

const todoStore = new Todo()

const NextApp = ({ Component, pageProps }) => {
	return (
		<Provider store={todoStore}>
			<Component store={todoStore} {...pageProps} />
		</Provider>
	)
}

export default observer(NextApp)
