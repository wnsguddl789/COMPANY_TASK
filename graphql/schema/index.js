import { gql } from 'apollo-server'

const typeDefs = gql`
	type Todo {
		value: String!
		isComplete: Boolean!
	}
	type DBTodo {
		id: String!
		value: String!
		isComplete: Boolean!
	}
	type Query {
		getTodoList: [Todo]!
		getDBTodoList: [DBTodo]!
	}
	type Mutation {
		addTodo(addTodoInput: AddTodoInput): Todo
		addDBTodo(value: String!, isComplete: Boolean!): DBTodo
		removeDBTodo(id: String!): DBTodo
		completeDBTodo(id: String!): DBTodo
	}
	input AddTodoInput {
		value: String!
		isComplete: Boolean!
	}
	type Subscription {
		newTodo: Todo
	}
`
export default typeDefs
