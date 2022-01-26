import React from 'react'
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getCompanies, getTypes } from '../actions'
import { Form, Button } from 'react-bootstrap';
import '../assets/Vehicle.css'
import { insertNewVehicle } from '../actions'

function Vehicle() {

    const [newVehicle, setNewVehicle] = useState({
        vehicleName: "",
        vehicleTypeId: 0,
        companyId: 0,
        modalYear: 0,
        price: 0,
    })

    const companies = useSelector(state => state.company.companies)
    const types = useSelector(state => state.type.types)
    const dispatch = useDispatch()


    const handleSubmit = () => {
        if (newVehicle.vehicleName === "" || 
                                            newVehicle.vehicleTypeId === 0 || newVehicle.vehicleTypeId === -1 || 
                                            newVehicle.companyId === 0 || newVehicle.companyId === -1 ||
                                            newVehicle.modalYear === 0 ||
                                            newVehicle.price === 0){
            window.alert('Please fill in the required fields!')
        }else{
            dispatch(insertNewVehicle(newVehicle))
            window.alert('New vehicle added !!')
            window.location.replace('/vehicle')
        }
    }
  
    const handleChange = (e) => {
        console.log(e.target.value)
        setNewVehicle({ ...newVehicle, vehicleTypeId: Number.parseInt(e.target.value) })
    }

    useEffect(() => {
        dispatch(getCompanies())
        dispatch(getTypes())
    }, [dispatch])

    return (
        <div className="container">
            <h3>CREATE VEHICLE</h3>
            <br/>
            <Form>
                <Form.Group className="mb-3" controlId="formVehiclePlate">
                    <Form.Label>Vehicle Plate</Form.Label>
                    <Form.Control type="text" onChange={(e) => setNewVehicle({ ...newVehicle, vehicleName: e.target.value })}/>
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formVehicleType">
                    <Form.Label>Vehicle Type</Form.Label>
                    <Form.Select type="dropdown" onChange={(e) => handleChange(e)}>
                        <option value={-1}>Choose a vehicle type..</option>
                        {types.map((type) => (
                            <option value={type.vehicleTypeId} key={type.vehicleTypeId}>{type.vehicleTypeName}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formVehicleComp">
                    <Form.Label>Company</Form.Label>
                    <Form.Select type="dropdown" onChange={(e) => setNewVehicle({ ...newVehicle, companyId: Number.parseInt(e.target.value)})}>
                    <option value={-1}>Choose a company..</option>
                        {companies.map((company) => (
                            <option value={company.companyId} key={company.companyId}>{company.companyName}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formModalYear">
                    <Form.Label>Modal Year</Form.Label>
                    <Form.Control type="number" onChange={(e) => setNewVehicle({ ...newVehicle, modalYear: Number.parseInt(e.target.value) })}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" onChange={(e) => setNewVehicle({ ...newVehicle, price: Number.parseInt(e.target.value) })}/>
                </Form.Group>

                <Button variant="primary" type="button" onClick={() => handleSubmit()}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Vehicle
