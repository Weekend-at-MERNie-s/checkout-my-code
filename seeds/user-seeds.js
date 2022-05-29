const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/checkout-my-code');

const userData = [
  {
    userName:  'Blair',
    email: 'blair@email.com',
    password: password
},
{
  userName:  'Abi',
  email: 'abi@email.com',
  password: password
},
{
    userName: 'Jordan',
    email: 'jordan@email.com',
    password: password
},
{
    userName: 'Geiciane',
    email: 'geiciane@email.com',
    password: password
},
{
  userName:  'Mark',
  email: 'mark@email.com',
  password: password
},
{
  userName:  'Adam',
  email: 'adam@email.com',
  password: password
},
];

 db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userData))
  .then((data) => {
    console.log(data.insertedCount + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });