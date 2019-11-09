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
    }
    contentfulBlogPostQ1RichTextNode {
      json
    }
  }`



const Blog = (props) => {
    console.log(props.data)
    return (
        <Layout>
            
            <Head title={props.data.contentfulBlogPost.title}/>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            
            <p>{documentToReactComponents(props.data.contentfulBlogPostQ1RichTextNode.json)}</p>
            
        </Layout>
    )
}

export default Blog