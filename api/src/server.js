const { ApolloServer, gql } = require("apollo-server");

const typeDefs = require("./schema");
const SpacexApi = require("./datasources/spacexApi");
const resolvers = require("./resolvers");

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
// const resolvers = {
//   Query: {
//     launch: (_, { id }, { dataSources }) =>
//       dataSources.spacexApi.getLaunchById({ launchId: id })
//   }
// };

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      spacexApi: new SpacexApi()
    };
  }
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
