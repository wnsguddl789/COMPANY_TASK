import todoResolvers from './Todo'

const resolvers = {
	...todoResolvers,
	Query: {
		...todoResolvers.Query,
	},
	Mutation: {
		...todoResolvers.Mutation,
	},
	Subscription: {
		...todoResolvers.Subscription,
	},
}

export default resolvers
