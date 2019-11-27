import React from 'react'
import MetaTags from 'react-meta-tags'
import Layout from '../components/layout'
import Head from '../components/head'

import contactStyles from '../pages/contact.module.scss'

const ContactPage = () => {
    return (
        <div>
            <Head title="Contact"/>
            <Layout>
                <MetaTags>
                    <meta name="Migrant Moments" content="100+ Stories of Canadian Immigrants"/>
                    <meta property="og:title" content="Contact Me"/>
                </MetaTags>
                <div className={contactStyles.title}>
                    <h1>Feel Free To Contact Me!</h1>
                    <p>I'd love to hear your questions, thoughts, criticisms and more!</p>
                </div>
                <div className={contactStyles.wrapper}>
                   <div className={contactStyles.contactForm}>
                       <div className={contactStyles.inputFields}>
                           <input type="text" className={contactStyles.input} placeholder="Name"/>
                           <input type="text" className={contactStyles.input} placeholder="Email Address"/>
                           <input type="text" className={contactStyles.input} placeholder="Phone"/>
                           <input type="text" className={contactStyles.input} placeholder="Subject"/>
                       </div>
                       <div className={contactStyles.msg}>
                           <textarea placeholder="Message"></textarea>
                           <div className={contactStyles.btn}>Send</div>
                       </div>
                   </div>
                </div>
            </Layout>
        </div>
    )
}

export default ContactPage