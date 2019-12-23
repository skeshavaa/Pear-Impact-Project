import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

import blogStyles from './blog.module.scss'

import MetaTags from 'react-meta-tags'

import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, RefinementList } from 'react-instantsearch-dom'
import PostPreview from '../components/post-preview'
import './blog.css'
import { slide as Menu } from "react-burger-menu";




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
        <div id="page-wrap">
          <InstantSearch indexName="Blog" searchClient={searchClient}>
            
            <Layout>
            <Menu>
                <RefinementList className="fixed" attribute="fields.occupation.en-US"/>
                <RefinementList className="fixed" attribute="fields.country.en-US"/>
            </Menu>
            




              <MetaTags>
                <meta name="description" content="100+ Stories of Canadian Immigrants"/>
                <meta property="og:title" content="Stories"/>
              </MetaTags>
              
                <Head title="Blog"/>
                  <div className={blogStyles.Header} >
                    <h1>Migrant Stories</h1>
                    
                    <SearchBox translations={{ placeholder: 'Name, Title, Tags, Country'}} label="Search" defaultRefinement=""/>
                    
                  </div>

                  <div className={blogStyles.Hits}>
                    <Hits hitComponent={PostPreview}/>
                  </div>
              
            </Layout>
            </InstantSearch>
        </div>
    )
}

export default BlogPage