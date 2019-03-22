import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

// Material UI reference
// https://material-ui.com/demos/tables/

// Graphql components with Material UI reference
//https://github.com/nickchauhan/react-graphql-apollo-material-ui-todo-app/blob/master/client/src/components/Header/Header.js

const styles = theme => ({
  root: {
    widTableCell: "100%",
    marginTop: theme.spacing.unit * 2,
    overflowX: "auto"
  },
  table: {
    minWidTableCell: 700
  }
});

function LaunchListMUI(props) {
  const { classes } = props;

  return (
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
            <TableRow key={index}>
              <TableCell>{launch.id}</TableCell>
              <TableCell>{launch.mission.name}</TableCell>
              <TableCell>{launch.rocket.name}</TableCell>
            </TableRow>
          );
        });

        return (
          <div>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Mission Id</TableCell>
                  <TableCell>Mission Name</TableCell>
                  <TableCell>Rocket Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{iterateLaunches}</TableBody>
            </Table>
          </div>
        );
      }}
    </Query>
  );
}

// export default LaunchList;
export default withStyles(styles)(LaunchListMUI);
