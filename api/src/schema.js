const { gql } = require("apollo-server");

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.
  type Launch {
    id: ID!
    site: String
    site_id: String
    siteDetail: SiteDetail
    when: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
    details: String
  }

  type Mission {
    name: String
    missionPatchSmall: String
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type Location {
    name: String
    region: String
    lat: Int
    long: Int
  }

  type SiteDetail {
    id: ID!
    site_id: String
    name: String
    details: String
    location: Location
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    launch(id: ID!): Launch
    launches: [Launch]!
    nextLaunch: Launch
    siteDetail(siteId: String): SiteDetail
  }
`;

module.exports = typeDefs;
