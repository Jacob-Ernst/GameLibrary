import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Game from './components/Game';

const GET_GAMES = gql`
  query GetGames {
    games {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        title
        platform
        id
        tags {
          nodes {
            id
            name
          }
        }
      }
    }
  }
`;

function GamesIndex() {
  const { loading, error, data } = useQuery(GET_GAMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="grid grid-flow-row auto-rows-min auto-cols-fr gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.games.nodes.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GamesIndex;
