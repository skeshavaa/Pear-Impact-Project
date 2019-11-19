import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
import Layout from '../components/layout'
import Img from "gatsby-image"

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMM Do, YYYY")
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
  console.log(props.data.contentfulBlogPost.image1.fluid.src)
    return (
        <Layout>
            
            <Head title={props.data.contentfulBlogPost.title}/>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <img src={props.data.contentfulBlogPost.image1.fluid.src} />
            {documentToReactComponents(props.data.contentfulBlogPost.content.json)}
            
        </Layout>
    )
}

export default Blog