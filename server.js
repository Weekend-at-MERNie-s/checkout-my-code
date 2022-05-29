const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require('./routes'));


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/checkout-my-code',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

//LOG MONGO QUERIES BEING EXECUTED
mongoose.set('debug', true);

app.listen(PORT, () => {
  console.log(`App running on localhost:${PORT}!`);
});
