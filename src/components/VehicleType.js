import React from 'react'
import { useState } from 'react';
import '../assets/Vehicle.css'
import { useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap';
import { insertType } from '../actions'

function VehicleType() {

    const [newType, setNewType] = useState("")
    const dispatch = useDispatch()
    
    const handleSubmit = () => {
        dispatch(insertType(newType))
    }
    
    return (
        <div className="container">
            <h3>CREATE VEHICLE TYPE</h3>
            <br/>
            <Form>
                <Form.Group className="mb-3" controlId="formVehicleLocation" aria-required>
                    <Form.Label>Vehicle Type</Form.Label>
                    <Form.Control type="text" value={newType} onChange={e => setNewType(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="button" onClick={() => handleSubmit()}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default VehicleType
