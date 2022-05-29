const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect("mongodb://localhost/checkout-my-code");

const commentData = [
  {
    comment_text: 'Fantastic code!',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Try using a radial gradient to make the background more colorful.',
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: 'There is a missing ; on line 232',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Keep it simple, stupid',
    user_id: 4,
    post_id: 4
  },
  {
    comment_text: 'You could add a company contact form',
    user_id: 5,
    post_id: 5
  },
  {
    comment_text: 'everything. trash it and start over.',
    user_id: 6,
    post_id: 6
  }
];

db.Comment.deleteMany({})
  .then(() => db.Comment.collection.insertMany(commentData))
  .then((data) => {
    console.log(data.insertedCount + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
