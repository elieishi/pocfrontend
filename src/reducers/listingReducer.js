import {GET_LISTINGS_ACTION} from "../actions/types";

const INITIAL_STATE = {
    products:null,
};

export default (state = INITIAL_STATE, action ) => {
    switch (action.type)
    {
        case GET_LISTINGS_ACTION:
            return {...state, products: action.payload.data}

        default:
            return state;
    }
}