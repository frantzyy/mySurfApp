import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import customtheme from "./theme.json";
import SpaceXLaunches from "./SpaceXLaunches";
import { TextField } from "@material-ui/core";

import AppOriginal from "./App.js";

// https://in-your-saas.github.io/material-ui-theme-editor
const theme = createMuiTheme(customtheme);
console.log("theme create", theme);

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

client
  .query({
    query: gql`
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
    `
  })
  .then(result => console.log(result));

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <div>
        <h2>
          My first Apollo app{" "}
          <span role="img" aria-label="rocket">
            🚀
          </span>
        </h2>
        <SpaceXLaunches />
        <TextField value={this.state.name} onChange={this.handleName} />
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    </ApolloProvider>
  </MuiThemeProvider>
);

ReactDOM.render(<AppOriginal />, document.getElementById("root"));

// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
