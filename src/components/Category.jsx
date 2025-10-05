/* eslint-disable react/prop-types */
import all_products from "../assets/all_products";
import Item from "./Item";

export default function Category({category, banner }) {
  return (
    <section className="max_padd_container py-12 xl:py xl:py-28" >
      <div>
        <div>
          <img src={banner} alt="banner" className="block my-7 mx-auto" />
        </div>

        <div className="flexBetween my-8 mx-2 " >
          <h5 ><span className="font-bold" >Showing 1-12</span><span> out of 36 products </span> </h5>
          <div className="flexBetween max_sm:p-4 gap-x-4 px-8 py-3 rounded-5xl ring-1 ring-slate-900/15 cursor-pointer " >Sort by <i className="bx bx-chevron-down text-xl "></i> </div>
        </div>

        {/*container */}
        <div className="grid grid-cols-1 sx:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6" >
          {all_products.map((item) => {
            if (category === item.category ) {
              return <Item key={item.id} item={item} id={item.id} />
            }
          } )}
        </div>

        <div className="mt-16 text-center ">
          <button className="btn_dark_rounded">Load more </button>
        </div>
      </div>
    </section>
  )
}
