const { gql } = require('apollo-server-express');

module.exports = {
    typeDefs: gql `
    type Query {
        hello: String
        wilders: [Wilder!]
    }
    type Mutation {
        addWilder(name: String, lastname: String, age: Int): Wilder
    }
    type Wilder {
        name: String
        lastname: String
        age: Int
    }
`

}
