import React from 'react'
import { graphql, Link } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
import Layout from '../components/layout'
import templateStyles from '../templates/blog.module.scss'
import postStyles from '../components/post-preview.module.scss'
import MetaTags from 'react-meta-tags'
import { Hits } from 'react-instantsearch-dom'
import unknown from '../images/unknown.png'
import moment from 'moment'

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMM Do, YYYY")
      tags
      country
      content {
        json
      }
      image1 {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulBlogPost{
      edges{
        node{
          title
          country
          occupation
          tags
          slug
          image1{
            fluid {
            ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }`


const Blog = (props) => {
  const hits = []
  const title = props.data.contentfulBlogPost.title
  const country = props.data.contentfulBlogPost.country
  const currentTags = props.data.contentfulBlogPost.tags.split(",")
  const titleArr = []
  const hitTitleArr = []

  {props.data.allContentfulBlogPost.edges.map((edge) => {
    const diffTags = edge.node.tags.split(",")
    const found = currentTags.some(r=> diffTags.indexOf(r) >= 0)
    titleArr.push(edge.node.title)
    if (edge.node.title != title && edge.node.country == country && hits.length < 3){
      hits.push(edge)
      hitTitleArr.push(edge.node.title)
    } else if (found && edge.node.title != title && hits.length < 3){
      hits.push(edge)
      hitTitleArr.push(edge.node.title)
    }
  })}

  var i
  var allPosts = props.data.allContentfulBlogPost.edges
  for (i = 0; i < allPosts.length; i++){
    if (hitTitleArr.includes(titleArr[i]) == false && titleArr[i] != (title)){
      hits.push(allPosts[i])
    }
    if (hits.length == 3){
      break
    }
  }




  const tags = props.data.contentfulBlogPost.tags
  const arrTags = tags.split(",")
    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <MetaTags>
              <meta name="description" content="100+ Stories of Canadian Immigrants"/>
              <meta name="og:title" content={props.data.contentfulBlogPost.title}/>
            </MetaTags>

            <h1 className={templateStyles.title}>{props.data.contentfulBlogPost.title}</h1>
            <div className={templateStyles.imageContainer}>
              <img  src={props.data.contentfulBlogPost.image1.fluid.src} />
            </div>
            <div className={templateStyles.tags}>
              <h1>Tags: </h1>
              {arrTags.map((tag) => {
                return (
                  <Link to={`/tag/${tag}`}>{tag}</Link>
                )
              })}
            </div>
            <div className={templateStyles.content}>
              {documentToReactComponents(props.data.contentfulBlogPost.content.json)}
            </div>







            <div className={templateStyles.outerWrapper}>
              <h1>Recommended Posts</h1>
              <div className={templateStyles.recommendedWrapper}>
              {hits.map((hit) => {

              const slug = hit.node.slug
              const tagss = hit.node.tags
              const arrTags = tagss.split(",")
              const title = hit.node.title
              const name = hit.node.name
              const prof = hit.node.occupation
              const country = hit.node.country
              const date = hit.node.publishedDate
              const image = hit.node.image1.fluid.src

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
                              {arrTags.map((tagg) => {
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
            </div>


        </Layout>
    )
}

export default Blog