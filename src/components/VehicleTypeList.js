import React from 'react'
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getTypes } from '../actions'
import '../assets/VehicleType.css'


function VehicleTypeList() {

    const types = useSelector(state => state.type.types)
    const dispatch = useDispatch()

    useEffect(() => dispatch(getTypes()), [dispatch])

    return (
        <div className="container">
            <h3>VEHICLE TYPES</h3>
            <br />
            {types.map((type) => (
                <div id="wrapper">
                    <ul key={type.vehicleId}>
                        <li className="type"><strong>Vehicle Type ID:</strong>{type.vehicleTypeId}</li>
                        <li className="type"><strong>Vehicle Type: </strong>{type.vehicleTypeName}</li>
                    </ul>
                    <button id="remove" type="submit">DELETE</button>
                </div>
            ))}
        </div>
    )
}

export default VehicleTypeList
