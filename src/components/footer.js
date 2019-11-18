import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

import instagram from '../Icons/instagram.png'
import facebook from '../Icons/facebook.png'
import twitter from '../Icons/twitter.png'
import email from '../Icons/email.png'
import linkedin from '../Icons/linkedin.png'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }   
    `)

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.header}>
                <div className={footerStyles.title}>
                    <h1>Pear Impact Project</h1>
                </div>
                <div className={footerStyles.icons}>
                    <img src={instagram}></img>
                    <img src={facebook}></img>
                    <img src={twitter}></img>
                    <img src={linkedin}></img>
                    <img src={email}></img>
                </div>
            </div>

            <div className={footerStyles.content}>
                <div className={footerStyles.pages}>
                    <ul>
                        <p>The Project</p>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li>Azhar's Website</li>
                    </ul>
                </div>

                <div className={footerStyles.info}>
                    <ul>
                        <p>More Information</p>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                        <li>Link 4</li>
                    </ul>
                </div>

                <div className={footerStyles.subscribe}>
                    <h2>Subscribe To Our Newsletter</h2>
                    <h3>Receive updates whenever Azhar uploads a new story!</h3>
                    <input placeholder="Enter your email"></input>
                </div>
            </div>
        </footer>
    )
}

export default Footer