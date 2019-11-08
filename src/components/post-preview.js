import React from 'react'
import { Link } from 'gatsby'
import blogStyles from '../pages/blog.module.scss'

const PostPreview = ({ hit }) => {
    const qas = encodeURIComponent("en-US")
    const title = hit.sys.space.sys.type
    console.log(title)
    return (
        <li className={blogStyles.post}>
            <Link to={`/blog/`}>
            <h2>{title}</h2>
            <p></p>
            </Link>
        </li>
    )
}

export default PostPreview 