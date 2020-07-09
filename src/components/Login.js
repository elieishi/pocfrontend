import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux"
import {launchLoadingSpinner, loginCustomer} from "../actions";
import {Link} from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

class Login extends React.Component {

    renderError({error, touched}){
        if (touched && error){
            return (
                <p className="text-xs pt-2 text-red-400">{error}</p>
            );
        }
    }
    renderInput = ({input, className, label, type, autoFocus, meta}) => {
        return (
            <fieldset className="mb-4">
                <label className="block text-sm text-gray-900 mb-2">{label}</label>
                <input {...input} autoFocus={autoFocus} required className={className} type={type} autoComplete="off"/>
                {this.renderError(meta)}
            </fieldset>
        )
    }
    onSubmit = (formValues) =>
    {
        return this.props.loginCustomer(formValues)
    }
    render() {

        const { error } = this.props;

        const loading = this.props.loading

        return (

            <div className="min-h-screen w-full p-6 flex justify-center items-center">

                {loading ? <LoadingSpinner /> :
                <div className="w-full max-w-xs">
                    <div className="bg-white border p-8 shadow rounded w-full mb-6">
                        <h1 className="mb-6 text-lg text-gray-900 font-thin">
                            Login to your account
                        </h1>
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                <Field
                                    className="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                                    name="email"
                                    label="Email address"
                                    component={this.renderInput}
                                    type="email"
                                    required
                                />
                                <Field
                                    className="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                                    name="password"
                                    label="Password"
                                    component={this.renderInput}
                                    type="password"
                                    required
                                />
                            <button
                                type="submit"
                                className="block w-full bg-black text-white rounded-sm py-3 text-sm tracking-wide"
                                disabled={loading}
                            >
                                Sign in

                            </button>

                            {error && <strong className="text-sm pt-2 text-red-400">{error}</strong>}
                        </form>

                    </div>
                    <p className="text-center text-sm text-gray-600 font-thin">
                        Don't have an account yet?{" "}
                        <Link
                            to="/register"
                            className="text-blue-500 no-underline hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>}

            </div>

    )
    }
}

const validate = (formValues) => {

    const errors = {};

    if (!formValues.email){
        errors.email = "You must enter email"
    }

    if (!formValues.password){
        errors.password = "You must enter password"
    }

    return errors;
}

const mapDispatchToProps = dispatch => ({
    loginCustomer: formValues => dispatch(loginCustomer(formValues))
})

const mapStateToProps = (state) => {
    return { loading : state.loadingSpinner.loading}
};

const formWrapped = reduxForm({
    form:'login',
    validate:validate
})(Login);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(formWrapped);

