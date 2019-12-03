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
                           <form name="contact2" action="#" method="POST" data-netlify-honeypot="bot-field" data-netlify="true" netlify>
                                <input type="hidden" name="bot-field" />
                                <input label="name" name="name" type="text" className={contactStyles.input} placeholder="Name"/>
                                <input label="email" name="mail" type="text" className={contactStyles.input} placeholder="Email Address"/>
                                <input label="phone" name="phone" type="text" className={contactStyles.input} placeholder="Phone"/>
                                <input label="msg" name="msg" type="text" className={contactStyles.input} placeholder="Subject"/>
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


                <form
    name="contactsd"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
    </div>
    <div>
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="6" required />
    </div>
    <div>
      <input type="submit" value="Drop a line" />
      <input type="reset" value="Eraser" />
    </div>
  </form>
            </Layout>
        </div>
    )
}

export default ContactPage