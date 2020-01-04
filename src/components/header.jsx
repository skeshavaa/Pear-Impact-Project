import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import ResponsiveMenu from 'react-responsive-navbar';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'

import headerStyles from '@compStyles/header.module.scss'

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
        menuOpenButton={<div className={headerStyles.menuWrap}><GiHamburgerMenu className={headerStyles.hamburger}/><h1>Migrant Moments</h1></div>}
        menuCloseButton={<div ><FaTimes className={headerStyles.close}/></div>}
        changeMenuOn="800px"
        largeMenuClassName={headerStyles.largeMenuClassname}
        smallMenuClassName={headerStyles.smallMenuClassname}
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
                    <li>
                        <Link className={headerStyles.navItem} className={headerStyles.hvrOverlineFromCenter} activeClassName={headerStyles.activeNavItem} to='/sub'>Subscribe</Link>
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