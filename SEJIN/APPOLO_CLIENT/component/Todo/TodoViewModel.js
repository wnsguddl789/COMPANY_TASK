export default class TodoViewModel {
	constructor(todoStore) {
		this.store = todoStore
	}

	getNotCompleteTodoList = () => {
		return this.store.getNotCompleteTodoList()
	}

	getCompleteTodoList = () => {
		return this.store.getCompleteTodoList()
	}

	addTodoAction(id, value) {
		return this.store.addTodoAction(id, value)
	}
	completeTodoAction(id, value) {
		return this.store.completeTodoAction(id, value)
	}
	removeTodoAction(id) {
		return this.store.removeTodoAction(id)
	}
}
