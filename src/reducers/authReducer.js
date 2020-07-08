import { LOGIN_IN, LOGIN_OUT} from "../actions/types";

const INITIAL_STATE = {
    isSignedIn:null,
    access_token:null,
    currentUser:null
};

export default (state = INITIAL_STATE, action ) => {
    switch (action.type){
        case LOGIN_IN:
            return {...state, isSignedIn:true, access_token:action.payload.access_token, currentUser:action.payload.user }
        case LOGIN_OUT:
            return {...state, isSignedIn:false, access_token: null, currentUser: null}
        default:
            return state;
    }
}