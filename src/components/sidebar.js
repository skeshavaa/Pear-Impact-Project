import React, { useState } from "react"
import "./componentStyles.css"
import algoliasearch from 'algoliasearch/lite'
import { RefinementList } from 'react-instantsearch-dom'
import Filters from '../components/filters'


const Sidebar = (props) => {
    const [sidebarClass, setSidebarClass] = useState(props.sidebar)

    const closeHandler = (e) => {
        e.preventDefault()
        setSidebarClass("sidebar close")    
    }
    return(
        <div className={props.sidebar} >
            <h2>Sidebar</h2>
            <Filters />
        </div>
    )
}

export default Sidebar