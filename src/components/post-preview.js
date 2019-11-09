import React from 'react'
import { Link } from 'gatsby'
import blogStyles from '../pages/blog.module.scss'

const PostPreview = ({ hit }) => {
    const title = hit.fields.title['en-US']
    const slug = hit.fields.slug['en-US']
    return (
        <div className={blogStyles.post}>
            <Link to={`/blog/${slug}`}>
            <h2>{title}</h2>
            <p>{slug}</p>
            </Link>
        </div>
    )
}

export default PostPreview 