import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
                {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
                {content}
            </p>
        </div>
    </div>
)

const Business = () => {
    return (
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>
                    Unparalleled<br className="sm:block hidden" /> <span className="text-orange-500">X</span>cellence In WebDesign.
                </h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    We deliver top-quality web solutions, focusing on responsive design, seamless navigation, performance, accessibility, and robust security for a flawless online presence.
                </p>
                <Link to="/contact" className="mt-10"><Button /></Link>
            </div>
            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
        </section >
    )
}

export default Business
