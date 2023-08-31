import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { gamePlatforms } from '../../utils/copy';
import Tags from '../shared/Tags';

const GET_GAME = gql`
  query GetGames($id: ID!) {
    node(id: $id) {
      ... on Game {
        title
        platform
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

function GamesShow({ id }) {
  const { loading, error, data } = useQuery(GET_GAME, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const { title, platform, tags } = data.node;
  const platformName = gamePlatforms[platform];

  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <h2>Platform: {platformName}</h2>
      <h2>Tags</h2>
      <Tags tags={tags.nodes} />
    </div>
  );
}

export default GamesShow;
