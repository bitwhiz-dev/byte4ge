import styles from "../style";
import Button from "./Button";
import { Link } from "react-router-dom";

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}><span className="text-orange-500">X</span>perience our service</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Immerse yourself in a transformative and unforgettable journey with our exceptional service that exceeds all expectations.
            </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-6 mb-1`}>
            <Link to="/contact"><Button /></Link>

        </div>
    </section>
);

export default CTA;
