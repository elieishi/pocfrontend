import marketplace from "../apis/marketplace";
import {GET_LISTINGS_ACTION} from "../actions/types";
export const getListings = () => async dispatch =>
{
        return marketplace.get('/listings')
            .then(response => {
                if (response.status === 200)
                {
                    dispatch(getListingsAction(response))
                }
            })
            .catch(error => {
                console.log(error)
            })
};

export const getListingsAction= response => {

    return {
        type: GET_LISTINGS_ACTION,
        payload: response
    };
};