import axios from "axios";

const company_baseURL = "https://localhost:5001/api/Company";
const vehicle_baseURL = "https://localhost:5001/api/Vehicle";
const tracking_baseURL = "https://localhost:5001/api/TrackingDetail";
const vehicleType_baseURL = "https://localhost:5001/api/VehicleType";

export const getCompanies = () => (dispatch) => {
    axios.get(company_baseURL)
         .then(res => dispatch({ type: 'GET_COMPANIES', payload: res.data }))
         .catch(error => dispatch({ type: 'COMPANY_ERROR', payload: error }))
}

export const insertNewCompany = (newCompany) => (dispatch) => {
    const URL = company_baseURL
    axios.post(URL,{
        companyId: 0,
        companyName: newCompany.companyName,
        companyLocation: newCompany.companyLocation
    })
         .then(res => dispatch({ type: 'INSERT_COMPANY', payload: res.data }))
         .catch(error => dispatch({ type: 'COMPANY_ERROR', payload: error }))
}

export const deleteCompanyById = (ID) => (dispatch) => {
    const URL = company_baseURL + '/' + ID
    axios.delete(URL)
         .then(res => {
            dispatch({ type: 'DELETE_COMPANY_BY_ID', payload: res.data })
            dispatch({ type: 'GET_COMPANIES', payload: res.data })
         })
         .catch(error => dispatch({ type: 'COMPANY_ERROR', payload: error }))
}
//------------------------------------------------------------------------------------
export const getVehicles = () => (dispatch) => {
    axios.get(vehicle_baseURL)
         .then(res => dispatch({ type: 'GET_VEHICLES', payload: res.data }))
         .catch(error => dispatch({ type: 'VEHICLE_ERROR', payload: error }))
}

export const getVehicleById = (Id) => (dispatch) => {
    const URL = vehicle_baseURL + "/" + Id
    axios.get(URL)
         .then(res => dispatch({ type: 'GET_VEHICLE_BY_ID', payload: res.data }))
         .catch(error => dispatch({ type: 'VEHICLE_ERROR', payload: error }))
}

export const insertNewVehicle = (newVehicle) => (dispatch) => {
    const URL = vehicle_baseURL
    axios.post(URL,{
        vehicleId: 0,
        vehicleName: newVehicle.vehicleName,
        vehicleTypeId: newVehicle.vehicleTypeId,
        companyId: newVehicle.companyId,
        modalYear: newVehicle.modalYear,
        price: newVehicle.price,
    })
         .then(res => dispatch({ type: 'GET_VEHICLE_BY_ID', payload: res.data }))
         .catch(error => dispatch({ type: 'VEHICLE_ERROR', payload: error }))
}

export const deleteVehicleById = (ID) => (dispatch) => {
    const URL = vehicle_baseURL + '/' + ID
    axios.delete(URL)
         .then(res => {
            dispatch({ type: 'DELETE_VEHICLE_BY_ID', payload: res.data })
            dispatch({ type: 'GET_VEHICLES', payload: res.data })
        })
         .catch(error => dispatch({ type: 'VEHICLE_ERROR', payload: error }))
}
export const editVehicleById = (ID,editedVehicle) => (dispatch) => {
    const URL = vehicle_baseURL + '/' + ID
    axios.put(URL,{
        vehicleId: ID,
        vehicleName: editedVehicle.vehicleName,
        vehicleTypeId: editedVehicle.vehicleTypeId,
        companyId: editedVehicle.companyId,
        modalYear: editedVehicle.modalYear,
        price: editedVehicle.price,
    })
         .then(res => {
            dispatch({ type: 'UPDATE_VEHICLE_BY_ID', payload: res.data })
        })
         .catch(error => dispatch({ type: 'VEHICLE_ERROR', payload: error }))
}
//------------------------------------------------------------------------------------
export const getTrackings = () => (dispatch) => {
    axios.get(tracking_baseURL)
         .then(res => dispatch({ type: 'GET_TRACKING', payload: res.data }))
         .catch(error => dispatch({ type: 'TRACKING_ERROR', payload: error }))
}

export const insertNewTracking = (newTracking) => (dispatch) => {
    const URL = tracking_baseURL
    axios.post(URL,{
        trackingId: 0,
        trackingLocation: newTracking.trackingLocation,
        trackingDate: newTracking.trackingDate,
        trackingDesc: newTracking.trackingDesc,
        VID: newTracking.VID,
    })
         .then(res => dispatch({ type: 'INSERT_TRACKING', payload: res.data }))
         .catch(error => dispatch({ type: 'TRACKING_ERROR', payload: error }))
}
//------------------------------------------------------------------------------------
export const getTypes = () => (dispatch) => {
    axios.get(vehicleType_baseURL)
         .then(res => dispatch({ type: 'GET_TYPES', payload: res.data }))
         .catch(error => dispatch({ type: 'TYPE_ERROR', payload: error }))
}

export const deleteTypeById = (ID) => (dispatch) => {
    const URL = vehicleType_baseURL + '/' + ID
    axios.get(URL)
         .then(res => dispatch({ type: 'DELETE_TYPE', payload: res.data }))
         .catch(error => dispatch({ type: 'TYPE_ERROR', payload: error }))
}

export const insertType = (typeName) => (dispatch) => {
    const URL = vehicleType_baseURL
    axios.post(URL,{ vehicleTypeId: 0, vehicleTypeName:typeName })
         .then(res => dispatch({ type: 'INSERT_TYPE', payload: res.data }))
         .catch(error => dispatch({ type: 'TYPE_ERROR', payload: error }))
}
