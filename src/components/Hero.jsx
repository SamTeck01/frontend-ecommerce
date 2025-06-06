import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="relative md:bg-hero lg:bg-hero bg-cover bg-center bg-no-repeat mt-16 w-full">
        <div className="container mx-auto relative flex flex-col space-y-6 px-4 !pt-[59px] !md:pt-30   ">
          
            <div className="inline-block">
              <span className="bg-ash-100 text-white py-1 px-3 rounded-full text-sm font-medium">
                Business Solutions
              </span>
            </div>  

            <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-[36rem]">
              Power Your Solar System With <span className="text-ash" >Online Control</span> Solutions
            </h4>

            <p className="text-gray-600 text-lg md:text-xl max-w-[36rem]">
              With BEE Energy’s intuitive platform, you can manage, monitor, and optimize your solar system from the palm of your hand. Gain real-time insights, track energy consumption, and make adjustments all in one easy-to-use interface. Take control of your energy and reduce your carbon footprint today.
            </p>

            <div className="flex max-xs:flex-col gap-2">
                <NavLink to={'/'} className={"bg-black hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-medium transition duration-300 flexCenter"}>< i className='bx bx-like text-lg me-4'></i> Explore Our Smart Solutions</NavLink>
            </div>
        </div>      
    </section>
  )
}
