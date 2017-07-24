const restfull = require('node-restful');
const mongoose = restfull.mongoose;

const todoSchema = mongoose.Schema({
	description:{type: String, required: true},
	done: {type: Boolean, required: true, default: false},
	createAt: {type: Date, default: Date.now}
});

module.exports = restfull.model('Todo', todoSchema)