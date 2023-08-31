import React from 'react';

function MoreButton({ hasNextPage, endCursor, fetchMore }) {
  if (!hasNextPage) {
    return null;
  }

  const loadMore = () => {
    fetchMore({
      variables: {
        after: endCursor,
      },
    });
  };
  return <button onClick={loadMore}>More</button>;
}

export default MoreButton;
