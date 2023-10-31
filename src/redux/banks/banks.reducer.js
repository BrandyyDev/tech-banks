import BanksActionTypes from "./banks.types";

const INITIAL_STATE = {
    isLoading:false,
    errorMessage: undefined,
    banks: []
}

const banksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BanksActionTypes.START_FETCH_BANKS:
            return {               
                ...state,
                isLoading: true
            }
        case BanksActionTypes.END_FETCH_BANKS:
            return {
                ...state,
                isLoading: false,
                banks: action.payload
            }
        case BanksActionTypes.FAILURE_FETCH_BANKS:
            return {               
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default banksReducer;