import React from 'react'
//Components
import algoliasearch from 'algoliasearch'
import { RefinementList, SortBy } from 'react-instantsearch-dom'

var searchClient = algoliasearch('L62RK6OZ7R', '15a379a9961f8ee6878adeccd35a474f', {protocol: 'https:'});


const Filters = (props) => {

    const handler = () => {
        return props.handleChange;
    }


    const [ countryVisibility, setCountryVisibility ] = React.useState('none')
    const onCountryClick = () => setCountryVisibility(countryVisibility === 'block' ? 'none' : 'block')

    const [ occupationVisibility, setOccupationVisibility ] = React.useState('none')
    const onOccupationClick = () => setOccupationVisibility(occupationVisibility === 'block' ? 'none' : 'block')

    const [ continentVisibility, setContinentVisibility ] = React.useState('none')
    const onContinentClick = () => setContinentVisibility(continentVisibility === 'block' ? 'none' : 'block')

    return(
        <div className="filters">
            <div onClick={onCountryClick} style={{display: 'inline-flex'}} className="sidebarfilters">
                <h1 style={{marginRight: '3px'}}>{ (countryVisibility === 'block' ? '▲' : '▼')}</h1>
                <h1>{' Country'}</h1>
            </div>
            <div style={{display: countryVisibility, paddingBottom: '15px'}}>
                <RefinementList attribute={"fields.country.en-US"} />
            </div> 
            <div onClick={onOccupationClick} style={{display: 'inline-flex'}} className="sidebarfilters">
                <h1 style={{marginRight: '3px'}} >{ (occupationVisibility === 'block' ? '▲' : '▼')}</h1>
                <h1>{' Occupation'}</h1>
            </div>
            <div style={{display: occupationVisibility, paddingBottom: '15px'}}>
                <RefinementList attribute={"fields.occupation.en-US"}/>
            </div> 
            <div onClick={onContinentClick} style={{display: 'inline-flex'}} className="sidebarfilters">
                <h1 style={{marginRight: '3px'}}>{ (countryVisibility === 'block' ? '▲' : '▼')}</h1>
                <h1>{' Continent'}</h1>
            </div>
            <div style={{display: continentVisibility, paddingBottom: '15px'}}>
                <RefinementList attribute={"fields.continent.en-US"} />
            </div> 
        </div>
    )
}

export default Filters