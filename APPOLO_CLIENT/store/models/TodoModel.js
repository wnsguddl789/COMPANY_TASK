import { observable, action, makeObservable } from 'mobx'
export default class TodoModel {
	notCompleteTodo = []
	completeTodo = []

	constructor() {
		makeObservable(this, {
			notCompleteTodo: observable,
			completeTodo: observable,
			addTodoAction: action,
			removeTodoAction: action,
			completeTodoAction: action,
		})
	}
	getNotCompleteTodoList = () => {
		return this.notCompleteTodo
	}

	getCompleteTodoList = () => {
		return this.completeTodo
	}

	addTodoAction = (id, value) => {
		this.notCompleteTodo.push({ id, value })
	}
	removeTodoAction = (id) => {
		const result = this.notCompleteTodo.filter((value) => value.id !== id)
		this.notCompleteTodo.replace(result)
	}
	completeTodoAction = (id, value) => {
		this.completeTodo.push({ id, value })
		this.removeTodoAction(id)
	}
}
