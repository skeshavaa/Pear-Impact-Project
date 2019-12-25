import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import postStyles from '../components/post-preview.module.scss'
import moment from 'moment'
import unknown from '../Icons/unknown.png'

const contentful = require('contentful');

const client = contentful.createClient({
    space: process.env.GATSBY_CONTENTFUL_SPACE_ID,
    accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
});

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
    const [ image, setImage ] = useState();
    useEffect(() => {
        let mounted = true;
        (async() => {
            const { fields } = await client.getAsset(hit.fields.image1['en-US'].sys.id);
            if (mounted) {
                setImage('https:' + fields.file.url);
            }
        })();
        return () => {
            mounted = false;
        };
    }, [hit]);

    const slug = hit.fields.slug['en-US']
    const title = hit.fields.title['en-US']
    const tags = hit.fields.tags['en-US']
    const listTags = tags.split(",")
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
                <img src={ image } alt={unknown}/>
            </div>
            <div className={postStyles.TextContainer}>
                <div className={postStyles.EntryDate}>
                    <a>{moment(date).format('LL')}</a>
                </div>
                <div className={postStyles.EntryTitle}>
                    <a>{title}</a>
                    <p>By: {name}</p>
                </div>
                <div className={postStyles.EntryExcerpt}>
                    <p>
                        Lorem ipsum Sed eiusmod esse aliqua sed 
                        incididunt aliqua incididunt mollit id et
                    </p>
                </div>
                <div className={postStyles.EntryTag}>
                    <a>{country}</a>
                    <a>{prof}</a>
                    {listTags.map((tagg) => {
                        return (
                        <Link to={`/tag/${tagg}`}>
                        {tagg}
                        </Link>
                        )
                })}
                </div>
            </div>
            </Link>
        </div>
    )
}

export default PostPreview 