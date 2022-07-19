import React from 'react'
import { inject } from 'mobx-react'
import TodoController from './TodoController'
import TodoViewModel from './TodoViewModel'
import RootStore from '../../store/RootStore'

@inject(RootStore.type.TODO_MODEL)
export default class TodoConsumer extends React.Component {
	constructor(props) {
		super(props)
		const todoModel = props[RootStore.type.TODO_MODEL]
		this.viewModel = new TodoViewModel(todoModel)
	}

	render() {
		return <TodoController viewModel={this.viewModel} />
	}
}
