const express = require('express');
const router = express.Router();

const Transactions = require('../models/Transactions');

/* GET home page. */
router.get('/', async (req, res, next) => {
	const transactions = await Transactions.find();
	res.render('index', { title: 'Optiva Express', transactions });
});

module.exports = router;
