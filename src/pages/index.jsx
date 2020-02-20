import React from 'react'
//Packages
import MetaTags from 'react-meta-tags'
import moment from 'moment'
//Components
import { graphql, useStaticQuery, Link } from 'gatsby'
import { Head, Layout, MapChart } from '@components'
//Styles
import homeStyles from '@pageStyles/home.module.scss'
import postStyles from '@compStyles/post-preview.module.scss'
//Pictures
import Azhar from '@images/Azhar2.png'
import Unknown from '@images/unknown.png'



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
                    <img src={Azhar} alt={Unknown}/>
                    </Link>
                </div>
                <div className={homeStyles.AzharContent}>
                    <h1 href="#asdf">About Migrant Moments</h1>
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

                    <h2>Scroll down for the latest posts!</h2>
                </div>
            </div>

            <MapChart />

            <div className={homeStyles.postTitle}>
                <h1>LATEST POSTS</h1>
            </div>
            
            <div className={homeStyles.posts}>
                {newPosts.allContentfulBlogPost.edges.map((edge) => {
                    const slug = edge.node.slug
                    const tagss = edge.node.tags
                    const arrTags = tagss.split(",")
                    const title = edge.node.title
                    const name = edge.node.name
                    const prof = edge.node.occupation
                    const country = edge.node.country
                    const date = edge.node.publishedDate
                    const image = edge.node.image1.fluid.src


                    var safeCareer = ""

                    for (var i = 0; i < prof.length; i++){
                        if (prof[i] == " "){
                            safeCareer += "-"
                        } else{
                            safeCareer += prof[i]
                        }
                    }

                    var safeCountry = ""

                    for (var i = 0; i < country.length; i++){
                        if (country[i] == " "){
                            safeCountry += "-"
                        } else{
                            safeCountry += country[i]
                        }
                    }

                    return (
                        <div className={homeStyles.EventContainer}>
                            <Link to={`/blog/${slug}`}>
                            <div className={homeStyles.test}>
                                <img src={image} alt={Unknown}/>
                            </div>
                            <div className={homeStyles.TextContainer}>
                                <div className={postStyles.EntryDate}>
                                    <a>{moment(date).format('LL')}</a>
                                </div>
                                <div className={postStyles.EntryTitle}>
                                    <a>{title}</a>
                                    <p>By: {name}</p>
                                </div>
                                <div className={postStyles.EntryTag}>
                                    <Link to={`/country/${safeCountry}`}>{country}</Link>
                                    <Link to={`/career/${safeCareer}`}>{prof}</Link>
                                    {arrTags.map((tags) => {
                                        return (
                                            <Link to={`/tag/${tags}`}>{tags}</Link>
                                        )
                                    })}
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