import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
