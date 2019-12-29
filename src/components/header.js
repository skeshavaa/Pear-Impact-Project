import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import ResponsiveMenu from 'react-responsive-navbar';

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
        <ResponsiveMenu
        menuOpenButton={<div><h1>asdf</h1></div>}
        menuCloseButton={<div><h2>asdf</h2></div>}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
            <header className={headerStyles.header}>
            <h1 className={headerStyles.name}>
                <Link className={headerStyles.title}to='/'>
                    Migrant Moments
                </Link>
                
            </h1>
            <nav className={headerStyles.nav}>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} className={headerStyles.hvrOverlineFromCenter} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} className={headerStyles.hvrOverlineFromCenter} activeClassName={headerStyles.activeNavItem} to='/blog'>Stories</Link>
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
        }
      />
    )
}

{/*
<header className={headerStyles.header}>
            <h1 className={headerStyles.name}>
                <Link className={headerStyles.title}to='/'>
                    Migrant Moments
                </Link>
                
            </h1>
            <nav className={headerStyles.nav}>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} className={headerStyles.hvrOverlineFromCenter} activeClassName={headerStyles.activeNavItem} to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} className={headerStyles.hvrOverlineFromCenter} activeClassName={headerStyles.activeNavItem} to='/blog'>Stories</Link>
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
*/}

export default Header