const db = require('../config/connection');
const { Comment, Post, User } = require('../models');
const commentSeeds = require('./commentSeeds.json');
const postSeeds = require('./postSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try{
    await Comment.deleteMany({});
    await User.deleteMany({});
    await Post.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < commentSeeds.length; i++) {
      const { _id, commentAuthor } = await Comment.create(commentSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: commentAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
  