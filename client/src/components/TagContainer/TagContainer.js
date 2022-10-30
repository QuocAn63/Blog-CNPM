import React from 'react'
import Tag from '../Tag/Tag'

function TagContainer({ tags }) {
    return (
        <div>
            {tags.map((tag, index) => <Tag key={index} title={tag.title} slug={tag.slug} />)}
        </div>
    )
}

export default TagContainer