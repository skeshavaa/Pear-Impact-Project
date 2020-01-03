import React, { useState } from "react"
import "./componentStyles.css"
import Filters from './filters'


const Sidebar = (props) => {
    const [sidebarClass, setSidebarClass] = useState(props.sidebar)

    const closeHandler = (e) => {
        e.preventDefault()
        setSidebarClass("sidebar close")    
    }
    return(
        <div className={props.sidebar} >
            <h2>Filter by:</h2>
            <Filters />
            <div className="btnwrap"><button onClick={props.close}>Close</button></div>
        </div>
    )
}

export default Sidebar