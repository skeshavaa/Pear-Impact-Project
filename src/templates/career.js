import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import tagStyles from '../templates/tags.module.scss'
import unknown from '../Icons/unknown.png'
import postStyles from '../components/post-preview.module.scss'
import moment from 'moment'

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

const Country = (props) => {
    const currentTag = props.pageContext.slug
    const hits = []

    var safeCareer
    var career
    
    {props.data.allContentfulBlogPost.edges.map((edge) => {
        career = edge.node.occupation
        
        safeCareer = ""

        for (var i = 0; i < career.length; i++){
            if (career[i] == " "){
                safeCareer += "-"
            } else{
                safeCareer += career[i]
            }
        }


        if (currentTag == safeCareer){
            hits.push(edge)
        }
    })}
    

    return(
        <Layout>
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
                                <a>{country}</a>
                                <Link to={`/career/${currentTag}`}>{prof}</Link>
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