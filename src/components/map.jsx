import React from 'react'
import { useStaticQuery } from 'gatsby'

const Map = () => {
    const query = useStaticQuery(graphql`
    query {
    allContentfulBlogPost{
      edges{
        node{
          country
        }
      }
    }
    }`)

    return(
        <div><h1>asdfsd</h1></div>
    )
}

export default Map