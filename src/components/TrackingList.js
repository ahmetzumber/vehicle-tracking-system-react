import React from 'react'
import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getTrackings } from '../actions'
import '../assets/Tracking.css'


function TrackingList() {

    const trackings = useSelector(state => state.tracking.trackings)

    const dispatch = useDispatch()

    useEffect(() => dispatch(getTrackings()), [dispatch])

    return (
        <div className="container">
            <h3>Tracking List</h3>
            <br />
            {trackings.map((tracking) => (
                <div key={tracking.trackingId} id="wrapper"> 
                    <ul key={tracking.trackingId}>
                        <li className="tracking"><strong>Tracking Location: </strong>{tracking.trackingLocation}</li>
                        <li className="tracking"><strong>Date: </strong>{tracking.trackingDate}</li>
                        <li className="tracking"><strong>Description: </strong>{tracking.trackingDesc}</li>
                        <li className="tracking"><strong>Vehicle Plate: </strong>{tracking.vIdNavigation.vehicleName}</li>
                    </ul>
                    <button id="remove" type="submit">DELETE</button>
                </div>
            ))}
        </div>
    )
}

export default TrackingList