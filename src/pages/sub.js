import React from 'react'
import MetaTags from 'react-meta-tags'
import Layout from '../components/layout'
import Head from '../components/head'

import contactStyles from '../pages/contact.module.scss'


const Sub = () => {
    return (
        <div>
            <Head title="Subscribe!"/>
            <Layout>
                <MetaTags>
                    <meta name="description" content="100+ Stories of Canadian Immigrants"/>
                    <meta property="og:title" content="Subscribe!"/>
                </MetaTags>
                <div className={contactStyles.title}>
                    <h1>Feel Free To Contact Me!</h1>
                    <p>I'd love to hear your questions, thoughts, criticisms and more!</p>
                </div>

            <div className={contactStyles.formwrap}>
            <form
        action="https://formspree.io/moqvpqkp"
        method="POST"
      >
                    <div className={contactStyles.inputs}>
                        <input type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div className={contactStyles.inputs}>
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className={contactStyles.inputs}>
                        <input type="subject" name="subject" id="subject" placeholder="Subject" />
                    </div>
                    <div className={contactStyles.inputs}>
                        <textarea name="message" id="message" rows="6" placeholder="Message" required />
                    </div>
                    <div className={contactStyles.btncontainer}>
                        <button className={contactStyles.btnsend} type="submit">Send</button>
                    </div>
                </form>
            </div>
            </Layout>
        </div>
    )
}

export default Sub