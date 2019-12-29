import React from 'react'
import MetaTags from 'react-meta-tags'
import Layout from '../components/layout'
import Head from '../components/head'

import contactStyles from '../pages/contact.module.scss'
import subStyles from '../pages/sub.module.scss'

import EmailListForm from '../components/EmailListForm'


const Sub = () => {
    return (
        <div>
            <Head title="Subscribe!"/>
            <Layout>
                <MetaTags>
                    <meta name="description" content="100+ Stories of Canadian Immigrants"/>
                    <meta property="og:title" content="Subscribe!"/>
                </MetaTags>
                <div className={subStyles.title}>
                    <h1>Subscribe to Migrant Moments!</h1>
                    <p>Receive updates whenever Azhar updates Migrant Moments with a new story!</p>

                    <div><EmailListForm /></div>
                </div>
                
            </Layout>
        </div>
    )
}

export default Sub