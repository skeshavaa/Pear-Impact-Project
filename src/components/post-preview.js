import React from 'react'
import { Link } from 'gatsby'
import postStyles from '../components/post-preview.module.scss'
import moment from 'moment'

export const query = graphql`
    query($slug: String) {
        contentfulBlogPost(slug: {eq: $slug}) {
            image1 {
                fluid {
                ...GatsbyContentfulFluid
                }
            }
        }
    }`

const PostPreview = ({ hit }) => {
    const slug = hit.fields.slug['en-US']
    const title = hit.fields.title['en-US']
    
    const name = hit.fields.name['en-US']
    const country = hit.fields.country['en-US']
    const prof = hit.fields.occupation['en-US']
    const date = hit.fields.publishedDate['en-US']
    {/*
        <div className={blogStyles.post} className={blogStyles.hvrOverlineReveal}>
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
    */}
    return (
        <div className={postStyles.EventContainer}>
            <Link to={`/blog/${slug}`}>
            <div className={postStyles.ImageContainer}>

            </div>
            <div className={postStyles.TextContainer}>
                <div className={postStyles.EntryDate}>
                    <a>{moment(date).format('LL')}</a>
                </div>
                <div className={postStyles.EntryTitle}>
                    <a>{title}</a>
                </div>
                <div className={postStyles.EntryExcerpt}>
                    <p>
                        Lorem ipsum Sed eiusmod esse aliqua sed 
                        incididunt aliqua incididunt mollit id et 
                        sit proident dolor nulla sed commodo est 
                        ad minim elit reprehenderit nisi officia 
                        aute incididunt velit sint in aliqua..
                    </p>
                </div>
                <div className={postStyles.EntryTag}>
                    <a>Name: <span>{name}</span></a>
                    <a>Country: <span>{country}</span></a>
                    <a>Occupation: <span>{prof}</span></a>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default PostPreview 