import React, { useState } from "react"
import "@compStyles/componentStyles.scss"
import Filters from './filters'


const Sidebar = (props) => {
    const [sidebarClass, setSidebarClass] = useState(props.sidebar)

    const closeHandler = (e) => {
        e.preventDefault()
        setSidebarClass("sidebar close")    
    }
    return(
        <div className={props.sidebar} >
            <div className="absolute">
            <h2>Filter by:</h2>
            <Filters />
            <div className="btnwrap"><button onClick={props.close}>Close</button></div>
            </div>
        </div>
    )
}

export default Sidebar