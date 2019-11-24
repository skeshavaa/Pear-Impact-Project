import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'


import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }   
    `)


    return (
        <header className={headerStyles.header}>
            <h1 className={headerStyles.name}>
                <Link className={headerStyles.title}to='/'>
                    Migrant Moments
                </Link>
            </h1>
            <nav className={headerStyles.nav}>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} className={headerStyles.hvrOverlineFromCenter} activeClassName={headerStyles.activeNavItem} to='/'>Stories</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} className={headerStyles.hvrOverlineFromCenter} activeClassName={headerStyles.activeNavItem} to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} className={headerStyles.hvrOverlineFromCenter} activeClassName={headerStyles.activeNavItem} to='/about'>About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} className={headerStyles.hvrOverlineFromCenter} activeClassName={headerStyles.activeNavItem} to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header