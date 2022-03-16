import * as React from 'react'
import {
	TodoContainer,
	TodoHeader,
	TodoInput,
	TodoBody,
	TodoList,
	TodoListItem,
	TodoRemoveButton,
	TodoCompleteButton,
} from '../utils/styles'
import { observer, inject } from 'mobx-react'

import Layout from '../component/Layout'
import TodoStore from '../stores/todo'

@inject('store')
@observer
export default class Index extends React.Component {
	static contextType = TodoStore
	constructor(props) {
		super(props)
		this.state = { index: 0 }
	}

	addTodoListHandler = (e) => {
		const { addTodoAction } = this.context
		const value = e.target.value
		if (e.keyCode === 13) {
			if (!value) return
			else {
				addTodoAction(this.state.index, value)
				this.setState({ index: this.state.index + 1 })
				e.target.value = ''
			}
		}
	}
	completeTodoListHandler = (idx, value) => {
		this.context.completeTodoAction(idx, value)
	}

	romoveTodoListHandler = (idx) => {
		this.context.removeTodoAction(idx)
	}

	render() {
		const {
			todoList: { notCompleteTodo },
		} = this.context
		return (
			<Layout title="UNCOMPLETE-TODO">
				<TodoContainer>
					<TodoHeader>
						<p>NOT COMPLETE TODO LIST</p>
						<TodoInput
							placeholder="input your todo.."
							onKeyUp={(e) => this.addTodoListHandler(e)}
						/>
					</TodoHeader>
					<TodoBody>
						<TodoList>
							{notCompleteTodo.map((item, idx) => {
								return (
									<TodoListItem isComplete={false} key={idx}>
										<span>{item.value}</span>
										<div>
											<TodoCompleteButton
												onClick={() =>
													this.completeTodoListHandler(
														item.id,
														item.value,
													)
												}>
												V
											</TodoCompleteButton>
											<TodoRemoveButton
												onClick={() => this.romoveTodoListHandler(item.id)}>
												X
											</TodoRemoveButton>
										</div>
									</TodoListItem>
								)
							})}
						</TodoList>
					</TodoBody>
				</TodoContainer>
			</Layout>
		)
	}
}
