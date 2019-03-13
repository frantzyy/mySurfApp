import React, { Component } from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import customtheme from "./theme.json";
import SpaceXLaunches from "./SpaceXLaunches";
import { TextField } from "@material-ui/core";

import logo from "./logo.svg";
import "./App.css";

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };

    this.handleName = this.handleName.bind(this);
    this.displayAlert = this.displayAlert.bind(this);
  }

  handleName(event) {
    console.log("handleName");
    this.setState({
      name: event.target.value
    });
  }

  displayAlert(event) {
    console.log("displayAlert");
    alert("Hello World " + this.state.name + "!");
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
            <TextField value={this.state.name} onChange={this.handleName} />
            <Button
              variant="contained"
              color="primary"
              onClick={this.displayAlert}
            >
              Hello World
            </Button>
          </div>
        </ApolloProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
