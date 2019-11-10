import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
import Layout from '../components/layout'

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMM Do, YYYY")
      Q1 {
        json
      }
    }
    
  }`



const Blog = (props) => {
    return (
        <Layout>
            
            <Head title={props.data.contentfulBlogPost.title}/>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            
            {documentToReactComponents(props.data.contentfulBlogPost.Q1.json)}
            
        </Layout>
    )
}

export default Blog