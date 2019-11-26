import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import blogStyles from './blog.module.scss'


import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import PostPreview from '../components/post-preview'
import './blog.css'
const searchClient = algoliasearch('L62RK6OZ7R', '2598efc467448e3024c6ea87d9bf25a8')

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
          sort: {
            fields:publishedDate,
            order:DESC
          }
        ){
          edges {
            node {
              title
              slug
              publishedDate(formatString:"MMM Do, YYYY")
            }
          }
        }
      }
    `)
    


    return (
        <div>
            <Layout>
              <script src="/path/to/masonry.pkgd.min.js"></script>
              <InstantSearch indexName="Blog" searchClient={searchClient}>
                <Head title="Blog"/>
                  <div className={blogStyles.Header}>
                    <h1>Pear Blog</h1>
                    <SearchBox defaultRefinement=" "/>
                  </div>

                  <div className={blogStyles.Hits}>
                    <Hits hitComponent={PostPreview}/>
                  </div>
              </InstantSearch>
            </Layout>
        </div>
    )
}

//Legacy Code, don't touch please! :)
{/*
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{edge.node.title}</h2>
                                <p>{edge.node.publishedDate}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
                  */}

export default BlogPage