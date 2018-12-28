import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    photo(id: ID!): Photo
    listphoto: [Photo]
    user(id: ID!): User
    profiluser:  User
    listuser: [User]
    getProfilUser(token: String): User
  }
  type Photo {
    _id: ID!
    url: String
    title: String
  }
  type PhotoRegistred {
    photo: Photo!
  }
  input PhotoInput {
    url: String!
    title: String!
  }
  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  type User {
    _id: ID!
    username: String
    email: String
    password: String
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type UserLogged {
    user: User!
    token: String
  }
  type Mutation {
      createUser(input: UserInput): UserLogged
      loginUser(input: LoginInput): UserLogged
      updateUser(id: ID!, input: UserInput): UserLogged
      deleteUser(id: ID!): UserLogged
      createPhoto(input: PhotoInput): PhotoRegistred
      updatePhoto(id: ID!, input: PhotoInput): PhotoRegistred
      deletePhoto(id: ID!): PhotoRegistred
  }
`;
export default typeDefs;
