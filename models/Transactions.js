'use strict';

const mongoose = require('mongoose');

const transactionsSchema = mongoose.Schema({
	balance: Number,
	date: String,
	amount: Number,
	action: String,
});

const Transactions = mongoose.model('Transactions', transactionsSchema);

module.exports = Transactions;
