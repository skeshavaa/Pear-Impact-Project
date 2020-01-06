import React from 'react'
//Components
import { Link } from 'gatsby'
import { Head, Layout } from '@components'

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <h1>Page not found!</h1>
            <p><Link to="/">Head Home</Link></p>
        </Layout>
    )
}

export default NotFound