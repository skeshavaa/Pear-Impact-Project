import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import homeStyles from './home.module.scss'
import Azhar from '../Icons/Azhar2.png'



const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home"/>
            <div className={homeStyles.imageContainer}>
                <img src={Azhar}/>
                <div className={homeStyles.overlay}>
                    <div className={homeStyles.text}>
                        ABOUT AZHAR AND MIGRANT MOMENTS
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default IndexPage