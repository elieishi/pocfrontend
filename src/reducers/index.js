import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import listingProductsReducer from './listingProductsReducer'
import selectedProduct from './selectedProductReducer'
import auth from './authReducer'
import loadingSpinnerReducer from "./loadingSpinnerReducer";

export default combineReducers({
    productListingsStore:listingProductsReducer,
    selectedProductStore:selectedProduct,
    auth:auth,
    loadingSpinner:loadingSpinnerReducer,
    form: formReducer,
})
