import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-screen mt-16 w-full pb-12">
        <div className="max_padd_container relative top-16 xs:top-36">
            <h4 className="h7 max-w-[37rem] text-white">Power Your Home with the Sun - Shop Smart Solar Solutions Today</h4>
            <p className="text-gray-50 regular-20 mb-6 mt-6 max-w-[33rem]">Explore Bee Solar Hive’s innovative, eco-friendly solar gadgets designed to transform your home into a clean energy powerhouse and reduce your carbon footprint.</p> 
            <div className="flex max-xs:flex-col gap-2">
                <NavLink to={''} className={"btn_dark_rounded flexCenter"}>< i className='bx bx-like text-lg me-4'></i> Explore Products</NavLink>
            </div>
        </div>      
    </section>
  )
}
