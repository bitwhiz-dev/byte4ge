import React, { useEffect } from "react";
import styles from "../style";
import Uninav from "./Uninav";
import GoToTopButton from "./GoToTopButton";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import About from "./About";

const PrivacyPolicy = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Uninav />
                <div className="relative flex justify-center items-center font-poppins rounded-[20px] mt-[20px]">
                    <div className="relative bg-primary bg-opacity-5 p-8 rounded-[20px] ">
                        <h1 className={`${styles.heading2} text-center relative`}>
                            Refund/
                            <a to="/about" className="text-green-500">
                                Cancellation Policy
                            </a>
                        </h1>
                        <p className={`${styles.paragraph} text-white mt-[20px]`}>
                            At Sardar Enterprises, including our Byte4ge Web Solutions, we
                            strive to provide the best service to our clients. However, we
                            understand that circumstances may arise where you need to cancel
                            or request a refund for services rendered. Please review our
                            policy below: <br />
                            <br />
                            <a className="text-purple-500">Cancellation Policy:</a>
                            <br />
                            <br /> 1. Cancellation by Client: If you wish to cancel your
                            project with us, please notify us at least 2 days prior to the
                            scheduled start date. Depending on the stage of the project and
                            the work completed, a cancellation fee may apply. <br />
                            <br />
                            2. Cancellation by Sardar Enterprises/ Byte4ge Web Solutions: In
                            the unlikely event that we need to cancel a project due to
                            unforeseen circumstances or inability to fulfill our obligations,
                            we will provide a full refund of any payments made. <br />
                            <br />
                            <a className="text-purple-500">Refund Policy: </a>
                            <br />
                            <br /> 1. Refund Eligibility: Refunds may be considered in the
                            following circumstances: - Services paid for but not yet rendered.
                            - Dissatisfaction with the quality of service provided, subject to
                            review and approval by Sardar Enterprises/ Byte4ge Web Solutions.{" "}
                            <br />
                            <br />
                            2. Refund Process: To request a refund, please contact our
                            customer support team at contact@byte4ge.com /+917033043790. We
                            will review your request and respond within 2 business days with a
                            decision. <br />
                            <br />
                            3.<a > Refund Amount: </a>The refund amount will depend on the
                            circumstances of the request and the stage of the project. Refunds
                            may be subject to deductions for work already completed or
                            expenses incurred.<br /><br />
                            4. Refund Processing Timeline: Please note that refunds will be processed within 5-7 business days from the date of request.
                            <br />
                            <br />
                            <a className="text-purple-500">Exceptions: </a>
                            <br />
                            <br /> Domain Registration and Hosting Fees: Please note that fees
                            for domain registration and hosting services are non-refundable
                            once purchased. <br />
                            <br />
                            <a className="text-purple-500">Contact Us: </a>
                            <br />
                            <br /> If you have any questions or concerns about our
                            Refund/Cancellation Policy, please don't hesitate to contact us at{" "}
                            <a className="text-orange-500">contact@byte4ge.com.</a>
                            <div className="flex justify-start mt-4">
                                <Link
                                    to="/"
                                    className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm hover:bg-orange-500 transition duration-300"
                                >
                                    Back
                                </Link>
                                <Link
                                    to="/about"
                                    className="inline-block ml-2 px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm hover:bg-orange-500 transition duration-300"
                                >
                                    About
                                </Link>
                            </div>
                        </p>
                    </div>
                </div>
                <GoToTopButton />
                <Footer />
            </div>
        </div>
    );
};

export default PrivacyPolicy;
