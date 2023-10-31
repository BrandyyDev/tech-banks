import apiCall from "../services/api";

export const getBanks = async () => {
    return await apiCall("https://dev.obtenmas.com/catom/api/challenge/banks", 'GET');

}