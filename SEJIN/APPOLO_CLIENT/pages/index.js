import * as React from 'react'

import TodoConsumer from '../component/Todo/TodoConsumer'

export default class Index extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <TodoConsumer />
	}
}
