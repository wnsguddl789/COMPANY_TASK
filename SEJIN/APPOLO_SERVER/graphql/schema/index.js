import { gql } from 'apollo-server';

const typeDefs = gql`
	type DBTodo {
		_id: String!
		value: String!
		isComplete: Boolean!
	}
	type Query {
		getDBTodoList: [DBTodo]!
		getNotComplete: [DBTodo]!
		getComplete: [DBTodo]!
		getTodoOne: [DBTodo]!
	}
	type Mutation {
		addDBTodo(value: String!, isComplete: Boolean!): DBTodo
		removeDBTodo(_id: String!): DBTodo
		completeDBTodo(_id: String!): DBTodo
	}
	input AddTodoInput {
		value: String!
		isComplete: Boolean!
	}
	type Subscription {
		todoAdded: String
	}
`;
export default typeDefs;
