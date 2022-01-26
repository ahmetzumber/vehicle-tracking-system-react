import React from 'react'
import '../assets/Vehicle.css'
function Home() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h2>Vehicle Tracking System</h2><br />
                <p id="jumbotext">
                    Our system has been developed to keep track of when, where and in what condition any vehicle is. You can also observe which company gave the tracked vehicles and the vehicle characteristics. All kinds of vehicles, such as construction machinery i.e., can also be tracked.
                </p>
            </div>
            <div className="card">
                <h5 className="card-header">Vehicles on road..</h5>
                <div className="card-body">
                    <p className="card-text">You can register your vehicles in our system so that you can track them. If its necessary, you can make changes in the tracking of your vehicles. And finally, when you're done, you can delete your vehicle from the system.</p>
                </div>
            </div>
            <br />
            <div className="card">
                <h5 className="card-header">Companies of System</h5>
                <div className="card-body">
                    <p className="card-text">You can create a company to our system as a corporate user and also you can add a vehicle to company that you created.</p>
                </div>
            </div>
            <br />
            <div className="card">
                <h5 className="card-header">Gues who's Tracking You</h5>
                <div className="card-body">
                    <p className="card-text">In this section, you can observe tracks a all vehicles.Also only admins can create a tracking reports for a vehicles.</p>
                </div>
            </div>
            <br />
            <div className="imgs">
                <img src="https://img.icons8.com/color/50/000000/bulldozer.png" />
                <img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/50/000000/external-military-vehicle-war-icongeek26-linear-colour-icongeek26.png" />
                <img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/50/000000/external-prisoner-transport-vehicle-car-itim2101-lineal-color-itim2101.png" />
                <img src="https://img.icons8.com/emoji/50/000000/sport-utility-vehicle.png" />
                <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/50/000000/external-motorbike-food-delivery-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" />
            </div>
        </div>
    )
}

export default Home
