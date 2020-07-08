import React from "react";
import {Link} from "react-router-dom";

class MyListings extends React.Component {

    render() {
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
                        <table className="table-auto">
                            <thead>
                            <tr>
                                <th className="px-4 py-2">Title</th>
                                <th className="px-4 py-2">Author</th>
                                <th className="px-4 py-2">Views</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="border px-4 py-2">Intro to CSS</td>
                                <td className="border px-4 py-2">Adam</td>
                                <td className="border px-4 py-2">858</td>
                            </tr>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2">
                                    A Long and Winding Tour of the History of UI Frameworks and Tools and
                                    the Impact on Design
                                </td>
                                <td className="border px-4 py-2">Adam</td>
                                <td className="border px-4 py-2">112</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Intro to JavaScript</td>
                                <td className="border px-4 py-2">Chris</td>
                                <td className="border px-4 py-2">1,280</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}


export default MyListings