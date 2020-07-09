import { LOADING_SPINNER, STOP_LOADING_SPINNER} from "../actions/types";

const INITIAL_STATE = {
    loading:null
};

export default (state = INITIAL_STATE, action ) => {
    console.log(action.type)
    switch (action.type){

        case LOADING_SPINNER:
            return {...state, loading:true}
        case STOP_LOADING_SPINNER:
            return {...state, loading:null}
        default:
            return state;
    }
}