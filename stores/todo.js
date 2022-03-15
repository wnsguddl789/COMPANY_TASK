import { makeAutoObservable, observable, configure } from 'mobx'
import { enableStaticRendering } from 'mobx-react'
const isServer = typeof window === 'undefined'

configure({ enforceActions: 'observed' })
enableStaticRendering(isServer)
export default class Todo {
	@observable todoList = {
		notCompleteTodo: [],
		completeTodo: [],
	}

	constructor(isServer, initialData = {}) {
		makeAutoObservable(this)
		if (initialData.stores) {
			this.stores = { ...initialData.stores }
		} else {
			this.stores = {}
		}
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
