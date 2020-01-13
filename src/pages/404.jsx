import React from 'react'
//Components
import { Link } from 'gatsby'
import { Head, Layout } from '@components'
//Styles
import fourStyles from '@pageStyles/404.module.scss'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <div className={fourStyles.content}>
                <h1>Oops, looks like this page doesn't exist</h1>
                <h2>Try going back home and refreshing the page, then check back at this link and you may find what you're looking for!</h2>
                <Link to="/">Head back Home</Link>
            </div>
        </Layout>
    )
}

export default NotFound