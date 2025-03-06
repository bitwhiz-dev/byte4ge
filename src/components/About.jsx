import React, { useEffect } from 'react';
import styles from '../style';
import Uninav from './Uninav';
import GoToTopButton from './GoToTopButton';
import Footer from './Footer';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const About = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Uninav />
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Byte4ge-About</title>
                    <link rel="canonical" href="https://byte4ge.com/about" />
                    <meta
                        name="keywords"
                        content="byte4ge byteforge byte forge 4ge Byte4ge Byteforge byte4ge about"
                    />
                    <meta
                        name="description"
                        content="You can always aprroach to us for a quality web appreance"
                    />
                </Helmet>
                <div className="relative flex justify-center items-center font-poppins rounded-[20px] mt-[20px]">
                    <div className="relative bg-primary bg-opacity-5 p-8 rounded-[20px] ">
                        <h1 className={`${styles.heading2} text-center relative`}>
                            <span className="absolute top-0 left-0">
                                <Link
                                    to="/"
                                    className="inline-block px-3 py-1 rounded-full bg-blue-100 text-primary font-medium text-sm hover:bg-orange-500 transition duration-300"
                                >
                                    Back
                                </Link>
                            </span>
                            <a className='text-green-500'>About</a>
                        </h1>
                        <p className={`${styles.paragraph} text-white mt-[20px]`}>

                            <strong> We Turn Your Vision into Reality </strong><br /><br />

                            Welcome to Byte4ge, a leading web development company that specializes in creating exceptional websites using cutting-edge technologies. Our dedicated team of skilled professionals is passionate about transforming your ideas into stunning, user-centric web solutions that drive growth and elevate your online presence.

                            <strong><br /><br /> Innovative Solutions for Your Digital Success </strong><br /><br />

                            At Byte4ge, we are committed to delivering innovative web development solutions tailored to meet your specific needs. With expertise in JavaScript, React JS, Node JS, Express JS, Next JS, MongoDB, PHP, Redux Toolkit, Rapid API, HTML, CSS, SASS, and more, we leverage the power of these technologies to craft robust, scalable, and high-performing web applications.
                            <strong><br /><br /> Web Development Services Offered </strong><br /><br />

                            ✅ Custom Web Development: We specialize in creating bespoke web solutions from scratch, ensuring that your website reflects your unique brand identity and meets your business objectives.<br />
                            ✅ Responsive Web Design: Our team crafts visually captivating websites that are fully responsive across all devices, providing seamless user experiences and improving conversion rates.<br />
                            ✅ E-commerce Development: Byte4ge excels in building feature-rich e-commerce platforms that empower businesses to sell products and services online, with secure payment gateways and user-friendly interfaces.<br />
                            ✅ CMS Development: With our unparalleled CMS development expertise, we offer intuitive content management systems that enable you to effortlessly manage and update your website's content.<br />
                            ✅ API Integration: We seamlessly integrate various APIs, including Rapid API, to enhance your website's functionality, improve user experiences, and automate processes.<br />
                            ✅ Maintenance and Support: Byte4ge provides reliable maintenance and support services to ensure that your website runs smoothly and remains up-to-date, allowing you to focus on your core business operations.

                            <strong><br /><br /> Security and Performance: Our Top Priorities </strong><br /><br />

                            We understand the importance of robust security measures and optimum performance for your web applications. Byte4ge implements industry best practices and deploys stringent security protocols to safeguard your data and protect against potential threats. Additionally, we optimize website performance to deliver lightning-fast loading speeds, enhancing user experiences and search engine rankings.

                            <strong><br /><br /> Why Choose Byte4ge? </strong><br /><br />

                            ✅ Expert Team: Our team of skilled professionals brings a wealth of experience and expertise to every project, ensuring top-quality solutions that meet your expectations.<br />
                            ✅ Customer-Centric Approach: We prioritize understanding your unique requirements, goals, and challenges and tailor our solutions accordingly to deliver maximum value.<br />
                            ✅ Transparent Communication: We believe in open and transparent communication throughout the development process, keeping you informed and involved at every step.<br />
                            ✅ Timely Delivery: At Byte4ge, we adhere to strict timelines, ensuring on-time delivery of projects without compromising on quality.<br />
                            ✅ Affordable Pricing: We offer competitive pricing options, providing the best value for your investment without compromising on quality or service.

                            <strong><br /><br /> Get in Touch with Byte4ge Today! </strong><br /><br />

                            Are you ready to embark on a remarkable web development journey with Byte4ge? Contact us today for a consultation and let us transform your ideas into stunning web solutions that drive your digital success.</p>
                    </div>
                </div>
                <GoToTopButton />
                <Footer />
            </div>
        </div>
    );
};

export default About;
