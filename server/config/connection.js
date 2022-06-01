const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/checkout-my-code',
  {
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
