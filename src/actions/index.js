import marketplace from "../apis/marketplace";
import {GET_LISTINGS_ACTION, SELECTED_PRODUCT, LOGIN_IN, LOGIN_OUT} from "../actions/types";
import {SubmissionError} from "redux-form";
import history from "../utils/history";

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

export const selectedProduct= response => {

    return {
        type: SELECTED_PRODUCT,
        payload: response
    };
};

export const loginCustomer = formValues => async  dispatch =>
{
    const payload = {
        email: formValues.email,
        password:formValues.password,
    }
    return marketplace.post('/login',payload)
        .then(response => {

            console.log(response)
            if (response.status === 200)
            {
                localStorage.setItem("token", response.data.access_token)
                dispatch(loginUser(response.data))
                history.push("myListings");
            }
        })
        .catch(error => {

            console.log(error)
            let data = error.response.data

            if (error.response.status === 422)
            {
                if(data.message)
                {
                    throw new SubmissionError({ _error: 'Login failed!' })
                }
            }
        })
}

export const loginUser = response => {
    return {
        type: LOGIN_IN,
        payload: response
    };
};

export const logoutUser = () =>
{
    return {
        type: LOGIN_OUT
    }
}

export const createListing = formValues => async  dispatch =>
{
    const payload = {
        title: formValues.title,
        description:formValues.description,
        price:formValues.price,
        currency: "zar",
        category: "furniture"
    }

    const accessToken = localStorage.token;

    if (accessToken)
    {
        const AuthStr = 'Bearer ' + accessToken;

        return marketplace.post('/listings',payload, { headers: { Authorization: AuthStr } })
            .then(response => {

                console.log(response)
                if (response.status === 201)
                {
                    history.push("myListings");
                }
            })
            .catch(error => {

                console.log(error)
                let data = error.response.data

                if (error.response.status === 401)
                {
                    if(data.message)
                    {
                        throw new SubmissionError({ _error: data.message})
                    }
                }

                if(error.response.status === 422 )
                {
                    if(data.title)
                    {
                        throw new SubmissionError({ title: data.title, _error: data.title})
                    }
                }
            })
    }


}