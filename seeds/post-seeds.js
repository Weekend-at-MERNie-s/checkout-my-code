const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/checkout-my-code");

const postData = [
  {
    title: "rate my code",
    user_id: 1,
    content: "paste code file here",
  },
  {
    title: "advice on css",
    user_id: 2,
    content: "paste code file here",
  },
  {
    title: "help find syntax error",
    user_id: 3,
    content: "paste code file here",
  },
  {
    title: "dry my code",
    user_id: 4,
    content: "paste code file here",
  },
  {
    title: "improve functionality",
    user_id: 5,
    content: "paste code file here",
  },
  {
    title: "what's broken??!",
    user_id: 6,
    content: "paste code file here",
  }
];

db.Post.deleteMany({})
  .then(() => db.Post.collection.insertMany(postData))
  .then((data) => {
    console.log(data.insertedCount + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
