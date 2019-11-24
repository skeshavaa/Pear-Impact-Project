import React from 'react'

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
          limit: 2
        ){
          edges{
            node {
              title
              slug
              publishedDate(formatString:"MMM Do, YYYY")
              country
              occupation
            }
          }
        }
      }
    `)


    return (
        <Layout>
            <Head title="Home"/>
            <div className={homeStyles.First}>
                <div className={homeStyles.imageContainer}>
                    <img src={Azhar}/>
                    <div className={homeStyles.overlay}>
                        <div className={homeStyles.text}>
                            ABOUT AZHAR AND MIGRANT MOMENTS
                        </div>
                    </div>
                </div>
                <div className={homeStyles.AzharContent}>
                    <h1>About Migrant Moments</h1>
                </div>
            </div>
            
            <div className={homeStyles.posts}>
                {newPosts.allContentfulBlogPost.edges.map((edge) => {
                    const slug = edge.node.slug
                    const title = edge.node.title
                    const name = edge.node.name
                    const prof = edge.node.occupation
                    const country = edge.node.country
                    const date = edge.node.publishedDate
                    return (
                        <div className={homeStyles.EventContainer}>
                            <Link to={`/blog/${slug}`}>
                            <div className={homeStyles.PImageContainer}>
                            </div>
                            <div className={homeStyles.TextContainer}>
                                <div className={homeStyles.EntryDate}>
                                    <a>{moment(date).format('LL')}</a>
                                </div>
                                <div className={homeStyles.EntryTitle}>
                                    <a>{title}</a>
                                </div>
                                <div className={homeStyles.EntryExcerpt}>
                                    <p>
                                        Lorem ipsum Sed eiusmod esse aliqua sed 
                                        incididunt aliqua incididunt mollit id et 
                                        sit proident dolor nulla sed commodo est 
                                        ad minim elit reprehenderit nisi officia 
                                        aute incididunt velit sint in aliqua..
                                    </p>
                                </div>
                                <div className={homeStyles.EntryTag}>
                                    <a>Name: <span>{name}</span></a>
                                    <a>Country: <span>{country}</span></a>
                                    <a>Occupation: <span>{prof}</span></a>
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