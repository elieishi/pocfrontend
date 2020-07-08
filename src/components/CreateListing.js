import React from "react";
import {createListing} from "../actions"
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";

class CreateListing extends React.Component{

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

    renderTextArea = ({input, className, label, autoFocus, meta}) => {
        return (
            <fieldset className="mb-4">
                <label className="block text-sm text-gray-900 mb-2">{label}</label>
                <textarea {...input} autoFocus={autoFocus} required className={className} autoComplete="off"/>
                {this.renderError(meta)}
            </fieldset>
        )
    }
    onSubmit = (formValues) =>
    {
        return this.props.createListing(formValues)
    }

    render() {
        const { error } = this.props;
        console.log(error)
        return (
            <div className="min-h-screen w-full p-6 flex justify-center items-center">
                <div className="w-full max-w-xs">
                    <div className="bg-white border p-8 shadow rounded w-full mb-6">
                        <h1 className="mb-6 text-lg text-gray-900 font-thin">
                            Create new listing
                        </h1>
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                            <Field
                                className="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                                name="title"
                                label="Title"
                                component={this.renderInput}
                                type="text"
                                required
                                autoFocus
                            />
                            <Field
                                className="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                                name="description"
                                label="Description"
                                component={this.renderTextArea}
                                required
                            />

                            <Field
                                className="block w-full rounded-sm border bg-white py-2 px-3 text-sm"
                                name="price"
                                label="price"
                                component={this.renderInput}
                                type="text"
                                required
                            />

                            <button
                                type="submit"
                                className="block w-full bg-black text-white rounded-sm py-3 text-sm tracking-wide"
                            >
                                Save
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

    if (!formValues.title){
        errors.title = "You must enter title"
    }

    if (!formValues.description){
        errors.description = "You must enter description"
    }

    if (!formValues.title){
        errors.title = "You must enter title"
    }

    if (!formValues.price){
        errors.price = "You must enter price"
    }

    return errors;
}

const mapDispatchToProps = dispatch => ({
    createListing: formValues => dispatch(createListing(formValues))
})


const formWrapped = reduxForm({
    form:'createListing',
    validate:validate
})(CreateListing);


export default connect(
    null,
    mapDispatchToProps
)(formWrapped);
