import React from 'react'
import { Link } from 'gatsby'
import blogStyles from '../pages/blog.module.scss'

const PostPreview = ({ hit }) => {
    console.log(hit)
    const title = hit.fields.title['en-US']
    const slug = hit.fields.slug['en-US']
    const name = hit.fields.name['en-US']
    const country = hit.fields.country['en-US']
    return (
        <div className={blogStyles.post}>
            <Link to={`/blog/${slug}`}>
            <h2>{title}</h2>
            <p className={blogStyles.preview}>Story provided by: {name}</p>
            <p>Country: {country}</p>
            </Link>
        </div>
    )
}

export default PostPreview 