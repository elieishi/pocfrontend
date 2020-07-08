import React from "react";
import {Route, Router} from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import history from "../utils/history";
import { connect } from 'react-redux';
import Navigation from "./Navigation";
import Footer from "./Footer";
import {getListings} from "../actions";
import ProductDetail from "./ProductDetail";
import Login from "./Login";
import CreateListing from "./CreateListing";
import PrivateRoute from './PrivateRoute';
import MyListings from "./MyListings";

class App extends React.Component {

    componentDidMount = () => {
        this.props.getListings()
    }

    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <Header/>
                        <Navigation/>
                        <Route path="/" exact component={Home} />
                        <Route path="/productDetail" exact component={ProductDetail} />
                        <Route path="/login" exact component={Login}/>
                        <PrivateRoute exact path="/createListing" component={CreateListing}  />
                        <PrivateRoute exact path="/myListings" component={MyListings}  />
                        <Footer/>
                    </div>
                </Router>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getListings: () => dispatch(getListings())
})


export default connect(null, mapDispatchToProps)(App);

