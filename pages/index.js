import { useState, useEffect } from 'react'
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
import Layout from '../component/Layout'
import { toJS } from 'mobx'

export default function App({ store }) {
	const [todoList, setTodoList] = useState([])
	const [index, setIndex] = useState(0)

	useEffect(() => {
		if (todoList.length === 0) {
			setTodoList(store.todoList.notCompleteTodo)
		}
		console.log(store)
	}, [])
	const addTodoListHandler = (e) => {
		const value = e.target.value
		if (e.keyCode === 13) {
			if (!value) return
			else {
				store.addTodo(index, value)
				setTodoList(toJS(store.todoList.notCompleteTodo))
				setIndex(index + 1)
				e.target.value = ''
			}
		}
	}

	const romoveTodoListHandler = (idx) => {
		store.removeTodo(idx)
		setTodoList(toJS(store.todoList.notCompleteTodo))
	}
	const completeTodoListHandler = (idx, value) => {
		store.completeTodo(idx, value)
		setTodoList(toJS(store.todoList.notCompleteTodo))
	}
	return (
		<Layout title="TODO">
			<TodoContainer>
				<TodoHeader>
					<p>NOT COMPLETE TODO LIST</p>
					<TodoInput
						placeholder="input your todo.."
						onKeyUp={(e) => addTodoListHandler(e)}
					/>
				</TodoHeader>
				<TodoBody>
					<TodoList>
						{todoList.map((item, idx) => {
							return (
								<TodoListItem isComplete={false} key={idx}>
									<span>{item.value}</span>
									<div>
										<TodoCompleteButton
											onClick={() =>
												completeTodoListHandler(item.id, item.value)
											}>
											V
										</TodoCompleteButton>
										<TodoRemoveButton
											onClick={() => romoveTodoListHandler(item.id)}>
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
