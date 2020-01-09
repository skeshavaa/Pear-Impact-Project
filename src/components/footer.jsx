import React from 'react'
//Components
import { Link, graphql, useStaticQuery } from 'gatsby'
import { SocialIcon } from 'react-social-icons';
//Styles
import footerStyles from '@compStyles/footer.module.scss'

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
            <div className={footerStyles.inner}>
            <div className={footerStyles.title}>
                <h1>Migrant Moments</h1>
                <h2>Stories collected by Azhar Laher</h2>
                <h2>Toronto, ON</h2>
                <ul className={footerStyles.icons}>
                    <li><SocialIcon style={{ height: 25, width: 25 }} bgColor="black" fgColor="white" url="http://twitter.com" /></li>
                    <li><SocialIcon style={{ height: 25, width: 25 }} bgColor="black" fgColor="white" url="https://www.facebook.com" /></li>
                    <li><SocialIcon style={{ height: 25, width: 25 }} bgColor="black" fgColor="white" url="https://www.instagram.com" /></li>
                    <li><SocialIcon style={{ height: 25, width: 25 }} bgColor="black" fgColor="white" url="https://www.linkedin.com" /></li>
                </ul>
            </div>
            <div className={footerStyles.pages}>
                <h1>Pages</h1>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/sub"><li>Subscribe</li></Link>
                </ul>
            </div>
            </div>
        </footer>
    )
}

export default Footer