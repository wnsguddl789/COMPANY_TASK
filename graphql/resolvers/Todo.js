import { startSession } from 'mongoose'
import Todo from '../../database/models/Todo'
let todoList = []
const resolvers = {
	Query: {
		getTodoList: () => {
			return todoList
		},
		getDBTodoList: async () => {
			const dbTodo = await Todo.find({})
			return dbTodo
		},
	},
	Mutation: {
		// async addTodo(_, { id, value, isComplete }) {
		// 	const session = await startSession()
		// 	try {
		// 		session.startTransaction()
		// 		const todo = new Todo({
		// 			id,
		// 			value,
		// 			isComplete,
		// 		})
		// 		const result = await todo.save({ session })
		// 		await session.commitTransaction()
		// 		return result
		// 	} catch (error) {
		// 		await session.abortTransaction()
		// 		console.log(error)
		// 		throw error
		// 	} finally {
		// 		await session.endSession()
		// 	}

		// },
		addTodo: (_, { id, value, isComplete }) => {
			const newTodo = {
				id,
				value,
				isComplete,
			}
			todoList.push(newTodo)
			return newTodo
		},
		addDBTodo: async (_, { id, value, isComplete }) => {
			const newTodo = {
				id,
				value,
				isComplete,
			}
			Todo.push(newTodo)
		},
		removeTodo: (_, {}) => {},
		completeTodo: (_, {}) => {},
	},
	Subscription: {
		newTodo: {
			subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_TODO),
		},
	},
}

export default resolvers
