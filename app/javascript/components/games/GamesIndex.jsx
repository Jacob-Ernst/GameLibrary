import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Game from './components/Game';
import MoreButton from '../shared/MoreButton';

const GET_GAMES = gql`
  query GetGames($after: String) {
    games(first: 12, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
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
  }
`;

function GamesIndex() {
  const { loading, error, data, fetchMore } = useQuery(GET_GAMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { pageInfo, edges } = data.games;

  return (
    <>
      <div className="grid grid-flow-row auto-rows-min auto-cols-fr gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {edges.map(({ node }) => (
          <Game key={node.id} game={node} />
        ))}
      </div>
      <MoreButton {...pageInfo} fetchMore={fetchMore} />
    </>
  );
}

export default GamesIndex;
