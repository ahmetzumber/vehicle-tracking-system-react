import React from 'react'
import '../assets/Tracking.css'
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Form, Button } from 'react-bootstrap';
import { getVehicles } from '../actions';
import { insertNewTracking } from '../actions'

function Tracking() {

    const [newTracking, setNewTracking] = useState({
        trackingLocation: "",
        trackingDate: Date.now,
        trackingDesc: "",
        VID: 0
    });

    const vehicles = useSelector(state => state.vehicle.vehicles)
    const dispatch = useDispatch()

    useEffect(() => dispatch(getVehicles()), [dispatch])


    const handleSubmit = () => {
        if (newTracking.trackingLocation === "" || newTracking.trackingDate === null || newTracking.trackingDesc === 0 || newTracking.VID === 0){                 
            window.alert('Please fill in the required fields!')
        }else{
            dispatch(insertNewTracking(newTracking))
            window.alert('New tracking added !!')
            window.location.replace('/tracking')
        }
    }

    return (
        <div className="container">
            <h3>CREATE TRACKING</h3>
            <br/>
            <Form>
                <Form.Group className="mb-3" controlId="formVehicleLocation">
                    <Form.Label>Tracking Location</Form.Label>
                    <Form.Control type="text"  onChange={(e) => setNewTracking({ ...newTracking, trackingLocation: e.target.value })} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTrackingDate">
                    <Form.Label>Tracking Date</Form.Label>
                    <Form.Control type="date" onChange={(e) => setNewTracking({ ...newTracking, trackingDate: e.target.value })} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTrackingDescription">
                    <Form.Label>Tracking Description</Form.Label>
                    <Form.Control type="text" onChange={(e) => setNewTracking({ ...newTracking, trackingDesc: e.target.value })}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTrackingVPlate">
                    <Form.Label>Vehicle Plate</Form.Label>
                    <Form.Select type="dropdown" onChange={(e) => setNewTracking({ ...newTracking, VID: Number.parseInt(e.target.value) })}>
                        {vehicles.map((vehicle) => (
                            <option value={vehicle.vehicleId} key={vehicle.vehicleId}>{vehicle.vehicleName}</option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Tracking
