import React from 'react';
import { Errorr } from "../assets";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="font-poppins flex flex-col items-center justify-center h-screen bg-primary text-dimWhite">
            <img
                src={Errorr}
                alt="Error"
                className="w-60 h-60 mb-2"
            />
            <h1 className="text-2xl font-bold text-dimWhite mb-4">Oops! Something went wrong.</h1>
            <p className="text-lg text-gray-600 mb-8">We apologize for the inconvenience.</p>
            <Link to="/" className="bg-dimWhite text-primary font-semibold py-2 px-4 rounded-full">Home</Link>
        </div>
    );
};

export default Error;
