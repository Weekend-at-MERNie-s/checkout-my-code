const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//INSERT _DIRNAME FILE PATH BELOW
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '')));
}
//INSERT _DIRNAME FILE PATH BELOW
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, ''));
});

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


//Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);


//TURN THIS ON ONCE ROUTES HAVE BEEN CREATED
app.use(require('./routes'));



