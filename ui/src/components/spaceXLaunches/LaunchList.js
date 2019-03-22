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

      return (
        <div>
          <table>
            <tr>
              <th>Mission Id</th>
              <th>Mission Name</th>
              <th>Rocket Name</th>
            </tr>
            <tr>
              <td>{data.launches[0].id}</td>
              <td>{data.launches[0].mission.name}</td>
              <td>{data.launches[0].rocket.name}</td>
            </tr>
          </table>
        </div>
      );
    }}
  </Query>
);

export default LaunchList;
