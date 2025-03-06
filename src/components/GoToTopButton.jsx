import React, { useState, useEffect } from 'react';

const GoToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        setShowButton(window.scrollY > 300);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 p-4 rounded-[50px] bg-blue-gradient text-primary font-poppins font-medium ${showButton ? 'visible' : 'invisible'
                }`}
        >
            Top ⬆
        </button>
    );
};

export default GoToTopButton;
