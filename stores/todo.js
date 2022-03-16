import { makeAutoObservable, action, observable, configure } from 'mobx'
import { enableStaticRendering } from 'mobx-react'
import { createContext } from 'react/cjs/react.production.min'
const isServer = typeof window === 'undefined'

configure({ enforceActions: 'observed' })
enableStaticRendering(isServer)
class TodoStore {
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

	@action addTodoAction = (id, value) => {
		this.todoList.notCompleteTodo.push({ ...this.todoList.notCompleteTodo, id, value })
	}
	@action removeTodoAction = (id) => {
		this.todoList.notCompleteTodo = this.todoList.notCompleteTodo.filter(
			(value) => value.id !== id,
		)
	}
	@action completeTodoAction = (id, value) => {
		this.todoList.completeTodo.push({ ...this.todoList.completeTodo, id, value })
		this.removeTodoAction(id)
	}
}

export default createContext(new TodoStore())
