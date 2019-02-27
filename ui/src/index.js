import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import SpaceXLaunches from "./SpaceXLaunches";

// https://in-your-saas.github.io/material-ui-theme-editor/
const theme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "rgba(74, 144, 226, 0.52)",
      main: "rgba(74, 144, 226, 1)",
      dark: "rgba(74, 144, 226, 0.96)",
      contrastText: "#fff"
    },
    secondary: {
      light: "rgba(245, 166, 35, 0.35)",
      main: "rgba(245, 166, 35, 1)",
      dark: "rgba(245, 166, 35, 0.99)",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  }
});

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
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    </ApolloProvider>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));

// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
