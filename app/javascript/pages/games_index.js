import React from 'react';
import { createRoot } from 'react-dom/client';
import GamesIndex from '../components/GamesIndex';

document.addEventListener('turbo:load', () => {
  const domNode = document.getElementById('react-container');
  const root = createRoot(domNode);
  root.render(<GamesIndex />);
});
