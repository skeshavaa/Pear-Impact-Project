import React from 'react'
//Packages
import ResponsiveMenu from 'react-responsive-navbar';
//Components
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
//Styles
import headerStyles from '@compStyles/header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
            allNavJson{
                edges{
                    node{
                        Link
                        Content
                    }
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
                    {data.allNavJson.edges.map((edge) => {
                        const linke = edge.node.Link
                        const Content = edge.node.Content
                        return(
                            <li>
                                <Link className={headerStyles.navItem} className={headerStyles.hvrOverlineFromCenter} activeClassName={headerStyles.activeNavItem} to={`${linke}`}>{Content}</Link>
                            </li>
                        )
                    })}
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