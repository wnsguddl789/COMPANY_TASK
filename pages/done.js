import * as React from 'react'
import { observer, inject } from 'mobx-react'

import { TodoContainer, TodoHeader, TodoBody, TodoList, TodoListItem } from '../utils/styles'
import Layout from '../component/Layout'
import TodoStore from '../stores/todo'

@inject('store')
@observer
export default class Complete extends React.Component {
	static contextType = TodoStore
	constructor(props) {
		super(props)
	}
	render() {
		const {
			todoList: { completeTodo },
		} = this.context
		return (
			<Layout title="COMPLETE-TODO">
				<TodoContainer>
					<TodoHeader>
						<p>COMPLETE TODO LIST</p>
					</TodoHeader>
					<TodoBody>
						<TodoList>
							{completeTodo.map((item, idx) => {
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
}
