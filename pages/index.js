import {
	GlobalLayout,
	TodoContainer,
	TodoHeader,
	TodoInput,
	TodoBody,
	TodoList,
	TodoListItem,
	TodoRemoveButton,
} from '../utils/styles'

const DUMP_TODO_DATA = [
	{
		id: 0,
		content: 'mobx 사용해보기',
	},
	{
		id: 1,
		content: 'appolo 사용해보기',
	},
	{
		id: 2,
		content: 'mvvm 사용해보기',
	},
	{
		id: 3,
		content: 'grapql 사용해보기',
	},
]

export default function App() {
	return (
		<GlobalLayout>
			<TodoContainer>
				<TodoHeader>
					<p>TODO LIST</p>
					<TodoInput placeholder="input your todo.." />
				</TodoHeader>
				<TodoBody>
					<TodoList>
						{DUMP_TODO_DATA &&
							DUMP_TODO_DATA.map((item) => {
								return (
									<TodoListItem>
										<span key={item.id}>{item.content}</span>
										<TodoRemoveButton>X</TodoRemoveButton>
									</TodoListItem>
								)
							})}
					</TodoList>
				</TodoBody>
			</TodoContainer>
		</GlobalLayout>
	)
}
