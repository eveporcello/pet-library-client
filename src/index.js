import React from "react";
import { render } from "react-dom";
import App from "./App";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink
} from "@apollo/client";
import { isDarkModeVar } from "./localStorage";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isDarkMode: {
          read() {
            return isDarkModeVar();
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://pet-library.moonhighway.com"
  }),
  cache
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
