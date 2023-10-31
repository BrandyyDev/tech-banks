import { getBanks } from "../../api/banks";
import BanksActionTypes from "./banks.types";


export const fetchBaksStart = () => ({
    type: BanksActionTypes.START_FETCH_BANKS
});

export const fetchBanksSuccess = banks => ({
    type: BanksActionTypes.END_FETCH_BANKS,
    payload: banks
});

export const fetchBanksFailure = errorMessage => ({
    type: BanksActionTypes.FAILURE_FETCH_BANKS,
    payload: errorMessage
});


export const fetchBanksAsync = () => {
    return async dispatch => {
        dispatch(fetchBaksStart());

        try {
            const response = await getBanks();
                dispatch(fetchBanksSuccess(response));

        } catch (error) {
            dispatch(fetchBanksFailure(`Servicio no disponible: ${error.message}`));
        }
    }
}