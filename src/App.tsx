// import { PlayingField } from "./components/playing-field";
// import { ApolloProvider } from "@apollo/react-hooks";
// import { client } from "./general/client";
import { ApolloClient } from "apollo-client";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink, split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { ApolloProvider } from "@apollo/react-hooks";
import "./styles.css";
import { TestComponent } from "./components/test";

const httpLink = new HttpLink({
  uri: "https://fmrdb.sse.codesandbox.io/"
});

const wsLink = new WebSocketLink({
  uri: "wss://fmrdb.sse.codesandbox.io/",
  options: {
    reconnect: true
  }
});

const terminatingLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

const link = ApolloLink.from([terminatingLink]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      {/* <PlayingField /> */}
      <TestComponent />
    </ApolloProvider>
  );
}
