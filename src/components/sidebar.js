import React, { useState } from "react"
import "./componentStyles.css"
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Hits, RefinementList } from 'react-instantsearch-dom'

const searchClient = algoliasearch('L62RK6OZ7R', '2598efc467448e3024c6ea87d9bf25a8')


const Sidebar = (props) => {
    const [sidebarClass, setSidebarClass] = useState(props.sidebar)

    const closeHandler = (e) => {
        e.preventDefault()
        setSidebarClass("sidebar close")
        setTimeout(() => {
            props.close()
        }, 1000)
    }

    return(
        <div className={sidebarClass}>
            <h2>Sidebar</h2>
            <button id="close" onClick={closeHandler}>&times; close</button>
            <RefinementList attribute={"fields.country.en-US"} />
            <RefinementList attribute={"fields.occupation.en-US"} />
        </div>
    )
}

export default Sidebar