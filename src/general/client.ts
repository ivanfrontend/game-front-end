import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://iycfx.sse.codesandbox.io"
});

export const client = new ApolloClient({
  uri: "https://iycfx.sse.codesandbox.io/",
  cache: new InMemoryCache()
});
