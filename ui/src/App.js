import React, { Component } from "react";

//GraphQL setup
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

//Material UI config
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

//Configs
import basicLaunchInfoQuery from "./queries/basicLaunchInfoQuery";
import customTheme from "./customTheme.json";

//Components
import HelloWorld from "./components/helloWorld/HelloWorld";
import NextLaunchDetail from "./components/spaceXLaunches/NextLaunchDetail";
import LaunchDetailDrawer from "./components/spaceXLaunches/LaunchDetailDrawer";
import LaunchListMUI from "./components/spaceXLaunches/LaunchListMUI";

//App specific
import "./App.css";

// https://in-your-saas.github.io/material-ui-theme-editor
const theme = createMuiTheme(customTheme);
console.log("theme created: ", theme);

//Create graphQL server
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

//test it with a basic query
client
  .query(basicLaunchInfoQuery)
  .then(result => console.log("basic launch info: ", result));

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
            <HelloWorld />
            <NextLaunchDetail />
            <LaunchDetailDrawer />
            <LaunchListMUI />
          </div>
        </ApolloProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;
