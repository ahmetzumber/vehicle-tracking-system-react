const INITIAL_STATE = {
    companies: [],
    message: ''
}

export const companyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_COMPANIES':
            return {
                ...state,
                companies: action.payload
            }
        case 'GET_COMPANY_BY_ID':
            return {
                ...state,
                companies: action.payload
            }
        case 'DELETE_COMPANY_BY_ID':
            return {
                ...state,
                companies: action.payload
            }
        case 'INSERT_COMPANY':
            return {
                ...state,
                companies: action.payload
            }
        case 'UPDATE_COMPANY_BY_ID':
            return {
                ...state,
                companies: action.payload
            }
        case 'COMPANY_ERROR':
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