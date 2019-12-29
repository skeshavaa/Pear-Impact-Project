import React from 'react'
import { defaultRefinement ,RefinementList, SortBy } from 'react-instantsearch-dom'

const Filters = () => {
    return(
        <div>
            <RefinementList attribute={"fields.country.en-US"} />
            <RefinementList attribute={"fields.occupation.en-US"} />
        </div>
    )
}

export default Filters