const INITIAL_STATE = {
    trackings: [],
    message: ''
}

export const trackingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_TRACKING':
            return {
                ...state,
                trackings: action.payload
            }
        case 'GET_TRACKING_BY_VID':
            return {
                ...state,
                trackings: action.payload
            }
        case 'INSERT_TRACKING':
            return {
                ...state,
                trackings: action.payload
            }
        case 'TRACKING_ERROR':
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