import React from 'react'
import MetaTags from 'react-meta-tags'
import Layout from '../components/layout'
import Head from '../components/head'
import Azhar from '../Icons/Azhar.png'
import aboutStyles from './about.module.scss'

const AboutPage = () => {
    return (
        <div>
            <Layout>
                <MetaTags>
                    <meta name="description" content="100+ Stories of Canadian Immigrants"/>
                    <meta property="og:title" content="About"/>
                </MetaTags>
                <Head title="About"/>
                <div className={aboutStyles.imgContainer}>
                    <img src={Azhar}/>
                </div>
                <div className={aboutStyles.content}>
                    <div>
                    <h1>About Azhar</h1>
                    <p>
                        Azhar is a father and husband, social entrepreneur, 
                        sports nut, teacher and business coach. He has worked in 
                        the Human Resources industry for over 25 years and held 
                        senior human resources positions in both South Africa and 
                        Canada, focusing on strategic planning, total rewards, employee 
                        relations and diversity. He lives in beautiful Toronto and is a 
                        published author.  He is currently Professor of Leadership and 
                        Human Resources at Seneca College in Toronto. Here are some 
                        interesting things about Azhar.
                        <br></br><br></br>

                        He has compiled the stories of 100+ Canadian immigrants and 
                        has posted it here on this blog. Feel free to contact him or any
                        of the featured interviees!
                    </p>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default AboutPage