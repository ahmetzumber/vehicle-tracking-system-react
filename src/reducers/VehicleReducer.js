const INITIAL_STATE = {
    vehicles: [],
    message: ''
}

export const vehicleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_VEHICLES':
            return {
                ...state,
                vehicles: action.payload
            }
        case 'GET_VEHICLE_BY_ID':
            return {
                ...state,
                vehicles: action.payload
            }
        case 'DELETE_VEHICLE_BY_ID':
            return {
                ...state,
                vehicles: action.payload
            }
        case 'INSERT_VEHICLE':
            return {
                ...state,
                vehicles: action.payload
            }
        case 'UPDATE_VEHICLE_BY_ID':
            return {
                ...state,
                vehicles: action.payload
            }
        case 'VEHICLE_ERROR':
            return {
                ...state,
                message: action.payload
            }
        default:
            return {
                ...state
            }
    }
}