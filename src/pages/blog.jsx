import React, {useState, useEffect} from 'react'
//Components
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom'
import { Layout, Head, Toggle, Sidebar, PostPreview } from '@components' 
//Packages
import MetaTags from 'react-meta-tags'
import algoliasearch from 'algoliasearch'
//Styles
import blogStyles from '@pageStyles/blog.module.scss'
import '@pageStyles/story.scss'

var searchClient = algoliasearch('L62RK6OZ7R', '15a379a9961f8ee6878adeccd35a474f', {protocol: 'https:'});

var index = searchClient.initIndex('Blog')

const BlogPage = () => {
    const [flip, setFlip] = useState([false, 'asc'])
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

    const handler1 = () => {
      setFlip([false, 'asc']);
    }

    const handler2 = () => {
      setFlip([false, 'desc'])
    }

    useEffect(() => {
      const asc = async() => {
        await index.setSettings({
          ranking: [
            'asc(sys.createdAt)',
            'typo',
            'geo',
            'words',
            'filters',
            'proximity',
            'attribute',
            'exact',
            'custom'
          ]
        }).then(resp => {
          setFlip([true, flip[1]])
        })
      }

      const desc = async() => {
        await index.setSettings({
          ranking: [
            'desc(sys.createdAt)',
            'typo',
            'geo',
            'words',
            'filters',
            'proximity',
            'attribute',
            'exact',
            'custom'
          ]
        })

        
      }

      if (flip[1] == "asc"){
        asc()
      } else{
        desc()
      }

      return (() => {
        setFlip([true, flip[1]])
      })
    }, [flip[0]]);

    console.log(index)

    const sidebarCloseHandler = () => {
      setSidebarOpen(false)
      setSidebarClass("sidebar close")
    }
    let sidebar = <Sidebar sidebar={sidebarClass} close={sidebarCloseHandler}></Sidebar>
    return (
        <div>
          <InstantSearch indexName="Blog" searchClient={searchClient} index={index} refresh={flip[0]}>
          
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
                      <button onClick={handler1}>hi</button>
                      <button onClick={handler2}>hi</button>
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