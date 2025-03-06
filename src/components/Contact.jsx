import React, { useEffect } from 'react';
import styles from '../style';
import Uninav from './Uninav';
import GoToTopButton from './GoToTopButton';
import Footer from './Footer';
import { Helmet } from 'react-helmet';
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        document.getElementById("contact_form").addEventListener("submit", function (event) {
            event.preventDefault();
            var form = event.target;
            var formData = new FormData(form);

            var resultDiv = document.getElementById("result_contact");
            var formDiv = document.getElementById("contact_form");

            formDiv.style.display = 'none';

            resultDiv.innerHTML = "Please Wait...";

            var xhr = new XMLHttpRequest();
            xhr.open("POST", "contact_process.php");

            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        // when success
                        resultDiv.innerHTML = xhr.responseText;
                    } else {
                        // when request failed
                        resultDiv.innerHTML = "An error occurred.";
                    }
                }
            };

            xhr.send(formData);
        });
    }, []);

    return (

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Uninav />
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Byte4ge-Contact</title>
                    <link rel="canonical" href="https://byte4ge.com/contact" />
                    <meta
                        name="keywords"
                        content="byte4ge byteforge byte forge 4ge Byte4ge Byteforge byte4ge contact"
                    />
                    <meta
                        name="description"
                        content="You can always aprroach to us for a quality web appreance"
                    />
                </Helmet>
                <div className="relative flex justify-center items-center font-poppins rounded-[20px] mt-[20px]">
                    <div className="relative bg-primary bg-opacity-5 p-8 rounded-[20px]">
                        <section className="text-gray-600 body-font relative mb-20">
                            <div className="container px-5 py-24 mx-auto">
                                <div className="flex flex-col text-center w-full mb-1">
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-dimWhite">Contact Us</h1>
                                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                                        <span className=" text-orange-500">X</span>perience our hospitality once.
                                    </p>
                                    <div id="result_contact" className='text-orange-500 mt-[10px] '>
                                    </div>

                                </div>
                                <form action="contact_process.php" method="POST" id="contact_form">
                                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                        <div className="flex flex-wrap -m-2">
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label htmlFor="name" className="leading-7 text-sm text-dimWhite">Name</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className="w-full bg-primary bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-primary focus:ring-2 focus:ring-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                        required />
                                                </div>
                                            </div>
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label htmlFor="email" className="leading-7 text-sm text-dimWhite">Email</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        className="w-full bg-primary bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-primary focus:ring-2 focus:ring-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                        required />
                                                </div>
                                            </div>
                                            <div className="p-1 w-full">
                                                <div className="relative">
                                                    <label htmlFor="section" className="leading-7 text-sm text-dimWhite">Subject</label>
                                                    <input
                                                        type="text"
                                                        id="subject"
                                                        name="subject"
                                                        className="w-full bg-primary bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-primary focus:ring-2 focus:ring-white text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                        required />
                                                </div>
                                            </div>
                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label htmlFor="message" className="leading-7 text-sm text-dimWhite">Message</label>
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        className="w-full bg-primary bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-primary focus:ring-2 focus:ring-white h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                                        required></textarea>
                                                </div>
                                            </div>
                                            <div className="p-2 w-full">
                                                <button className="flex mx-auto text-white bg-primary border-[1px] py-2 px-8 focus:outline-none hover:bg-orange-500 hover:border-0 hover:text-white rounded-full text-lg">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                        <GoToTopButton />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Contact;
