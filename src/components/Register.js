import React from "react";
import {registerCustomer} from "../actions";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";

class Register extends React.Component
{
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
        return this.props.registerCustomer(formValues)
    }

    render() {

        const { error } = this.props;

        return (
            <div className="min-h-screen w-full p-6 flex justify-center items-center">
                <div className="w-full max-w-xs">
                    <div className="bg-white border p-8 shadow rounded w-full mb-6">
                        <h1 className="mb-6 text-lg text-gray-900 font-thin">
                            Register your account
                        </h1>
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

                            <Field
                                className="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                                name="name"
                                label="Name"
                                component={this.renderInput}
                                type="text"
                                required
                                autoFocus
                            />
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
                            >
                                Sign up
                            </button>

                            {error && <strong className="text-sm pt-2 text-red-400">{error}</strong>}
                        </form>

                    </div>
                </div>
            </div>

        )
    }
}

const validate = (formValues) => {

    const errors = {};

    if (!formValues.name){
        errors.name = "You must enter name"
    }

    if (!formValues.email){
        errors.email = "You must enter email"
    }

    if (!formValues.password){
        errors.password = "You must enter password"
    }

    return errors;
}

const mapDispatchToProps = dispatch => ({
    registerCustomer: formValues => dispatch(registerCustomer(formValues))
})

const mapStateToProps = (state) => {
    return {}
};

const formWrapped = reduxForm({
    form:'register',
    validate:validate
})(Register);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(formWrapped);

