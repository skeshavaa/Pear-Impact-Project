import React from 'react'
//Packages
import MetaTags from 'react-meta-tags'
//Components
import { Layout, Head, Email } from '@components'
//Styles
import subStyles from '@pageStyles/subscribe.module.scss'

const Sub = () => {
    return (
            <Layout>
                <Head title="Subscribe"/>
                <MetaTags>
                    <meta name="description" content="100+ Stories of Canadian Immigrants"/>
                    <meta property="og:title" content="Subscribe!"/>
                </MetaTags>
                <div className={subStyles.title}>
                    <h1>Subscribe to Stories of New Canadians!</h1>
                    <p>Receive updates whenever Azhar updates Stories of New Canadians with a new story!</p>

                    <div><Email /></div>
                </div>
                
            </Layout>
    )
}

export default Sub