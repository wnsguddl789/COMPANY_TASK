import '../public/css/reset.css'

import { configure } from 'mobx'
import { Provider, observer, useStaticRendering } from 'mobx-react'

const isServer = typeof window === 'undefined'

configure({ enforceActions: 'observed' })
useStaticRendering(isServer)

const NextApp = ({ Component, pageProps, store }) => {
	// const store = useStore(pageProps)
	return (
		<Provider>
			<Component {...pageProps} />
		</Provider>
	)
}

export default observer(NextApp)
