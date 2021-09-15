require('dotenv').config()
const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');
const {typeDefs} =  require ("./typeDefs");
const {resolvers} =  require ("./resolvers");

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        cors: {
            origin: true
        }
    });

    await mongoose.connect(process.env.DB_PORT, {useNewUrlParser: true })
        .then(() => console.log("Connected to Mongo database 🌿"))
        .catch(err => console.log(err));

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.listen(process.env.PORT, () => console.log(`SERVER IS RUNNING ON PORT : ${process.env.PORT} ✅  `) );
}
startServer();





