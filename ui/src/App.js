import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import customTheme from "./customTheme.json";
import SpaceXLaunches from "./SpaceXLaunches";
import HelloWorld from "./components/helloWorld/HelloWorld.jsx";

import "./App.css";

// https://in-your-saas.github.io/material-ui-theme-editor
const theme = createMuiTheme(customTheme);
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

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
            <HelloWorld />
          </div>
        </ApolloProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
