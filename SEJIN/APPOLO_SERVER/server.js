// import { ApolloServer, PubSub } from 'apollo-server'
import db from './database';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

import { createServer } from 'http';
import { makeExecutableSchema } from '@graphql-tools/schema';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
db.connect();
(async function () {
	// Create the schema, which will be used separately by ApolloServer and
	// the WebSocket server.
	const schema = makeExecutableSchema({ typeDefs, resolvers });

	// Create an Express app and HTTP server; we will attach both the WebSocket
	// server and the ApolloServer to this HTTP server.
	const app = express();
	const httpServer = createServer(app);

	// Create our WebSocket server using the HTTP server we just set up.
	const wsServer = new WebSocketServer({
		server: httpServer,
		path: '/graphql',
	});

	// Save the returned server's info so we can shutdown this server later
	const serverCleanup = useServer({ schema }, wsServer);
	// Set up ApolloServer.
	const server = new ApolloServer({
		schema,
		plugins: [
			// Proper shutdown for the HTTP server.
			ApolloServerPluginDrainHttpServer({ httpServer }),

			// Proper shutdown for the WebSocket server.
			{
				async serverWillStart() {
					return {
						async drainServer() {
							await serverCleanup.dispose();
						},
					};
				},
			},
		],
	});

	await server.start();
	server.applyMiddleware({ app });

	const PORT = 8000;
	// Now that our HTTP server is fully set up, we can listen to it.
	httpServer.listen(PORT, () => {
		console.log(`Server is now running on http://localhost:${PORT}${server.graphqlPath}`);
	});
})();
