import React from 'react';

const Button = ({ styles, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={`py-2 px-4 bg-sWhite font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[5px] cursor-pointer hover:bg-dimWhite`}>
            Reach Us
        </a>
    );
};

export default Button;
