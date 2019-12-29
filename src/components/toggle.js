  
import React, {Fragment} from "react"
import "./componentStyles.css"

const Toggle = (props) => {
    return(
        <Fragment>
            <button id="toggle" onClick={props.click}>&#8801;<h1>Show/Hide Filters</h1></button>
        </Fragment>
    )
}

export default Toggle