import React, { useState } from "react"
//Components
import { Filters } from '@components'
//Styles
import "@compStyles/componentStyles.scss"

const Sidebar = (props) => {
    const [sidebarClass, setSidebarClass] = useState(props.sidebar);

    React.useEffect(() => {
        setSidebarClass(props.sidebar);
    }, [props.sidebar])


    return(
        <div className={sidebarClass} >
            <div className="absolute">
                <h2>Filter by:</h2>
                <Filters />
                <div className="btnwrap"><button onClick={props.close} >Close</button></div>
                <div className="block"></div>
            </div>
        </div>
    )
}

export default Sidebar