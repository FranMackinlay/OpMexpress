'use strict';

require('dotenv').config();

const mongoose = require('mongoose');

const conn = mongoose.connection;

conn.on('open', () => {
	console.log('Conected to MongoDB in', conn.name);
});

conn.on('error', err => {
	console.error('Connection error: ', err);
	process.exit(1);
});

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = conn;
