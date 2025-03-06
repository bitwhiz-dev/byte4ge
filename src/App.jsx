import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, GoToTopButton, About, SignInForm, Contact, Terms, Error, PrivacyPolicy, Refund, ImageCarousel, } from "./components";
import { Route, Routes } from 'react-router-dom';


const App = () => (
  <Routes>
    <Route path="/" element={<AppContent />} />
    <Route path="/login" element={<SignInForm />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/terms" element={<Terms />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/refund" element={<Refund />} />
    <Route path="*" element={<Error />} />
  </Routes>
);

const AppContent = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        {/* // testimonial has '#clients id ' for navigation */}
        {/* <ImageCarousel /> */}
        {/* <Clients /> */}
        <CTA />
        <GoToTopButton />
        {/* <PrivacyPolicy /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
