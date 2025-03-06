import styles from '../style';
import { discount, robot } from '../assets';
import { Link } from 'react-router-dom';
import Button from './Button';
const Hero = () => (

    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row items-center py-[2px] px-4 bg-discount-gradient rounded-[20px] mb-2">
                <img src={discount} alt="moto" className="w-[32px] h-[32px]" />
                <p className={`text-white font-poppins ml-2 sm:text-[18px] text-[12px]`}>
                    <span className="text-white">Online Presence</span> <span className='text-gray-400'>with {" "}</span>
                    <span className="text-white">Robust Application</span>
                </p>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
                    Weaving <br className="sm:block hidden" /> {" "}
                    <span className="text-gradient">Web Magic</span> {"                        "}

                </h1>
                {/* <div className="ss:flex hidden md:mr-4 mr-0">
                    <Link to="/contact"><GetStarted /></Link>
                </div> */}
            </div>
            <div>
                <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"> With Excellence.
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Cutting-edge web design company creating stunning websites that captivate and engage users. Transforming online presence effortlessly.
                </p>
                {/* <p className={`${styles.paragraph} max-w-[470px] mt-5`}><a className="text-orange-500">Price Range - Rs. 3,000-55,000</a>
                </p> */}
            </div>
            <div className='mt-8'>
                <Link to="/contact"><Button /></Link>
            </div>
        </div>

        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={robot} alt="robot" className="w-[100%] h-[100%] relative z-[5]" />
            {/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
        </div>
        {/* <div className={` ss:hidden ${styles.flexCenter}`}>
            <Link to="/contact"><GetStarted /></Link>
        </div> */}
    </section>
)

export default Hero