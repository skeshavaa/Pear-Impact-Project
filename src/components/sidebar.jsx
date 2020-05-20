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

    var countries = []

    props.hits.map((hit) => {
        if (countries.includes(hit.node.country) == false){
            countries.push(hit.node.country)
        }
    })

    console.log(props.hits)

    return(
        <div className={sidebarClass} >
            <div className="absolute">
                <h2>Filter by:</h2>
                <Filters countries={countries}/>
                <div className="btnwrap"><button onClick={props.close} >Close</button></div>
                <div className="block"></div>
            </div>
        </div>
    )
}

export default Sidebar