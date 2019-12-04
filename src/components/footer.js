import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'
import { SocialIcon } from 'react-social-icons';

import EmailListForm from '../components/EmailListForm'

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
                    <li><SocialIcon style={{ height: 25, width: 25 }} bgColor="black" fgColor="white" url="http://twitter.com" /></li>
                    <li><SocialIcon style={{ height: 25, width: 25 }} bgColor="black" fgColor="white" url="https://www.facebook.com" /></li>
                    <li><SocialIcon style={{ height: 25, width: 25 }} bgColor="black" fgColor="white" url="https://www.instagram.com" /></li>
                    <li><SocialIcon style={{ height: 25, width: 25 }} bgColor="black" fgColor="white" url="https://www.linkedin.com" /></li>
                </ul>
            </div>
            <div className={footerStyles.pages}>
                <h1>Pages</h1>
                <ul>
                    <Link to="/"><li><a href="www.google.com">Stories</a></li></Link>
                    <Link to="/home"><li><a href="www.google.com">Home</a></li></Link>
                    <Link to="/about"><li><a href="www.google.com">About</a></li></Link>
                    <Link to="/contact"><li><a href="www.google.com">Contact</a></li></Link>
                </ul>
            </div>
            {/*
            <div className={footerStyles.pages}>
                <h1>More</h1>
                <ul>
                    <li><a href="www.google.com">Link 1</a></li>
                    <li><a href="www.google.com">Link 2</a></li>
                    <li><a href="www.google.com">Link 3</a></li>
                    <li><a href="www.google.com">Link 4</a></li>
                </ul>
            </div>
            */}
            <EmailListForm/>
        </footer>
    )
}

export default Footer