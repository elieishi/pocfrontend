import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getMyListing} from "../actions";
import { TablePagination } from 'react-pagination-table';


class MyListings extends React.Component {

    componentDidMount() {
       return this.props.getMyListing()
    }

    render() {

        const Header = ["id", "title", "currency", "price"];

        let data = []
        let length = 0;

        if (this.props.myProducts)
        {
            data = this.props.myProducts.data
            length = this.props.myProducts.data.length
        }

        return (
            <div>
                {/* title */}
                <h1 className="text-center text-xl md:text-4xl px-6 py-12 bg-white">
                    My Products
                </h1>
                <div className="w-full flex flex-col justify-right items-center bg-gray-100 py-12 mb-8 border-b">
                    <div className="w-full md:w-auto mb-6 md:mb-0 text-center md:text-right">
                        <Link
                            to="createListing"
                            className="inline-block no-underline bg-black text-white text-sm py-2 px-3"
                        >
                            Add New Product
                        </Link>
                    </div>
                </div>

                {/* /title */}
                <div className="w-full px-6 py-12 bg-gray-100 border-t">
                    <div className="container max-w-4xl mx-auto pb-10 flex justify-between items-center px-3">
                        <TablePagination
                            title="My Products"
                            subTitle=""
                            className = "table-auto_title"
                            react-pagination-table__header="ishimwe"
                            headers={ Header }
                            data={ data }
                            columns="id.title.currency.price"
                            perPageItemCount={ 5 }
                            totalCount={ length}
                            arrayOption={ [["size", 'all', ' ']] }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    getMyListing: () => dispatch(getMyListing())
})

const mapStateToProps = (state) => {
    return { myProducts: state.productListingsStore.myProducts}
};

export default connect(mapStateToProps, mapDispatchToProps)(MyListings);


