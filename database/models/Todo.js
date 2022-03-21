import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
	value: {
		type: String,
		required: true,
	},
	isComplete: {
		type: Boolean,
		required: true,
	},
});

const Todo = mongoose.models.Todo || mongoose.model('Todo', todoSchema);

export default Todo;
