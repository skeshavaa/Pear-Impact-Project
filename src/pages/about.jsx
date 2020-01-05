import React from 'react'
//Packages
import MetaTags from 'react-meta-tags'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
//Components
import { Layout, Head } from '@components';
import { graphql, useStaticQuery } from 'gatsby'
//Styles
import aboutStyles from '@pageStyles/about.module.scss'
//Pictures
import Azhar from '@images/Azhar.png'
import Unknown from '@images/unknown.png'


const AboutPage = () => {

    const query = useStaticQuery(graphql`
    query {
        allAboutJson{
        edges{
            node{
                about
            }
        }
        }
    }
    `)
    var aboutContent
    
    return (
        <div>
            
            <Layout>
                <MetaTags>
                    <meta name="description" content="100+ Stories of Canadian Immigrants"/>
                    <meta property="og:title" content="About"/>
                </MetaTags>
                <Head title="About"/>
                <div className={aboutStyles.cont}>
                    <div className={aboutStyles.imgContainer}>
                        <img src={Azhar} alt={Unknown}/>
                    </div>
                    
                    <div className={aboutStyles.content}>
                        <div>
                        <h1>About Azhar</h1>
                        {query.allAboutJson.edges.map((edge) => {
                            return(
                                <div>
                                <p>{edge.node.about}</p>
                                <br />
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default AboutPage