import { startSession } from 'mongoose';
import Todo from '../../database/models/Todo';
import { PubSub } from 'graphql-subscriptions';
const pubsub = new PubSub();
const resolvers = {
	Query: {
		getDBTodoList: async () => {
			try {
				const result = await Todo.find({});
				console.log('data serving success!');
				return result;
			} catch (error) {
				console.log('Task Failure', error);
			}
		},
		getNotComplete: async () => {
			try {
				const result = await Todo.find({ isComplete: false });
				return result;
			} catch (err) {
				throw err;
			}
		},
		getComplete: async () => {
			try {
				const result = await Todo.find({ isComplete: true });
				return result;
			} catch (err) {
				throw err;
			}
		},
		getTodoOne: async (id) => {
			try {
				const result = await Todo.findById({ id });
				return result;
			} catch (err) {
				throw err;
			}
		},
	},
	Mutation: {
		addDBTodo: async (_, { value, isComplete }) => {
			const session = await startSession();
			try {
				const newTodo = new Todo({
					value,
					isComplete,
				});
				session.startTransaction();
				newTodo.save(function (err) {
					if (!err) console.log('success');
					else console.log(err);
				});
				return newTodo;
			} catch (error) {
				console.log('Task Failure', error);
			} finally {
				await session.endSession();
			}
		},
		removeDBTodo: async (_, { id }) => {
			const session = await startSession();
			try {
				session.startTransaction();
				await Todo.deleteOne({ id });
				await session.commitTransaction();
			} catch (error) {
				console.log('Task Failure', error);
			} finally {
				await session.endSession();
			}
		},
		completeDBTodo: async (_, { _id }) => {
			const session = await startSession();
			try {
				console.log(_id);
				session.startTransaction();
				// const res = await Todo.update({ _id: id }, { isComplete: true })
				await Todo.updateMany({ _id }, { $set: { isComplete: true } });
				console.log('dd');
				await session.commitTransaction();
			} catch (error) {
				console.log('Task Failure', error);
			} finally {
				await session.endSession();
			}
		},
	},
	Subscription: {
		todoAdded: {
			subscribe: () => pubsub.asyncIterator('NEW_MESSAGE'),
		},
	},
};
export default resolvers;
