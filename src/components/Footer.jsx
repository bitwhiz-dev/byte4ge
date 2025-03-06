import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { socialMedia } from "../constants";
import { EmailLink } from '../components';
import { CallTo } from "../components";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Terms from "./Terms";

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-4 w-full`}>
            <div className="flex-[1] flex flex-col justify-start mr-10">
                <a href="/">
                    <img
                        src={logo}
                        alt="byte4ge"
                        className="w-[246px] h-[52px] object-contain ml-[-5px]"
                    />
                </a>
                <p className={`${styles.paragraph} mt-4 ml-[20px] max-w-[312px]`}>
                    Believe us for better Web Presentaion and outcomes
                </p>
                <p className={`${styles.paragraph} mt-4 ml-[20px] max-w-[312px]`}>
                    <a className="text-blue-500">Operational Address:-</a> <br />AT+PO- Bhatkhora, Ward No-08, PS-Murliganj, Madhepura, 852114, Bihar
                </p>

                <div className=" mt-4 ml-[20px] max-w-[312px]">
                    <EmailLink className="font-poppins text-white border-slate-50" />
                    <CallTo />
                </div>
            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {/* About Section */}
                <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                    <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                        Useful Links
                    </h4>
                    <ul className="list-none mt-4">
                        <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4`}>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4`}>
                            <Link to="/about">About</Link>
                        </li>
                        <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4`}>
                            <Link to="/terms">Terms & Conditions</Link>
                        </li>
                        <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0`}>
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                    </ul>
                </div>

                {/* Additional Sections */}
                <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                    <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                        Community
                    </h4>
                    <ul className="list-none mt-4">
                        <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4`}>
                            <Link to="/">Help Center</Link>
                        </li>
                        <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4`}>
                            <Link to="/">Suggestions</Link>
                        </li>
                        <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4`}>
                            <Link to="/">Blog</Link>
                        </li>
                        <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-0`}>
                            <Link to="/">Newsletters</Link>
                        </li>
                    </ul>
                </div>

                <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                    <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                        Other Links
                    </h4>
                    <ul className="list-none mt-4">
                        <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4`}>
                            <Link to="/refund">Refund/Cancellation</Link>
                        </li>
                        <li className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4`}>
                            <Link to="/">Our Partners</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                GSTIN: 10HEKPK5739H1ZD
            </p>

            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                Copyright Ⓒ 2023-24

                <span className="text-orange-500"> Byte4ge <span className="text-blue-500">(Sardar Enterprises)</span> </span>

                All Rights Reserved.
            </p>

            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
                        onClick={() => window.open(social.link)}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default Footer;
