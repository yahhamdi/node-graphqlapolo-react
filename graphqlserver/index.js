import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import * as resolvers from './resolvers';
import PhotoAPI from './datasources/photo';
import UserAPI from './datasources/user';
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    token: req.headers.authorization,
  }),
  dataSources: () => ({
    photoAPI: new PhotoAPI(),
    userAPI: new UserAPI(),
  }),
});
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
