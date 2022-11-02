import React from 'react'
import Tag from '../Tag/Tag'

function TagContainer({ tags }) {
    return (
        <div className='flex flex-wrap items-center gap-2'>
            {tags.map((tag, index) => <Tag key={index} title={tag.title} slug={tag.slug} />)}
        </div>
    )
}

export default TagContainer