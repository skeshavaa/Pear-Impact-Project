import React from 'react'
import MetaTags from 'react-meta-tags'
import Layout from '../components/layout.jsx'
import Head from '../components/head.jsx'

import contactStyles from '../pages/contact.module.scss'
import subStyles from '../pages/sub.module.scss'

import Email from '../components/email'


const Sub = () => {
    return (
            <Layout>
                <Head title="Subscribe"/>
                <MetaTags>
                    <meta name="description" content="100+ Stories of Canadian Immigrants"/>
                    <meta property="og:title" content="Subscribe!"/>
                </MetaTags>
                <div className={subStyles.title}>
                    <h1>Subscribe to Migrant Moments!</h1>
                    <p>Receive updates whenever Azhar updates Migrant Moments with a new story!</p>

                    <div><Email /></div>
                </div>
                
            </Layout>
    )
}

export default Sub