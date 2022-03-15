import { useState, useEffect } from 'react'
import { TodoContainer, TodoHeader, TodoBody, TodoList, TodoListItem } from '../utils/styles'
import Layout from '../component/Layout'
import { toJS } from 'mobx'

export default function Complete({ store }) {
	const [todoList, setTodoList] = useState([])
	useEffect(() => {
		if (todoList.length === 0) {
			setTodoList(toJS(store.todoList.completeTodo))
		}
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
