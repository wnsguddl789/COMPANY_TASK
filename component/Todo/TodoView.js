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
} from '../../utils/style/styles'
import Layout from '../Layout'

export default class TodoView extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {
			isComplete,
			notCompleteTodo,
			completeTodo,
			addTodoListHandler,
			completeTodoListHandler,
			romoveTodoListHandler,
		} = this.props

		console.log(isComplete)

		return (
			<Layout title={isComplete ? 'COMPLETE-TODO' : 'UNCOMPLETE-TODO'}>
				<TodoContainer>
					<TodoHeader>
						<p>{isComplete ? 'COMPLETE TODO LIST' : 'NOT COMPLETE TODO LIST'}</p>
						{isComplete ? null : (
							<TodoInput
								placeholder="input your todo.."
								onKeyUp={(e) => addTodoListHandler(e)}
							/>
						)}
					</TodoHeader>
					<TodoBody>
						<TodoList>
							{isComplete
								? completeTodo.map((item, idx) => {
										return (
											<TodoListItem {...isComplete} key={idx}>
												<span>{item.value}</span>
											</TodoListItem>
										)
								  })
								: notCompleteTodo.map((item, idx) => {
										return (
											<TodoListItem {...isComplete} key={idx}>
												<span>{item.value}</span>
												<div>
													<TodoCompleteButton
														onClick={() =>
															completeTodoListHandler(
																item.id,
																item.value,
															)
														}>
														V
													</TodoCompleteButton>
													<TodoRemoveButton
														onClick={() =>
															romoveTodoListHandler(item.id)
														}>
														X
													</TodoRemoveButton>
												</div>
											</TodoListItem>
										)
								  })}
							{}
						</TodoList>
					</TodoBody>
				</TodoContainer>
			</Layout>
		)
	}
}
