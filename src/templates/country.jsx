import React from 'react'
//Packages
import moment from 'moment'
import MetaTags from 'react-meta-tags'
//Components
import { graphql, Link } from 'gatsby'
import { Head, Layout } from '@components'
//Styles
import tagStyles from '@templateStyles/tags.module.scss'
import postStyles from '@compStyles/post-preview.module.scss'
//Pictures
import unknown from '../images/unknown.png'


export const query = graphql`
query{
    allContentfulBlogPost{
      edges{
        node{
          name
          slug
          title
          country
          occupation
          tags
          image1{
              fluid {
            ...GatsbyContentfulFluid
              }
          }
        }
      }
    }
  }
  ` 

const Country = (props) => {
    const currentTag = props.pageContext.slug
    const hits = []

    var safeCountry
    var country
    
    {props.data.allContentfulBlogPost.edges.map((edge) => {
        country = edge.node.country
        
        safeCountry = ""

        for (var i = 0; i < country.length; i++){
            if (country[i] == " "){
                safeCountry += "-"
            } else{
                safeCountry += country[i]
            }
        }


        if (currentTag == safeCountry){
            hits.push(edge)
        }
    })}
    

    return(
        <Layout>

            <Head title={currentTag}/>
            <MetaTags>
                    <meta name="description" content="100+ Stories of Canadian Immigrants"/>
                    <meta name="og:title" content={country}/>
            </MetaTags>

            <h1 className={tagStyles.title}>Blog Post tagged with "{currentTag}"</h1>
            <div className={tagStyles.wrapper}>
            {hits.map((hit) => {
                const image = hit.node.image1.fluid.src
                const slug = hit.node.slug
                const title = hit.node.title
                const tags = hit.node.tags
                const listTags = tags.split(",")
                const name = hit.node.name
                const country = hit.node.country
                const prof = hit.node.occupation
                const date = hit.node.publishedDate

                var safeProf = ""

                for (var i = 0; i < prof.length; i++){
                    if (prof[i] == " "){
                        safeProf += "-"
                    } else{
                        safeProf += prof[i]
                    }
                }
                
                return(
                    <div className={postStyles.EventContainer}>
                        <Link to={`/blog/${slug}`}>
                        <div className={postStyles.ImageContainer}>
                            <img src={ image } alt={unknown}/>
                        </div>
                        <div className={postStyles.TextContainer}>
                            <div className={postStyles.EntryDate}>
                                <a>{moment(date).format('LL')}</a>
                            </div>
                            <div className={postStyles.EntryTitle}>
                                <a>{title}</a>
                                <p>By: {name}</p>
                            </div>
                            <div className={postStyles.EntryExcerpt}>
                                <p>
                                    
                                </p>
                            </div>
                            <div className={postStyles.EntryTag}>
                                <Link to={`/country/${currentTag}`}>{country}</Link>
                                <Link to={`/career/${safeProf}`}>{prof}</Link>
                                {listTags.map((tagg) => {
                                    return (
                                    <Link to={`/tag/${tagg}`}>
                                    {tagg}
                                    </Link>
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

export default Country