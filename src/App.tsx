import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from "./server";
import GetLaunches from './Client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
      </div>
      <GetLaunches />
    </ApolloProvider>
  );
}

export default App;
