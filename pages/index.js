import * as React from 'react'

import TodoProvider from '../component/Todo/TodoProvider'

export default class Index extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <TodoProvider />
	}
}
