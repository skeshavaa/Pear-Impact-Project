import React from 'react'
import { RefinementList } from 'react-instantsearch-dom'

const Filters = () => {
    return(
        <div className="filters">
            <h1>Countries</h1>
            <RefinementList attribute={"fields.country.en-US"} />
            <h1>Occupation</h1>
            <RefinementList attribute={"fields.occupation.en-US"} />
        </div>
    )
}

export default Filters