import React from "react";

const Product = (props) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
            <a href="#">
                <img
                    src="https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=800"
                    className="w-full h-auto rounded-lg"
                />
            </a>
            <h2 className="text-xl py-4">
                <a href="#" className="text-black no-underline">
                    {props.item.title}
                </a>
            </h2>
            <p className="text-xs leading-normal">
                {props.item.description}
            </p>
        </div>
    )
}

export default Product;