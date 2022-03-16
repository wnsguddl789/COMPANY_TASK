import TodoModel from './domain/TodoModel'

export default class RootStore {
	static type = {
		TODO_MODEL: 'todoModel',
	}
	constructor() {
		this.todoModel = new TodoModel(RootStore.type.TODO_MODEL)
	}
	getStores = () => ({
		[RootStore.type.TODO_MODEL]: this.todoModel,
	})
}
