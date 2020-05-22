import React from 'react'
//Components
import { RefinementList } from 'react-instantsearch-dom'

const Filters = (props) => {


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
                {props.countries.map((country) => {
                    return(
                        <div>
                            <input type="checkbox" id={country} name={country} value={country} onChange={props.handleFilter}/>
                            <label for={country}>{country}</label>
                        </div>
                    )
                })}
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