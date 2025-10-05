import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-screen mt-16 w-full pb-12">
        <div className="max_padd_container relative top-16 xs:top-36">
            <h1 className="h1 capitalize max-w-[37rem]">Digital Shopping Hub Junction</h1>
            <p className="text-gray-50 regular-16 mt-6 max-w-[33rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae ducimus aspernatur cum consectetur eaque ex consequatur, omnis animi sapiente libero facilis ad, commodi quam placeat praesentium doloribus. Nam, amet?</p>
            <div className="flexStart !items-center gap-x-4 my-7" >
                <div className="!regular-24 flexStart gap-x-3" >
                    <i className="bx bxs-star "></i>
                    <i className="bx bxs-star "></i>
                    <i className="bx bxs-star "></i>
                    <i className="bx bxs-star "></i>
                </div>
                <div className="bold-16 sm:bold-20 ">176k <span 
                 className="regular-16 sm:regular-20">Excellent Reviews </span>
                </div>
            </div> 
            <div className="flex max-xs:flex-col gap-2">
                <NavLink to={''} className={"btn_dark_rounded flexCenter"}>Shop now</NavLink>
                <NavLink to={''} className={"btn_dark_rounded flexCenter gap-x-2"}><i className='bx bx-purchase-tag'></i> Shop now</NavLink>
            </div>
        </div>      
    </section>
  )
}
