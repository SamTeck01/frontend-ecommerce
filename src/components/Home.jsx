
import Hero from "./Hero.jsx";
import Popular from "./About.jsx";
import Products from "./Products.jsx";
import PlansSection from "./PlanSection.jsx";
import WhyChooseUs from "./WhyChoosUs.jsx";
import Services from "./Services.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      <Popular/>
      <PlansSection/>
      <Products/>
      <Services/>
      <WhyChooseUs/>
      
    </div>
  )
}
