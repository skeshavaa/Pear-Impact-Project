import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
import Layout from '../components/layout'
import templateStyles from '../templates/blog.module.scss'
import MetaTags from 'react-meta-tags'

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMM Do, YYYY")
      tags
      content {
        json
      }
      image1 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    
  }`



const Blog = (props) => {
  const tags = props.data.contentfulBlogPost.tags
  const arrTags = tags.split(",")
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <MetaTags>
              <meta name="description" content="100+ Stories of Canadian Immigrants"/>
              <meta name="og:title" content={props.data.contentfulBlogPost.title}/>
            </MetaTags>

            <h1 className={templateStyles.title}>{props.data.contentfulBlogPost.title}</h1>
            <div className={templateStyles.imageContainer}>
              <img src={props.data.contentfulBlogPost.image1.fluid.src} />
            </div>
            <div className={templateStyles.tags}>
              {arrTags.map((tag) => {
                return (
                  <a>{tag}</a>
                )
              })}
            </div>
            <div className={templateStyles.content}>
              {documentToReactComponents(props.data.contentfulBlogPost.content.json)}
            </div>
        </Layout>
    )
}

export default Blog