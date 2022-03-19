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
		addTodo(value: String!, isComplete: Boolean!): Todo
		addDBTodo(value: String!, isComplete: Boolean!): DBTodo
		removeTodo(id: Int!): String!
		completeTodo(id: Int!, value: String!, isComplete: Boolean!): String!
	}
	input AddTodoInput {
		id: Int!
		value: String!
		isComplete: Boolean!
	}
	type Subscription {
		newTodo: Todo
	}
`
export default typeDefs
