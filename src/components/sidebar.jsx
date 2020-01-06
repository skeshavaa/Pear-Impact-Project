import React, { useState } from "react"
//Components
import { Filters } from '@components'
//Styles
import "@compStyles/componentStyles.scss"

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
                <div className="block"></div>
            </div>
        </div>
    )
}

export default Sidebar