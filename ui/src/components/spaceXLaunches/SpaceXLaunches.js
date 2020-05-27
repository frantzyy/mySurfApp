import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const SpaceXLaunches = () => (
  <Query
    query={gql`
      {
        launch(id: 5) {
          id
          site
          mission {
            name
          }
          rocket {
            id
            name
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :( {error}</p>;

      return (
        <div>
          <p>{data.launch.rocket.name}</p>
        </div>
      );
    }}
  </Query>
);

export default SpaceXLaunches;
