import React from "react";
import { useEffect } from 'react';
import styles from "../style";
import Uninav from "./Uninav";
import GoToTopButton from "./GoToTopButton";
import Footer from "./Footer";
import { Link, useLocation } from "react-router-dom";
import About from "./About";
const Terms = () => {
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
                            Terms &amp;{" "}
                            <Link to="/about" className="text-green-500">
                                Conditions
                            </Link>
                        </h1>
                        <p className={`${styles.paragraph} text-white mt-[20px]`}>
                            Welcome to Byte4ge Web Solutions! <br />
                            <br />
                            These terms and conditions outline the rules and regulations for
                            the use of Sardar Enterprises's Website, located at
                            <strong><p className="text-green-500">https://byte4ge.com/</p></strong>
                            <br />
                            <strong><p className="text-green-500">1</p></strong> By accessing this website we assume you accept these terms and
                            conditions. Do not continue to use Byte4ge Web Solutions if you do
                            not agree to take all of the terms and conditions stated on this
                            page.
                            <br />
                            <br />
                            <strong><p className="text-green-500">2</p></strong> The following terminology applies to these Terms and Conditions,
                            Privacy Statement and Disclaimer Notice and all Agreements:
                            "Client", "You" and "Your" refers to you, the person log on this
                            website and compliant to the Company's terms and conditions. "The
                            Company", "Ourselves", "We", "Our" and "Us", refers to our
                            Company. "Party", "Parties", or "Us", refers to both the Client
                            and ourselves. All terms refer to the offer, acceptance and
                            consideration of payment necessary to undertake the process of our
                            assistance to the Client in the most appropriate manner for the
                            express purpose of meeting the Client's needs in respect of
                            provision of the Company's stated services, in accordance with and
                            subject to, prevailing law of in. Any use of the above terminology
                            or other words in the singular, plural, capitalization and/or
                            he/she or they, are taken as interchangeable and <br />
                            <br />
                            <strong><p className="text-green-500">3. Cookies</p></strong>
                            <br />
                            We employ the use of cookies. By accessing Byte4ge Web Solutions,
                            you agreed to use cookies in agreement with the Sardar
                            Enterprises's Privacy Policy.
                            <br />
                            Most interactive websites use cookies to let us retrieve the
                            user's details for each visit. Cookies are used by our website to
                            enable the functionality of certain areas to make it easier for
                            people visiting our website. Some of our affiliate/advertising
                            partners may also use cookies.
                            <br />
                            <br />
                            <strong><p className="text-green-500">4. License</p></strong>
                            <br />
                            Unless otherwise stated, Sardar Enterprises and/or its licensors
                            own the intellectual property rights for all material on Byte4ge
                            Web Solutions. All intellectual property rights are reserved. You
                            may access this from Byte4ge Web Solutions for your own personal
                            use subjected to restrictions set in these terms and conditions.
                            <br />
                            <br />
                            <strong><p className="text-green-500">5. You must not:</p></strong>
                            <br />
                            • Republish material from Byte4ge Web Solutions
                            <br />
                            • Sell, rent or sub-license material from Byte4ge Web Solutions
                            <br />
                            • Reproduce, duplicate or copy material from Byte4ge Web Solutions
                            <br />
                            • Redistribute content from Byte4ge Web Solutions
                            <br />
                            <br />
                            This Agreement shall begin on the date hereof.
                            <br />
                            <br />
                            Parts of this website offer an opportunity for users to post and
                            exchange opinions and information in certain areas of the website.
                            Sardar Enterprises does not filter, edit, publish or review
                            Comments prior to their presence on the website. Comments do not
                            reflect the views and opinions of Sardar Enterprises,its agents
                            and/or affiliates. Comments reflect the views and opinions of the
                            person who post their views and opinions. To the extent permitted
                            by applicable laws, Sardar Enterprises shall not be liable for the
                            Comments or for any liability, damages or expenses caused and/or
                            suffered as a result of any use of and/or posting of and/or
                            appearance of the Comments on this website. <br />Sardar Enterprises
                            reserves the right to monitor all Comments and to remove any
                            Comments which can be considered inappropriate, offensive or
                            causes breach of these Terms and Conditions.<br /><br />
                            <strong><p className="text-green-500">6. You warrant and represent that:</p></strong><br />• You are entitled to post the Comments on our
                            website and have all necessary licenses and consents to do so; <br />•
                            The Comments do not invade any intellectual property right,
                            including without limitation copyright, patent or trademark of any
                            third party;<br /> • The Comments do not contain any defamatory,
                            libelous, offensive, indecent or otherwise unlawful material which
                            is an invasion of privacy<br /> • The Comments will not be used to
                            solicit or promote business or custom or present commercial
                            activities or unlawful activity. <br /><br /><br />You hereby grant Sardar Enterprises a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media. <br /><br />
                            <br /><strong><p className="text-green-500">7. Hyperlinking to our Content</p></strong>
                            <br />The following organizations may link to our Website without prior written approval: <br />
                            •	Government agencies; <br />
                            •	Search engines; <br />
                            •	News organizations; <br />
                            •	Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and<br />
                            •	System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site. <br /><br />
                            These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site. <br /><br />
                            <br />We may consider and approve other link requests from the following types of organizations: <br /><br />
                            •	commonly-known consumer and/or business information sources; <br />
                            •	dot.com community sites; <br />
                            •	associations or other groups representing charities; <br />
                            •	online directory distributors; <br />
                            •	internet portals; <br />
                            •	accounting, law and consulting firms; and<br />
                            •	educational institutions and trade associations. <br /><br />
                            We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Sardar Enterprises; and (d) the link is in the context of general resource information. <br /><br />
                            These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site. <br /><br />
                            If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Sardar Enterprises. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response. <br /><br />
                            Approved organizations may hyperlink to our Website as follows: <br /><br />
                            •	By use of our corporate name; or<br />
                            •	By use of the uniform resource locator being linked to; or<br />
                            •	By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site. <br /><br />
                            No use of Sardar Enterprises's logo or other artwork will be allowed for linking absent a trademark license agreement. <br /><br />
                            <strong><p className="text-green-500">8. iFrames</p><br /></strong>
                            Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website. <br /><br />
                            <strong><p className="text-green-500">9. Content Liability</p><br /></strong>
                            We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights. <br /><br />
                            <strong><p className="text-green-500">10. Reservation of Rights</p><br /></strong>
                            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions. <br /><br />
                            <strong><p className="text-green-500">11. Removal of links from our website</p><br /></strong>
                            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly. <br /><br />
                            We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date. <br /><br />
                            <strong><p className="text-green-500">12. Disclaimer</p><br /></strong>
                            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will: <br /><br />
                            •	limit or exclude our or your liability for death or personal injury; <br />
                            •	limit or exclude our or your liability for fraud or fraudulent misrepresentation; <br />
                            •	limit any of our or your liabilities in any way that is not permitted under applicable law; or<br />
                            •	exclude any of our or your liabilities that may not be excluded under applicable law. <br /><br />
                            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty. <br /><br />
                            As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature. <br /><br />
                            <strong><p className="text-green-500">13. Miscellaneous</p><br /></strong>
                            (a.) Website maintenance will be provided free of cost for 1 year with footer credit of Byte4ge. i.e.
                            <img width="300px" src="https://byte4ge.com/admin/assets/credit.png"></img>

                            If you want to remove the footer credit then maintenance fee will be levied.<br />
                            (b.) The legal name of the business owner is Pushpraj Kumar.<br />
                            <br />
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

export default Terms;
