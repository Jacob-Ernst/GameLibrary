import React from 'react';

function Tag({ tag: { id, name } }) {
  return (
    <li>
      id: {id}, name: {name}
    </li>
  );
}

export default Tag;
