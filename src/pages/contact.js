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
                    <meta name="description" content="100+ Stories of Canadian Immigrants"/>
                    <meta property="og:title" content="Contact Me"/>
                </MetaTags>
                <div className={contactStyles.title}>
                    <h1>Feel Free To Contact Me!</h1>
                    <p>I'd love to hear your questions, thoughts, criticisms and more!</p>
                </div>
                <div className={contactStyles.wrapper}>
                   <div className={contactStyles.contactForm}>
                       <div className={contactStyles.inputFields}>
                           <form name="contact2" action="#" method="POST" action="/about" netlify-honeypot="bot-field" data-netlify="true">
                                <input type="hidden" name="bot-field" />
                                <input label="name" type="text" className={contactStyles.input} placeholder="Name"/>
                                <input label="email" type="text" className={contactStyles.input} placeholder="Email Address"/>
                                <input label="phone" type="text" className={contactStyles.input} placeholder="Phone"/>
                                <input label="msg" type="text" className={contactStyles.input} placeholder="Subject"/>
                           </form>
                       </div>
                       <div className={contactStyles.msg}>
                           <textarea placeholder="Message"></textarea>
                           <div className={contactStyles.btn}>
                               Submit
                           </div>
                       </div>
                   </div>
                </div>
                
            </Layout>
        </div>
    )
}

export default ContactPage