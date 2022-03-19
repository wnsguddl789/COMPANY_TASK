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
		addTodo: (_, { id, value, isComplete }) => {
			const newTodo = {
				id,
				value,
				isComplete,
			}
			todoList.push(newTodo)
			return newTodo
		},
		addDBTodo: async (_, { value, isComplete }) => {
			const session = await startSession()
			try {
				const newTodo = new Todo({
					value,
					isComplete,
				})
				session.startTransaction()
				newTodo.save(function (err) {
					if (!err) console.log('success')
					else console.log(err)
				})
				await session.commitTransaction()
				// Todo.console.log(newTodo)
			} catch (error) {
				// console.log(error)
				throw error
			} finally {
				await session.endSession()
			}

			// Todo.push(newTodo)
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
// resolvers.Mutation.addDBTodo('ddd', true)
export default resolvers
