import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import * as serviceWorker from './serviceWorker';

import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { HashRouter } from "react-router-dom";

import { VERIFY_USER } from "./components/graphql/mutations";

const cache = new InMemoryCache({
  dataIdFromObject: object => object._id || null
});

// const httpLink = createHttpLink({
//   uri: "http://localhost:5000/graphql",
//   headers: {
//     authorization: localStorage.getItem("auth-token")
//   }
// });

let uri;

if (process.env.NODE_ENV === "production") {
  uri = `/graphql`;
} else {
  uri = "http://localhost:5000/graphql";
}

const httpLink = createHttpLink({
  uri,
  headers: {
    authorization: localStorage.getItem("auth-token")
  }
});

// make sure we log any additional errors we receive
const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache,
  // headers: {
  //   authorization: localStorage.getItem("auth-token")
  // },
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
    // if (graphQLErrors)
    //   graphQLErrors.forEach(({ message, locations, path }) =>
    //     console.log(
    //       `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
    //     )
    //   );
    // if (networkError) console.log(`[Network error]: ${networkError}`);
  }
});

const token = localStorage.getItem("auth-token");

cache.writeData({
  data: {
    isLoggedIn: Boolean(token),
    currUserId: ""
    // currUserId: "5e3229da901abb1d03d1a186"
  }
});

if (token) {
  client
    .mutate({ mutation: VERIFY_USER, variables: { token } })
    .then(({ data }) => {
      // console.log("index:", data)
      cache.writeData({
        data: { isLoggedIn: data.verifyUser.loggedIn, currUserId: data.verifyUser._id }
      });
      // debugger      
    });
}

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <HashRouter>
        <App />
      </HashRouter>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
