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

{/*

                <div className={contactStyles.wrapper}>
                   <div className={contactStyles.contactForm}>
                       <div className={contactStyles.inputFields}>
                           <form name="contact2" method="post" data-netlify-honeypot="bot-field" data-netlify="true" netlify>
                                <input type="hidden" name="bot-field" />
                                <input label="name" name="name" type="text" className={contactStyles.input} placeholder="Name"/>
                                <input label="email" name="email" type="email" className={contactStyles.input} placeholder="Email Address"/>
                                <input label="msg" name="msg" type="text" className={contactStyles.input} placeholder="Subject"/>
                                <button type="submit">Submit</button>
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

*/}
            <div className={contactStyles.formwrap}>
                <form name="contactsd" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
                    <div className={contactStyles.inputs}>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className={contactStyles.inputs}>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className={contactStyles.inputs}>
                        <textarea name="message" id="message" rows="6" required />
                    </div>
                    <div>
                        <input type="submit" value="Drop a line" />
                    </div>
                </form>
            </div>
            </Layout>
        </div>
    )
}

export default ContactPage