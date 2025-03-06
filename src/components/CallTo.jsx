import React from 'react';


const PhoneLink = () => {
    const phoneNumber = '+91-7033043790';

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <button onClick={handlePhoneClick} className="text-dimWhite flex font-poppins font-normal mt-[10px]">
            <p >🤙🏻 {phoneNumber}</p>
        </button>

    );
};

export default PhoneLink;
