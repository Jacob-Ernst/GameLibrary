import React from 'react';

import Tag from './Tag';

function Game({ game }) {
  return (
    <div>
      <h2>{game.title}</h2>

      <h3>Platform</h3>
      <p>{game.platform}</p>

      <h3>Tags</h3>
      <ul>
        {game.tags.nodes.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </ul>
    </div>
  );
}

export default Game;
