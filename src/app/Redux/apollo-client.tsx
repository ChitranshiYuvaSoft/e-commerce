import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://node-js-graphql.onrender.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
