import React from 'react'
//Components
import algoliasearch from 'algoliasearch'
import { RefinementList, SortBy } from 'react-instantsearch-dom'

var searchClient = algoliasearch('L62RK6OZ7R', '15a379a9961f8ee6878adeccd35a474f', {protocol: 'https:'});


var index = searchClient.initIndex('Blog')


const Filters = (props) => {

    const handler1 = () => {
        index.setSettings({
            ranking: [
              'desc(sys.createdAt)',
              'typo',
              'geo',
              'words',
              'filters',
              'proximity',
              'attribute',
              'exact',
              'custom'
            ]
          })
          return props.handleChange;
    }

    const handler2 = () => {
        index.setSettings({
            ranking: [
              'asc(sys.createdAt)',
              'typo',
              'geo',
              'words',
              'filters',
              'proximity',
              'attribute',
              'exact',
              'custom'
            ]
          })
          return props.handleChange;
    }

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
            <button onClick={handler1}>sdf</button>
            <button onClick={handler2}>sdf</button>
        </div>
    )
}

export default Filters