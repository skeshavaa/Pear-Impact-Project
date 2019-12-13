import React from 'react'
import MetaTags from 'react-meta-tags'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import homeStyles from './home.module.scss'
import Azhar from '../Icons/Azhar2.png'
import moment from 'moment'


const IndexPage = () => {

    const newPosts = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
          sort: {
            fields:publishedDate,
            order:DESC
          }
          limit: 3
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


    return (
        <Layout>
            <MetaTags>
                <meta name="description" content="100+ Stories of Canadian Immigrants"/>
                <meta property="og:title" content="Home"/>
              </MetaTags>
            <Head title="Home"/>
            <div className={homeStyles.First}>
                <div className={homeStyles.imageContainer}>
                    <Link to='/about'>
                    <img src={Azhar}/>
                    </Link>
                </div>
                <div className={homeStyles.AzharContent}>
                    <h1>About Migrant Moments</h1>
                    <p>
                        Azhar has compiled the stories of over 100+
                        Canadian immigrants. He has documented their 
                        struggles, backgrounds, successes, failures,
                        current projects and more! 

                        <br/><br/>
                        Browse through any blog post, at the end will
                        be a contact form to contact the author of the 
                        post of you're reading! Feel free to contact Azhar
                        by clicking the Contact me button above as well!
                    </p>
                </div>
            </div>

            <div className={homeStyles.postTitle}>
                <h1>LATEST POSTS</h1>
            </div>
            
            <div className={homeStyles.posts}>
                {newPosts.allContentfulBlogPost.edges.map((edge) => {
                    const slug = edge.node.slug
                    const title = edge.node.title
                    const name = edge.node.name
                    const prof = edge.node.occupation
                    const country = edge.node.country
                    const date = edge.node.publishedDate
                    const image = edge.node.image1.fluid.src
                    return (
                        <div className={homeStyles.EventContainer}>
                            <Link to={`/blog/${slug}`}>
                            <div className={homeStyles.test}>
                                <img src={image}/>
                            </div>
                            <div className={homeStyles.TextContainer}>
                                <div className={homeStyles.EntryDate}>
                                    <a>{moment(date).format('LL')}</a>
                                </div>
                                <div className={homeStyles.EntryTitle}>
                                    <a>{title}</a>
                                    <p>By: {name}</p>
                                </div>
                                <div className={homeStyles.EntryTag}>
                                    <a>{country}</a>
                                    <a>{prof}</a>
                                </div>
                            </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </Layout>
    )

}

export default IndexPage