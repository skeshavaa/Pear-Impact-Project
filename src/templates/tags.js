import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import tagStyles from '../templates/tags.module.scss'
import unknown from '../Icons/unknown.png'
import postStyles from '../components/post-preview.module.scss'
import moment from 'moment'
import MetaTags from 'react-meta-tags'

export const query = graphql`
query{
    allContentfulBlogPost{
      edges{
        node{
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

const Tags = (props) => {
    const currentTag = props.pageContext.slug
    const hits = []
    {props.data.allContentfulBlogPost.edges.map((edge) => {
        const allTags = edge.node.tags
        const arrTags = allTags.split(",")
        if (arrTags.includes(currentTag)){
            hits.push(edge)
        }
    })}

    

    return(
        <Layout>
            <MetaTags>
                    <meta name="description" content="100+ Stories of Canadian Immigrants"/>
                    <meta name="og:title" content={currentTag}/>
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

                var safeCareer = ""
                var safeCountry = ""

                for (var i = 0; i < prof.length; i++){
                    if (prof[i] == " "){
                        safeCareer += "-"
                    } else{
                        safeCareer += prof[i]
                    }
                }

                for (var i = 0; i < country.length; i++){
                    if (country[i] == " "){
                        safeCountry += "-"
                    } else{
                        safeCountry += country[i]
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
                                    Lorem ipsum Sed eiusmod esse aliqua sed 
                                    incididunt aliqua incididunt mollit id et
                                </p>
                            </div>
                            <div className={postStyles.EntryTag}>
                                <Link to={`/country/${safeCountry}`}>{country}</Link>
                                <Link to={`/career/${safeCareer}`}>{prof}</Link>
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

export default Tags