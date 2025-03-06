import { apple, bill, google, } from '../assets';
import styles, { layout } from '../style';

export const Billing = () => (
    <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={bill} alt="billing" className="w-p[100%] h-[100%] relative z-[5]" />
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                User-friendly interfaces:<br className="sm:block hidden " />Best user <span className="text-orange-500">X</span>perience.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Our platform offers easy-to-use dashboards with stunning designs, robust security measures, and the best user experience. Additionally, we provide an unparalleled content management system (CMS) experience, ensuring a seamless and efficient workflow for your website or application.
            </p>
            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <img src={google} alt="googleplay" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
                <img src={apple} alt="applestore" className="w-[128px] h-[42px] object-contain cursor-pointer" />
            </div>
        </div>
    </section>
)

export default Billing; 