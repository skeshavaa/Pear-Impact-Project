import React, { useState } from "react"
//Components
import { Filters } from '@components'
//Styles
import "@compStyles/componentStyles.scss"

const Sidebar = (props) => {
    const [sidebarClass, setSidebarClass] = useState(props.sidebar);
    const [ countryVisibility, setCountryVisibility ] = React.useState('none')
    const onCountryClick = () => setCountryVisibility(countryVisibility === 'block' ? 'none' : 'block')

    const [ occupationVisibility, setOccupationVisibility ] = React.useState('none')
    const onOccupationClick = () => setOccupationVisibility(occupationVisibility === 'block' ? 'none' : 'block')

    React.useEffect(() => {
        setSidebarClass(props.sidebar);
    }, [props.sidebar])

    var countries = []

    props.hits.map((hit) => {
        if (countries.includes(hit.node.country) == false) {
            countries.push(hit.node.country)
        }
    })

    const handleFilter = (e) => {
        e.preventDefault()
        props.handleFilter(e.target.checked, e.target.id)
    }

    return (
        <div className={sidebarClass} >
            <div className="absolute">
                <h2>Filter by:</h2>



                <div className="filters">
                    <div onClick={onCountryClick} style={{ display: 'inline-flex' }}>
                        <h1 style={{ marginRight: '3px' }}>{(countryVisibility === 'block' ? '▲' : '▼')}</h1>
                        <h1>{' Country'}</h1>
                    </div>
                    <div style={{ display: countryVisibility, paddingBottom: '15px' }}>
                        {countries.map((country) => {
                            return (
                                <div>
                                    <input type="checkbox" id={country} name={country} value={country} onChange={handleFilter} />
                                    <label for={country}>{country}</label>
                                </div>
                            )
                        })}
                    </div>
                    <div onClick={onOccupationClick} style={{ display: 'inline-flex' }}>
                        <h1 style={{ marginRight: '3px' }} >{(occupationVisibility === 'block' ? '▲' : '▼')}</h1>
                        <h1>{' Occupation'}</h1>
                    </div>
                </div>



                <div className="btnwrap"><button onClick={props.close} >Close</button></div>
                <div className="block"></div>
            </div>
        </div>
    )
}

export default Sidebar