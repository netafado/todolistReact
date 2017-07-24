const express = require('express');
const todoService = require('../api/todo/service');

module.exports = function(server){

	const router = express.Router();
	server.use('/api', router);


	todoService.register(router, '/todos');
}