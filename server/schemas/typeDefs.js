const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [bookSchema]
  }
  type Book{
    _id: ID
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
  type Auth{
   token: ID
   user: User

  }
  input Bookinput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }
  type Query {
    me: User
   
  }
  type Mutation {
    savebook(bookinput:Bookinput!): User
    removebook(bookId:ID!): User
    login(email:String!,password:String!): Auth
    adduser(username:String!,email:String!,password:String!): Auth
   
  }
`;

module.exports = typeDefs;