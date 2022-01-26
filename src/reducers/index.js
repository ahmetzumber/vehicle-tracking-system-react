import { combineReducers } from "redux";
import { companyReducer } from "./CompanyReducer";
import { trackingReducer } from "./TrackingReducer";
import { vehicleReducer } from "./VehicleReducer";
import { typeReducer } from "./VehicleTypeReducer";

export const reducers = combineReducers({
    company: companyReducer,
    vehicle: vehicleReducer,
    tracking: trackingReducer,
    type: typeReducer
});