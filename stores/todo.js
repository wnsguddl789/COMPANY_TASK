import { makeAutoObservable, toJS } from 'mobx'

class Todo {
	todoList = {
		notCompleteTodo: [],
		completeTodo: [],
	}

	constructor() {
		makeAutoObservable(this)
	}

	addTodo = (id, value) => {
		this.todoList.notCompleteTodo.push({ id, value })
	}
	removeTodo = (id) => {
		this.todoList.notCompleteTodo = this.todoList.notCompleteTodo.filter(
			(value) => value.id !== id,
		)
	}
	completeTodo = (id, value) => {
		this.todoList.completeTodo.push({ id, value })
		this.removeTodo(id)
	}
}

const todoStore = new Todo()

export default todoStore
