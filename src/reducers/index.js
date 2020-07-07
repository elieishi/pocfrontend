import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import listingProductsReducer from './listingProductsReducer'
import selectedProduct from './selectedProductReducer'

export default combineReducers({
    productListingsStore:listingProductsReducer,
    selectedProductStore:selectedProduct,
    form: formReducer,
})
