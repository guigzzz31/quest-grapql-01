import { ApolloClient, InMemoryCache } from '@apollo/client';

const server = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});


export default server;