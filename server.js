import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './database'
import typeDefs from './graphql/schema'
import resolvers from './graphql/resolvers'

db.connect()
const pubsub = new PubSub()

const server = new GraphQLServer({
	typeDefs,
	resolvers,
	playground: true,
	context: { pubsub },
})

server.start(() => console.log(`🚀 Server is On!`))
