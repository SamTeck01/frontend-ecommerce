import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="relative bg-center bg-no-repeat mt-16 w-full">
        <div className="container mx-auto relative flex flex-col space-y-6 px-4 !pt-[59px] !md:pt-30   ">
          
            <div className="inline-block">
              <span className="bg-gold2/35 text-black py-1 px-3 rounded-full text-sm font-medium">
                Business Solutions
              </span>
            </div>  

            <h4 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-black max-w-[36rem]">
              Power Your Solar System With <span className="text-ash" >Online Control</span> Solutions
            </h4>

            <p className="text-gray-600 text-lg md:text-xl max-w-[36rem]">
              Bee Energy Hive specializes in building and assembling inverter systems, integrating smart IoT technologies, and delivering tailored energy solutions for businesses and homes.
            </p>

            <div className="flex max-xs:flex-col gap-2">
                <NavLink to={'/'} className={"bg-black border-2 hover:border-black hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-medium transition duration-300 flexCenter"}>< i className='bx bx-like text-lg me-4'></i> Get Started</NavLink>
                <NavLink to={'/'} className={"bg-black border-2 hover:border-black hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-medium transition duration-300 flexCenter"}>< i className='bx bx-like text-lg me-4'></i> Explore Services</NavLink>
            </div>
        </div>      
    </section>
  )
}
