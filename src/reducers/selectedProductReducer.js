import {SELECTED_PRODUCT} from "../actions/types";

const INITIAL_STATE = {
    product:null,
};

export default (state = INITIAL_STATE, action ) => {

    switch (action.type)
    {
        case SELECTED_PRODUCT:
            return {...state, product: action.payload}

        default:
            return state;
    }
}