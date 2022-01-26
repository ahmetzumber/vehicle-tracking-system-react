const INITIAL_STATE = {
    types: [],
    message: ''
}

export const typeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_TYPES':
            return {
                ...state,
                types: action.payload
            }
        case 'INSERT_TYPE':
            return {
                ...state,
                types: action.payload
            }
        case 'DELETE_TYPE':
            return {
                ...state,
                types: action.payload
            }
        case 'TYPE_ERROR':
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