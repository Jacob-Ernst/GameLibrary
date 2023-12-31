import React from 'react';

import Tag from './Tag';
import { gamePlatforms } from '../../../utils/copy';

function Game({ game }) {
  const platform = gamePlatforms[game.platform];
  return (
    <div className="px-6 py-4 rounded bg-slate-100 max-w-sm w-full">
      <h2 className="text-lg font-semibold">{game.title}</h2>

      <h3>Platform</h3>
      <p>{platform}</p>

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
