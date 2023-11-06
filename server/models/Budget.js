const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  category: { type: String, required: true },
  limit: { type: Number, required: true },
  period: { type: String, required: true, enum: ['Monthly', 'Weekly'] }
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
