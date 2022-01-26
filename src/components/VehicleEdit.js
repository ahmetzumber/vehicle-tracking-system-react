import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getCompanies, getTypes } from '../actions'
import { editVehicleById, getVehicleById } from '../actions'

function getIdFromURL() {
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf('/') + 1);
    return Number.parseInt(id)
}

function focusAllInputs(){
    document.getElementsByTagName("Form.Control").focus()
}

function VehicleEdit() {

    const [editVehicle, setEditVehicle] = useState({
        vehicleName: "",
        vehicleTypeId: 0,
        companyId: 0,
        modalYear: 0,
        price: 0,
    })

    const vehicles = useSelector(state => state.vehicle.vehicles)
    const companies = useSelector(state => state.company.companies)
    const types = useSelector(state => state.type.types)
    const dispatch = useDispatch()


    const handleSubmit = () => {
        if (editVehicle.vehicleName === "" || 
        editVehicle.vehicleTypeId === -1 || 
        editVehicle.companyId === -1 || 
        editVehicle.modalYear === 0 ||
        editVehicle.price === 0){
            window.alert('Please fill in the required fields!')
        }else{
            console.log(getIdFromURL())
            console.log(editVehicle)
            dispatch(editVehicleById(getIdFromURL(),editVehicle))
            window.alert('Vehicle updated !!')
            window.location.replace('/vehicles')
        }
    }
  
    const handleChange = (e) => {
        setEditVehicle({ ...editVehicle, vehicleTypeId: Number.parseInt(e.target.value) })
    }

    useEffect(() => {  
        dispatch(getVehicleById(getIdFromURL())) 
        dispatch(getCompanies())
        dispatch(getTypes())
    },[dispatch])
    
    return (
        <div className="container">
            <h3>EDIT VEHICLE</h3>
            <br/>
            <Form>
                <Form.Group className="mb-3" controlId="formVehiclePlate">
                    <Form.Label>Vehicle Plate</Form.Label>
                    <Form.Control type="text" defaultValue={vehicles.vehicleName} onChange={(e) => setEditVehicle({ ...editVehicle, vehicleName: e.target.value })}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formVehicleType">
                    <Form.Label>Vehicle Type</Form.Label>
                    <Form.Select type="dropdown" defaultValue={vehicles.vehicleTypeId} onChange={(e) => handleChange(e)}>
                    <option value={-1}>Choose a vehicle type..</option>
                        {types.map((type) => (
                            <option value={type.vehicleTypeId} key={type.vehicleTypeId}>{type.vehicleTypeName}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formVehicleComp">
                    <Form.Label>Company</Form.Label>
                    <Form.Select type="dropdown" defaultValue={vehicles.companyId} onChange={(e) => setEditVehicle({ ...editVehicle, companyId: Number.parseInt(e.target.value)})}>
                        <option value={-1}>Choose a company..</option>
                        {companies.map((company) => (
                            <option value={company.companyId} key={company.companyId}>{company.companyName}</option>
                        ))} 
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formModalYear">
                    <Form.Label>Modal Year</Form.Label>
                    <Form.Control type="number" defaultValue={vehicles.modalYear}  onChange={(e) => setEditVehicle({ ...editVehicle, modalYear: Number.parseInt(e.target.value) })}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" defaultValue={vehicles.price} onChange={(e) => setEditVehicle({ ...editVehicle, price: Number.parseInt(e.target.value) })}/>
                </Form.Group>

                <Button variant="primary" type="button" onClick={() => handleSubmit()}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default VehicleEdit
