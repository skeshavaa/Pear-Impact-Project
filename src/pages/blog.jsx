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
    const [searchVal, setSearchVal] = useState("")
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

    const setSearch = (e) => {
      setSearchVal(e.target.value)
    }

    const hits = useStaticQuery(graphql`
  query BlogPageQuery {
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
    var searchData = [];

    hits.allContentfulBlogPost.edges.map((hit) => {
      
      if (
        hit.node.title.toString().toLowerCase().includes(searchVal.toLowerCase()) ||
        hit.node.name.toString().toLowerCase().includes(searchVal.toLowerCase()) ||
        hit.node.country.toString().toLowerCase().includes(searchVal.toLowerCase()) ||
        hit.node.occupation.toString().toLowerCase().includes(searchVal.toLowerCase())
        ){
          searchData.push(hit);
      }
    })

    const [data, setData] = useState(searchData);
    

    function filterData(bool, country){
      if (bool){
        const filteredData = hits.filter(function (hit) {
          return hit.node.country.toString() == country;
        })
        setData(filteredData)
      } else{

      }
      
    }

    console.log(data);

    let sidebar = <Sidebar hits={hits.allContentfulBlogPost.edges} sidebar={sidebarClass} close={sidebarCloseHandler} handleFilter={filterData}></Sidebar>
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
                      <input type="text" onChange={(e) => setSearch(e)}></input>
                      <Toggle click={openHandler}/>
                    </div>
                  </div>

                  <div className={blogStyles.Hits}>
                    {data.map((hit) => {
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