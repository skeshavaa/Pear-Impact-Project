import React from 'react'
import { RefinementList } from 'react-instantsearch-dom'

const Filters = () => {
    return(
        <div>
            <RefinementList attribute={"fields.country.en-US"} />
            <RefinementList attribute={"fields.occupation.en-US"} />
        </div>
    )
}

export default Filters