import React, { Component } from "react";

const regularExpression = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)
const validation = ({ error, ...rest }) => {
    let checkValidation = false;

    Object.values(error).forEach(val => {
        if (val.length > 0) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            checkValidation = false
        } else {
            checkValidation = true
        }
    });

    return checkValidation;
};
export default class FormValidator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            error: {
                name: '',
                email: '',
                password: ''
            }
        }
    }

    onFormSubmit = event => {
        event.preventDefault();
        if (validation(this.state)) {
            console.log(this.state)
        } else {
            console.log("Error occured");
        }
    };

    formObject = event => {
        event.preventDefault();

        const { name, value } = event.target;
        let error = { ...this.state.error };

        switch (name) {
            case "name":
                error.name = value.length < 5 ? "Name should be 5 characters long" : "";
                break;
            case "email":
                error.email = regularExpression.test(value)
                    ? ""
                    : "Email is not valid";
                break;
            case "password":
                error.password =
                    value.length < 5 ? "Password should 5 characters long" : "";
                break;
            default:
                break;
        }

        this.setState({
            error,
            [name]: value
        })
    };

    render() {

        const { error } = this.state;

        return (
            <div style={{}}>
                <div className="card mt-5" style={{ border: "none" }}>
                    <section className="formdiv" style={{ height: 400, backgroundColor: 'black' }}>
                        <div class="container text-center cform">
                            <h2 class="" style={{ color: 'orangered', fontSize: 40, marginTop: 50 }}>
                                <b>Quick Contact</b></h2>
                            <form className="card-body" onSubmit={this.onFormSubmit}>
                                <div className="form-group mb-3">
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        onChange={this.formObject}
                                        className={error.name.length > 0 ? "is-invalid form-control" : "form-control"}
                                        style={{ color: 'blue', width: 200 }} />

                                    {error.name.length > 0 && (
                                        <span className="invalid-feedback">{error.name}</span>
                                    )}
                                </div>

                                <div className="form-group mb-3">
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className={error.email.length > 0 ? "is-invalid form-control" : "form-control"}
                                        onChange={this.formObject}
                                        style={{ color: 'blue', width: 200 }} />

                                    {error.email.length > 0 && (
                                        <span className="invalid-feedback">{error.email}</span>
                                    )}
                                </div>

                                <div className="form-group mb-3">
                                    <input
                                        required
                                        type="password"
                                        name="password"
                                        placeholder="Phone"
                                        className={error.password.length > 0 ? "is-invalid form-control" : "form-control"}
                                        onChange={this.formObject}
                                        style={{ color: 'blue', width: 200 }} />

                                    {error.password.length > 0 && (
                                        <span className="invalid-feedback">{error.password}</span>
                                    )}
                                </div>

                                <div className="mb-3 pt-0" style={{ marginTop: -15 }}>
                                    <textarea
                                        placeholder="Your message"
                                        name="message"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                                        required
                                    />
                                </div>

                                <div className="d-grid mt-3">
                                    <button type="submit" className="btn" style={{ color: 'white', width: 100, marginLeft: 980 }}>SEND</button>
                                </div>
                            </form>


                        </div>
                    </section>

                </div>
            </div>
        );
    }
}




