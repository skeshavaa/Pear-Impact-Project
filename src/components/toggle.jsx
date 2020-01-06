  import React, {Fragment} from "react"
  //Styles
import "@compStyles/componentStyles.scss"

const Toggle = (props) => {
    return(
        <Fragment>
            <button id="toggle" onClick={props.click}>&#8801;<h1>Filters</h1></button>
        </Fragment>
    )
}

export default Toggle