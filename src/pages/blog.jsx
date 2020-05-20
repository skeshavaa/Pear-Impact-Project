import React, {useState} from 'react'
//Components
import { useStaticQuery, graphql } from 'gatsby'
import { InstantSearch, SearchBox } from 'react-instantsearch-dom'
import { Layout, Head, Toggle, Sidebar, PostPreview } from '@components' 
//Packages
import MetaTags from 'react-meta-tags'
import algoliasearch from 'algoliasearch/lite'
//Styles
import blogStyles from '@pageStyles/blog.module.scss'
import '@pageStyles/story.scss'

const searchClient = algoliasearch('L62RK6OZ7R', '2598efc467448e3024c6ea87d9bf25a8')

const BlogPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [sidebarClass, setSidebarClass] = useState("sidebar close")
    const openHandler = () => {
      if (!sidebarOpen) {
        setSidebarOpen(true)
        setSidebarClass("sidebar")
      } else if (sidebarOpen) {
        setSidebarOpen(false)
        setSidebarClass("sidebar close")
      }
    }
    const sidebarCloseHandler = () => {
      setSidebarOpen(false)
      setSidebarClass("sidebar close")
    }

    const hits = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
          sort: {
            fields:publishedDate,
            order:DESC
          }
        ){
          edges{
            node {
              name
              title
              slug
              publishedDate
              createdAt
              country
              occupation
              tags
              image1 {
                    fluid {
                        src
                    }
              }
            }
          }
        }
      }
    `)


    let sidebar = <Sidebar sidebar={sidebarClass} close={sidebarCloseHandler}></Sidebar>
    return (
        <div>
          <InstantSearch indexName="Blog" searchClient={searchClient}>
          
            <Layout>
            {sidebar}
            
              <MetaTags>
                <meta name="description" content="100+ Stories of Canadian Immigrants"/>
                <meta property="og:title" content="Stories"/>
              </MetaTags>
                
                <Head title="Blog"/>
                  <div className={blogStyles.Header} >
                    <h1>Migrant Stories</h1>
                    <div className={blogStyles.searchWrapper}>

                      <Toggle click={openHandler}/>
                    </div>
                  </div>

                  <div className={blogStyles.Hits}>
                    {hits.allContentfulBlogPost.edges.map((hit) => {
                      return(
                        <PostPreview hit={hit.node}/>
                      )
                    })}
                  </div>
                       
            </Layout>
            </InstantSearch>
        </div>
    )
}

export default BlogPage