import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {

    return (
        <nav className="w-full bg-white md:pt-0 px-6 relative z-20 border-t border-b border-gray-300">
            <div className="container mx-auto max-w-4xl md:flex justify-between items-center text-sm md:text-md md:justify-start">
                <div className="w-full md:w-1/2 text-center md:text-left py-4 flex flex-wrap justify-center items-stretch md:justify-start md:items-start">
                <Link
                    to="/"
                    className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-300"
                >
                    Home
                </Link>
                <a
                    href="/myListings"
                    className="px-2 md:pl-0 md:mr-3 md:pr-3 text-gray-700 no-underline md:border-r border-gray-300"
                >
                    My Products
                </a>
            </div>
                <div className="w-full md:w-1/2 text-center md:text-right pb-4 md:p-0">
                <input
                    type="search"
                    placeholder="Search..."
                    className="bg-gray-200 border text-sm p-1"
                />
            </div>
            </div>
        </nav>
    );
}

export default Navigation;