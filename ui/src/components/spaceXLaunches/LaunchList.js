import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const LaunchList = () => (
  <Query
    query={gql`
      {
        launches {
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
      if (error) return <p>Error :(</p>;
      console.log(data);

      const iterateLaunches = data.launches.map(function(launch, index) {
        return (
          <tr key={index}>
            <td>{launch.id}</td>
            <td>{launch.mission.name}</td>
            <td>{launch.rocket.name}</td>
          </tr>
        );
      });

      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Mission Id</th>
                <th>Mission Name</th>
                <th>Rocket Name</th>
              </tr>
            </thead>
            <tbody>{iterateLaunches}</tbody>
          </table>
        </div>
      );
    }}
  </Query>
);

export default LaunchList;
