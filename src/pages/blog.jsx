import React, {useState} from 'react'
//Components
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
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

    const openHandler = () => {
      if (!sidebarOpen) {
        setSidebarOpen(true)
      } else {
        setSidebarOpen(false)
      }
    }

    const sidebarCloseHandler = () => {
      setSidebarOpen(false)
    }

    let sidebar = <Sidebar sidebar={"sidebar close"} close={sidebarCloseHandler}></Sidebar>

    if (sidebarOpen) {
      sidebar = <Sidebar sidebar={"sidebar"} close={sidebarCloseHandler}></Sidebar>
    } else{
      sidebar = <Sidebar sidebar={"sidebar close"} close={sidebarCloseHandler}></Sidebar>
    }

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
                      <SearchBox translations={{ placeholder: 'Name, Title, Tags, Country'}} label="Search" defaultRefinement=""/>
                      <Toggle click={openHandler}/>
                    </div>
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