import mongoose from 'mongoose'
import { DB_USER, DB_PASSWORD, DB_NAME } from './config'
const connection = {}

const MONGODB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apollo.dlfla.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

async function connect() {
	if (connection.isConnected) {
		console.log('already connected')
		return
	}
	if (mongoose.connections.length > 0) {
		connection.isConnected = mongoose.connections[0].readyState
		if (connection.isConnected === 1) {
			console.log('use previous connection')
			return
		}
		await mongoose.disconnect()
	}
	const db = await mongoose.connect(MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useCreateIndex: true,
	})
	console.log('new connection')
	connection.isConnected = db.connections[0].readyState
}

async function disconnect() {
	if (connection.isConnected) {
		if (process.env.NODE_ENV === 'production') {
			await mongoose.disconnect()
			connection.isConnected = false
		} else {
			console.log('not disconnected')
		}
	}
}

function converDocToObj(doc) {
	doc._id = doc._id.toString()
	doc.createdAt = doc.createdAt.toString()
	doc.updatedAt = doc.updatedAt.toString()
	return doc
}

const db = { connect, disconnect, converDocToObj }
export default db
