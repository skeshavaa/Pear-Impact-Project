import React, {useState, useEffect} from 'react'
//Components
import { InstantSearch, SearchBox, Hits, connectHits } from 'react-instantsearch-dom'
import { Layout, Head, Toggle, Sidebar, PostPreview } from '@components' 
//Packages
import MetaTags from 'react-meta-tags'
import algoliasearch from 'algoliasearch'
//Styles
import blogStyles from '@pageStyles/blog.module.scss'
import '@pageStyles/story.scss'

var searchClient = algoliasearch('L62RK6OZ7R', '15a379a9961f8ee6878adeccd35a474f', {protocol: 'https:'});


const BlogPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [time, setTime] = useState(false)
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
    let sidebar = <Sidebar sidebar={sidebarClass} close={sidebarCloseHandler}></Sidebar>

    const Hiis = ({ hits }) => {
      return(
        <div>
          {hits.map((hit) => {
            return(
              <PostPreview hit={hit} />
            )
          })}
        </div>
      )
    }

    const Rev = ({ hits }) => {
      hits = hits.reverse();
      return(
        <div>
          {hits.map((hit) => {
            return(
              <PostPreview hit={hit} />
            )
          })}
        </div>
      )
    }

    const CustomHits = time ? connectHits(Hiis) : connectHits(Rev);

    const handler = (e) => {
      e.preventDefault();
      setTime(!time);
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
                      <button onClick={() => {setTime(!time)}}>hi</button>
                    </div>
                  </div>

                  <div className={blogStyles.Hits}>
                    {/* <Hits hitComponent={PostPreview}/>  */}
                    <CustomHits />
                  </div>
                       
            </Layout>
            </InstantSearch>
        </div>
    )
}

export default BlogPage