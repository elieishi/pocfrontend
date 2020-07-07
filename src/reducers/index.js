import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import listingReducer from './listingReducer'

export default combineReducers({
    listings:listingReducer,
    form: formReducer,
})
