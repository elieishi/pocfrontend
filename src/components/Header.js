import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux"
import {loginUser, logoutUser} from "../actions";

class Header extends React.Component{

    renderLoginButton()
    {
        return (
            <div className="w-full md:w-auto mb-6 md:mb-0 text-center md:text-right">
                <Link
                    to="login"
                    className="inline-block no-underline bg-black text-white text-sm py-2 px-3"
                >
                    Login / Register
                </Link>
            </div>
        )
    }

    renderAuthButton(){
        if (this.props.isSignedIn === null) {
            return this.renderLoginButton()
        } else if (this.props.isSignedIn)
        {
            return (
                <div className="w-full md:w-auto mb-6 md:mb-0 text-center md:text-right">
                    <Link
                        to="#"
                        onClick={this.logout}
                        className="inline-block no-underline bg-black text-white text-sm py-2 px-3"
                    >
                        Logout
                    </Link>
                </div>

            );
        } else {
            return this.renderLoginButton()
        }
    }

    logout = () => {
        this.props.logoutUser();
        localStorage.removeItem("token")
    };

    render() {
        return (
            <header className="w-full px-6 bg-white">
                <div className="container mx-auto max-w-4xl md:flex justify-between items-center">
                    <a
                        href="#"
                        className="block py-6 w-full text-center md:text-left md:w-auto text-gray-600 no-underline flex justify-center items-center"
                    >
                        Your Logo
                    </a>
                    {this.renderAuthButton()}
                </div>
            </header>
        )
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn}
};

export default connect(mapStateToProps, {loginUser,logoutUser})(Header);