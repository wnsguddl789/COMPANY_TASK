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
		addTodo: (_, { value, isComplete }) => {
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
			} catch (error) {
				throw error
			} finally {
				await session.endSession()
			}
		},
		removeDBTodo: async (_, { id }) => {
			const session = await startSession()
			try {
				session.startTransaction()
				await Todo.deleteOne({ id })
				await session.commitTransaction()
			} catch (error) {
				throw error
			} finally {
				await session.endSession()
			}
		},
		completeDBTodo: async (_, { id }) => {
			const session = await startSession()
			try {
				session.startTransaction()
				const res = await Todo.update({ _id: id }, { isComplete: true })
				// Todo.updateOne({ _id: id }, { $set: { isComplete: true } })
				await session.commitTransaction()
			} catch (error) {
				throw error
			} finally {
				await session.endSession()
			}
		},
	},
	Subscription: {
		newTodo: {
			subscribe: (_, __, { pubsub }) => pubsub.asyncIterator(NEW_TODO),
		},
	},
}
export default resolvers
