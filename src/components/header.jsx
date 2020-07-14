import React from 'react'
//Packages
import ResponsiveMenu from 'react-responsive-navbar';
//Components
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import Flag from '@images/canadaflag.png'
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
        menuOpenButton={<div className={headerStyles.menuWrap}><GiHamburgerMenu className={headerStyles.hamburger}/><h1>Stories of New Canadians</h1></div>}
        menuCloseButton={<div ><FaTimes className={headerStyles.close}/></div>}
        changeMenuOn="940px"
        largeMenuClassName={headerStyles.largeMenuClassname}
        smallMenuClassName={headerStyles.smallMenuClassname}
        menu={
            <div className={headerStyles.outer}>
            <header className={headerStyles.header}>
            <div className={headerStyles.titleWithFlag}>
                <img src={Flag} height="50px" width="100px" className={headerStyles.flag}/>
                <h1 className={headerStyles.name}>
                    
                    <Link className={headerStyles.title}to='/'>
                        Stories of New Canadians
                    </Link>  
                </h1>
            </div>
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
        </div>
        }
      />
    )
}

export default Header