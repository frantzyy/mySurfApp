import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import LaunchDetail from "./LaunchDetail";

const SpaceXLaunches = () => (
  <Query
    query={gql`
      {
        nextLaunch {
          id
          site
          details
          when
          mission {
            name
            missionPatchSmall
          }
          rocket {
            id
            name
            type
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
          <div>
            <h1>Next Launch is: {data.nextLaunch.when}</h1>
            <h3>{data.nextLaunch.mission.name}</h3>
            <span>
              <img src={data.nextLaunch.mission.missionPatchSmall} />
            </span>
            <p> Details: {data.nextLaunch.details}</p>
            <ul>
              <li>Launch Id: {data.nextLaunch.id}</li>
              <li>Launch Site: {data.nextLaunch.site}</li>
              <li>Rocket Id: {data.nextLaunch.rocket.id}</li>
              <li>Rocket Name: {data.nextLaunch.rocket.name}</li>
              <li>Rocket Type: {data.nextLaunch.rocket.type}</li>
            </ul>
          </div>
        </div>
      );
    }}
  </Query>
);

export default SpaceXLaunches;
