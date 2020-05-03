import React from 'react'
//Components
import { RefinementList } from 'react-instantsearch-dom'

const Filters = () => {

    const [ countryVisibility, setCountryVisibility ] = React.useState('none')
    const onCountryClick = () => setCountryVisibility(countryVisibility === 'block' ? 'none' : 'block')

    const [ occupationVisibility, setOccupationVisibility ] = React.useState('none')
    const onOccupationClick = () => setOccupationVisibility(occupationVisibility === 'block' ? 'none' : 'block')

    return(
        <div className="filters">
            <div onClick={onCountryClick} style={{display: 'inline-flex'}}>
                <h1 style={{marginRight: '3px'}}>{ (countryVisibility === 'block' ? '▲' : '▼')}</h1>
                <h1>{' Country'}</h1>
            </div>
            <div style={{display: countryVisibility, paddingBottom: '15px'}}>
                <RefinementList attribute={"fields.country.en-US"} />
            </div> 
            <div onClick={onOccupationClick} style={{display: 'inline-flex'}}>
                <h1 style={{marginRight: '3px'}} >{ (occupationVisibility === 'block' ? '▲' : '▼')}</h1>
                <h1>{' Occupation'}</h1>
            </div>
            <div style={{display: occupationVisibility, paddingBottom: '15px'}}>
                <RefinementList attribute={"fields.occupation.en-US"}/>
            </div> 
        </div>
    )
}

export default Filters