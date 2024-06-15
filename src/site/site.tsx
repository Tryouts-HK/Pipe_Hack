import CallToAction from "./calltoaction"
import Contact from "./contact"
import Features from "./features"
import Footer from "./footer"
import Hero from "./hero"
import HowItWorks from "./how"
import Introduction from "./introduction"
import Mission from "./mission"
import Navbar from "./navbar"
import Testimonials from "./testimonials"

export const Site: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Introduction />
            <Mission />
            <HowItWorks />
            <Features />
            <Testimonials />
            <CallToAction />
            <Contact />
            <Footer />
        </div>
    )
}