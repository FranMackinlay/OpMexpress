const express = require('express');
const Transactions = require('../models/Transactions');
const router = express.Router();

router.post('/', async (req, res, next) => {
	const { action, amount, date } = req.body;

	const transactionsList = await Transactions.find();

	const currBalance = transactionsList[transactionsList.length - 1].balance;

	const balance = calcBalance({ currBalance, amount, action });

	if (balance < 0) return res.status(403).json({ message: 'Out of balance, cannot withdraw that amount of money' });

	const transactionToCreate = {
		balance: calcBalance({ currBalance, amount, action }),
		date,
		amount,
		action,
	};

	const transactions = new Transactions(transactionToCreate);

	await transactions.save();

	res.status(201).json({ transactions });
	res.send;
});

function calcBalance({ currBalance, amount, action }) {
	return action === 'deposit' ? parseInt(currBalance) + parseInt(amount) : parseInt(currBalance) - parseInt(amount);
}

module.exports = router;
