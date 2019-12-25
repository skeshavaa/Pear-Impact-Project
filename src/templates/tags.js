import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
query{
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
  }
  ` 

const Tags = (props) => {
    const currentTag = props.pageContext.slug
    const hits = []
    {props.data.allContentfulBlogPost.edges.map((edge) => {
        const allTags = edge.node.tags
        const arrTags = allTags.split(",")
        console.log(arrTags)
        if (arrTags.includes(currentTag)){
            console.log("yes")
            hits.push(edge)
        } else {
            console.log("no")
        }
    })}
    console.log(hits)
    return(
        <Layout>
            {hits.map((hit) => {
                return(
                    <div>
                        <h1>{hit.node.title}</h1>
                    </div>
                )
            })}
        </Layout>
    )
}

export default Tags