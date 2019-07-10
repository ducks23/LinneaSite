import React from 'react'
import Sunday from './Sunday'


function LocationCard(props) {
    return (
        <div className="location-card">
            <h3>location: {props.location}</h3>
            <h3>time: {props.time}</h3>
            <h3>type: {props.classType}</h3>
        </div>
    )
}

export default LocationCard
