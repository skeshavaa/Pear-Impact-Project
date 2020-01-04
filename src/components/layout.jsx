import React from 'react'

import Header from './header'
import Footer from './footer'
import '@templateStyles/index.module.scss'
import layoutStyles from '@compStyles/layout.module.scss'

const Layout = (props) => {
    return (
        <div>
        <Header />
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                {props.children}
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Layout