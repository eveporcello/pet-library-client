import React from "react";
import { render } from "react-dom";
import App from "./App";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  gql
} from "@apollo/client";

const cache = new InMemoryCache();

const typeDefs = gql`
  extend type Query {
    isAdmin: Boolean!
  }
`;

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://pet-library.moonhighway.com"
  }),
  cache,
  typeDefs
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
