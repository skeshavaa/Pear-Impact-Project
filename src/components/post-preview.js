import React from 'react'
import { Link } from 'gatsby'
import blogStyles from '../pages/blog.module.scss'

const PostPreview = ({ hit }) => {
    const title = hit.fields.title['en-US']
    const slug = hit.fields.slug['en-US']
    const name = hit.fields.name['en-US']
    const country = hit.fields.country['en-US']
    const prof = hit.fields.occupation['en-US']
    return (
        <div className={blogStyles.post}>
            <Link to={`/blog/${slug}`}>
            <h2>{title}</h2>
            <div className={blogStyles.tagContainer}>
                <div className={blogStyles.tagName}>
                    <h3><span className={blogStyles.tagHeader}>Name:</span> {name}</h3>
                </div>
                <div className={blogStyles.tagCountry}>
                    <h3><span className={blogStyles.tagHeader}>Country:</span> {country}</h3>
                </div>
                <div className={blogStyles.tagProf}>
                    <h3><span className={blogStyles.tagHeader}>Occupation:</span> {prof}</h3>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default PostPreview 