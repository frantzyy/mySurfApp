import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

function LaunchDetail(props) {
  const GET_LAUNCH_BY_ID = gql`
    {
      launch(id: 10) {
        id
        site
        mission {
          name
          missionPatchSmall
        }
        rocket {
          id
          name
        }
      }
    }
  `;

  return (
    <Query query={GET_LAUNCH_BY_ID}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div>
            <h3>{data.launch.mission.name}</h3>
            <span>
              <img src={data.launch.mission.missionPatchSmall} />
            </span>
            <ul>
              <li>Launch Id: {data.launch.id}</li>
              <li>Launch Site: {data.launch.site}</li>
              <li>Rocket Id: {data.launch.rocket.id}</li>
              <li>Rocket Name: {data.launch.rocket.name}</li>
              <li>Rocket Type: {data.launch.rocket.type}</li>
            </ul>
          </div>
        );
      }}
    </Query>
  );
}

export default LaunchDetail;
