import React from 'react'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
import Layout from '../components/layout'
import templateStyles from '../templates/blog.module.scss'
import MetaTags from 'react-meta-tags'
import { Hits } from 'react-instantsearch-dom'

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMM Do, YYYY")
      tags
      country
      content {
        json
      }
      image1 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulBlogPost{
      edges{
        node{
          title
          country
          occupation
          tags
          image1{
            fluid {
            ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }`


const Blog = (props) => {
  const hit = []
  const title = props.data.contentfulBlogPost.title
  const country = props.data.contentfulBlogPost.country
  const currentTags = props.data.contentfulBlogPost.tags.split(",")


  {props.data.allContentfulBlogPost.edges.map((edge) => {
    const diffTags = edge.node.tags.split(",")
    const found = currentTags.some(r=> diffTags.indexOf(r) >= 0)

    if (edge.node.title != title && edge.node.country == country){
      hit.push(edge)
    } else if (found && edge.node.title != title){
      hit.push(edge)
    }
    

  })}



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
              <img  src={props.data.contentfulBlogPost.image1.fluid.src} />
            </div>
            <div className={templateStyles.tags}>
              <h1>Tags: </h1>
              {arrTags.map((tag) => {
                return (
                  <Link to={`/tag/${tag}`}>{tag}</Link>
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