import React from 'react';
import Tag from '../Tag';

function TagContainer({ tags, className, ...props }) {
   return (
      <div className={"flex flex-wrap items-center gap-2 " + className} {...props}>
         {tags.map((tag, index) => (
            <Tag key={index} title={tag.title} slug={tag.slug} />
         ))}
      </div>
   );
}

export default TagContainer;
