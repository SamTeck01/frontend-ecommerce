
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Products from "./Products.jsx";
import PlansSection from "./PlanSection.jsx";
//import WhyChooseUs from "./WhyChoosUs.jsx";
import ContactUs from "./Contacts.jsx";
import Services from "./Services.jsx";
import ExpertiseHighlight from "./Expertice Highlight.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <PlansSection/>
      <Products/>
      <Services/>
      <ExpertiseHighlight/>
      {/*<WhyChooseUs/>*/}
      <ContactUs />
    </div>
  )
}
