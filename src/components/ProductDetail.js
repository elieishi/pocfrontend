import React from "react";
import {connect} from "react-redux";

class ProductDetail extends React.Component {

    render() {
        return (
            <div>
                <div className="h-screen w-full px-6 md:px-12 pb-12 pt-32 flex flex-wrap justify-between">
                    <div
                        className="bg-gray-lighter md:h-full w-full md:flex-1 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage:
                                'url("https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?w=1200")'
                        }}
                    />
                    <div className="bg-orange-100 text-orange-900 md:h-full w-full md:flex-1 flex justify-center items-center">
                        <div className="px-8 md:px-16">
                            <h1 className="text-lg md:text-3xl mb-6">
                                {this.props.product? this.props.product.title : null}
                            </h1>
                            <p className="mb-6">
                                <span className="font-bold">
                                    {this.props.product? this.props.product.currency : null}
                                    {this.props.product? this.props.product.price : null}
                                </span>
                            </p>
                            <p className="mb-6 leading-normal text-sm md:text-base">
                                {this.props.product? this.props.product.description : null}

                            </p>
                            <a
                                href="#"
                                className="block md:inline-block text-center no-underline text-orange-900 px-5 py-3 border-2 border-orange-900 hover:bg-orange-900 hover:text-orange-100"
                            >
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
                <div className="p-12" id="more">
                    <h2 className="text-2xl md:text-4xl max-w-2xl mx-auto text-center text-gray-900 leading-normal mb-12">
                        Product Description
                    </h2>
                    <p className="text-sm md:text-base leading-normal max-w-xl text-center mx-auto text-gray-800 mb-8">
                        {this.props.product? this.props.product.description : null}
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { product : state.selectedProductStore.product}
};

export default connect(mapStateToProps, null)(ProductDetail);
