import { observable, action } from 'mobx'

export default class TodoModel {
	@observable notCompleteTodo = []
	@observable completeTodo = []

	getNotCompleteTodoList = () => {
		return this.notCompleteTodo
	}

	getCompleteTodoList = () => {
		return this.completeTodo
	}

	@action addTodoAction = (id, value) => {
		this.notCompleteTodo.push({ id, value })
	}
	@action removeTodoAction = (id) => {
		const result = this.notCompleteTodo.filter((value) => value.id !== id)

		this.notCompleteTodo = result
	}
	@action completeTodoAction = (id, value) => {
		this.completeTodo.push({ id, value })
		this.removeTodoAction(id)
	}
}
