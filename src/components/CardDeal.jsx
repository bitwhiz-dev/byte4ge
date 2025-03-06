import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';
import { Link } from 'react-router-dom';

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Require a WebApp ?<br className="sm:block hidden" /><span className="text-orange-500">X</span>cute a single action.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                With utmost commitment to excellence, we guarantee delivering high-quality, cost-effective products and web pages. Trust in our expertise and experience as we strive to exceed your expectations and provide you with the best value for your investment.
            </p>
            <Link to="/contact" className="mt-10"><Button /></Link>
        </div>
        <div className={layout.sectionImg}>
            <img src={card} alt="card" className="w-[100%] h-[100%]" />
        </div>
    </section>
)


export default CardDeal;