'use strict';

const conn = require('./lib/connectMongoose');

const Transactions = require('./models/Transactions');

conn.once('open', async () => {
	try {
		await initTransactions();
		conn.close();
	} catch (err) {
		console.error('Error:', err);
		process.exit(1);
	}
});

const initTransactions = async () => {
	await Transactions.deleteMany();
	await Transactions.insertMany([
		{ date: '28/09/2022', amount: 500, action: 'deposit', balance: 500 },
		{ date: '28/09/2022', amount: 200, action: 'withdraw', balance: 300 },
	]);
};
