class TodoViewModel {
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
	completeTodoAction(id) {
		return this.store.completeTodoAction(id)
	}
	removeTodoAction(id) {
		return this.store.removeTodoAction(id)
	}
}
export default TodoViewModel
