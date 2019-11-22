import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'
import { SocialIcon } from 'react-social-icons';
import instagram from '../Icons/instagram.png'
import facebook from '../Icons/facebook.svg'
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
            <div className={footerStyles.title}>
                <h1>Migrant Moments</h1>
                <h2>Stories collected by Azhar Laher</h2>
                <h2>Toronto, ON</h2>
                <ul className={footerStyles.icons}>
                    <li><SocialIcon bgColor="black" fgColor="white" url="http://twitter.com" /></li>
                    <li><SocialIcon bgColor="black" fgColor="white" url="https://www.facebook.com" /></li>
                    <li><SocialIcon bgColor="black" fgColor="white" url="https://www.instagram.com" /></li>
                    <li><SocialIcon bgColor="black" fgColor="white" url="https://www.linkedin.com" /></li>
                </ul>
            </div>
            <div className={footerStyles.pages}>
                <h1>Pages</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Stories</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className={footerStyles.pages}>
                <h1>More</h1>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <li>Link 4</li>
                </ul>
            </div>
            
        </footer>
    )
}

export default Footer