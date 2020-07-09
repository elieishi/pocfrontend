import {GET_LISTINGS_ACTION, GET_MY_LISTINGS_ACTION} from "../actions/types";

const INITIAL_STATE = {
    products:null,
    myProducts:null
};

export default (state = INITIAL_STATE, action ) => {
    switch (action.type)
    {
        case GET_LISTINGS_ACTION:
            return {...state, products: action.payload.data}

        case GET_MY_LISTINGS_ACTION:
            return {...state, myProducts: action.payload.data}

        default:
            return state;
    }
}