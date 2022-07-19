import * as React from 'react'
import { withRouter } from 'next/router'
import TodoView from './TodoView'

class TodoController extends React.Component {
	constructor(props) {
		super(props)
		this.state = { index: 0 }
	}

	addTodoListHandler = (e) => {
		const value = e.target.value
		if (e.keyCode === 13) {
			if (!value) return
			else {
				this.props.viewModel.addTodoAction(this.state.index, value)
				this.setState({ index: this.state.index + 1 })
				e.target.value = ''
			}
		}
	}
	completeTodoListHandler = (idx, value) => {
		this.props.viewModel.completeTodoAction(idx, value)
	}

	removeTodoListHandler = (idx) => {
		this.props.viewModel.removeTodoAction(idx)
	}

	render() {
		const notCompleteTodo = this.props.viewModel.getNotCompleteTodoList()
		const completeTodo = this.props.viewModel.getCompleteTodoList()

		return (
			<TodoView
				isComplete={this.props.router.route === '/complete'}
				notCompleteTodo={notCompleteTodo}
				completeTodo={completeTodo}
				addTodoListHandler={this.addTodoListHandler}
				completeTodoListHandler={this.completeTodoListHandler}
				removeTodoListHandler={this.removeTodoListHandler}
			/>
		)
	}
}

export default withRouter(TodoController)
