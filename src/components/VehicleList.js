import React from 'react'
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { deleteVehicleById, getVehicles } from '../actions'
import '../assets/Vehicle.css'

function VehicleList() {

    const vehicles = useSelector(state => state.vehicle.vehicles)
    const dispatch = useDispatch()

    useEffect(() => dispatch(getVehicles()), [dispatch])

    const handleDelete = (ID) => {
        if (window.confirm('Are you sure wanted to delete this vehicle?')) {
            dispatch(deleteVehicleById(ID))
            window.location.replace("/vehicles")
        }
    }

    const handleEdit = (ID) => {
        const endpoint = "/vehicles/"+ID
        window.location.replace(endpoint)
    }

    return (
        <div className="container">
            <h3>VEHICLES</h3>
            <br />
            {vehicles.map((vehicle) => (
                <div key={vehicle.vehicleId} id="wrapper">
                    <ul key={vehicle.vehicleId}>
                        <li className="vehicle"><strong>Vehicle Plate:</strong>{vehicle.vehicleName}</li>
                        <li className="vehicle"><strong>Vehicle Type: </strong>{vehicle.vehicleType.vehicleTypeName}</li>
                        <li className="vehicle"><strong>Company: </strong>{vehicle.company.companyName}</li>
                        <li className="vehicle"><strong>Modal Year: </strong>{vehicle.modalYear}</li>
                        <li className="vehicle"><strong>Vehicle Plate: </strong>{vehicle.price}</li>
                    </ul>
                    <button id="remove" onClick={() => handleDelete(vehicle.vehicleId)}>DELETE</button>
                    <button id="edit" onClick={() => handleEdit(vehicle.vehicleId)}>EDIT</button>
                </div>
            ))}
        </div>
    )
}

export default VehicleList
