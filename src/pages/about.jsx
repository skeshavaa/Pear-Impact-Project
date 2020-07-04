import React from 'react'
//Packages
import MetaTags from 'react-meta-tags'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
//Components
import { Layout, Head } from '@components';
import { graphql, useStaticQuery } from 'gatsby'
//Styles
import aboutStyles from '@pageStyles/about.module.scss'
import templateStyles from '@templateStyles/blogPage.module.scss'
//Pictures
import Azhar from '@images/Azhar.png'
import Unknown from '@images/unknown.png'

export const aboutData = graphql`
    query{
        allContentfulAbout{
            nodes{
            content{
            json
            }
        } 
        }
    }
`


const AboutPage = (props) => {
    const aboutContent = props.data.allContentfulAbout.nodes[0].content.json;
    console.log(aboutContent)
    return (
        <div>

            <Layout>
                <MetaTags>
                    <meta name="description" content="100+ Stories of Canadian Immigrants" />
                    <meta property="og:title" content="About" />
                </MetaTags>
                <Head title="About" />
                <div className={aboutStyles.cont}>
                    <div className={aboutStyles.outerWrapper}>
                        <div className={aboutStyles.imgContainer}>
                            <img src={Azhar} alt={Unknown} />
                        </div>
                    </div>

                    <div className={aboutStyles.content}>
                        <div>
                            <h1>About Azhar</h1>
                            
                        </div>
                    </div>
                    <div className={templateStyles.content}>
                                {documentToReactComponents(aboutContent)}
                            </div>
                </div>
            </Layout>
        </div>
    )
}

export default AboutPage