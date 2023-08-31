import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider } from '@apollo/client';

import GamesShow from '../components/games/GamesShow';
import apolloClient from '../utils/apolloClient';

document.addEventListener('turbo:load', () => {
  const domNode = document.getElementById('react-container');
  const root = createRoot(domNode);
  const gameID = domNode.dataset.gameId;
  root.render(
    <ApolloProvider client={apolloClient}>
      <GamesShow id={gameID} />
    </ApolloProvider>,
  );
});
