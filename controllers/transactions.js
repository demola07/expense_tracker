//@desc Get all Transactions
// @route GET /api/v1/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
  res.send('GET TRANSACTIONS');
};

//@desc ADD Transaction
// @route POST /api/v1/transactions
// @access Public
exports.addTransaction = (req, res, next) => {
  res.send('POST TRANSACTION');
};

//@desc delete transaction
// @route DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE TRANSACTIONS');
};
