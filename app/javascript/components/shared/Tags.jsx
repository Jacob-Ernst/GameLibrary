import React from 'react';

import Tag from './Tag';

function Tags({ tags }) {
  return (
    <ul>
      {tags.map((tag) => (
        <Tag key={tag.id} tag={tag} />
      ))}
    </ul>
  );
}

export default Tags;
