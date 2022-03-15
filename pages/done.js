import { useState, useEffect } from 'react'
import { TodoContainer, TodoHeader, TodoBody, TodoList, TodoListItem } from '../utils/styles'
import Layout from '../component/Layout'
import { toJS } from 'mobx'
import todoStore from '../stores/todo'

export default function Complete() {
	const [todoList, setTodoList] = useState([])
	useEffect(() => {
		if (todoList.length === 0) {
			setTodoList(toJS(todoStore.todoList.completeTodo))
		}
		// console.log(toJS(todoList)[0])
	}, [])
	return (
		<Layout title="TODO">
			<TodoContainer>
				<TodoHeader>
					<p>COMPLETE TODO LIST</p>
				</TodoHeader>
				<TodoBody>
					<TodoList>
						{todoList.map((item, idx) => {
							return (
								<TodoListItem isComplete={true} key={idx}>
									<span>{item.value}</span>
								</TodoListItem>
							)
						})}
					</TodoList>
				</TodoBody>
			</TodoContainer>
		</Layout>
	)
}
