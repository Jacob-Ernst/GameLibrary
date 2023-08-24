import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import GamesIndex from '../components/games/GamesIndex';
import apolloClient from '../utils/apolloClient';

document.addEventListener('turbo:load', () => {
  const domNode = document.getElementById('react-container');
  const root = createRoot(domNode);
  root.render(
    <ApolloProvider client={apolloClient}>
      <GamesIndex />
    </ApolloProvider>,
  );
});
