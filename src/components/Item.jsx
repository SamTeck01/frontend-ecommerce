/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Item({id, item }) {
    const {name, image, old_price, new_price} = item;

  return (
    <div className="rounded-xl overflow-hidden shadow-lg " >
      <div className="relative flexCenter group overflow-hidden transition-all duration-100" >
        <Link onClick={window.scrollTo(0, 0)} to={`/product/${id} `} className="h-12 w-12 bg-white rounded-full flexCenter absolute top-1/2 bottom-1/2 !py-2 z-20 
         scale-0 group-hover:scale-100 transition-all 
         duration-700 " ><i className=" scale-125 bx bx-search bold-22 hover:rotate-90 transition-all duration-[.3s] " ></i> </Link>
        <img src={image} className="w-full block object-cover group-hover:scale-110 transition-all duration-1000 " alt="productImage" />
      </div>{/* scale-0 group-hover:scale-100 */}
        <div className="p-4 overflow-hidden" >
            <h4 className="my-[6px] medium-16 line-clamp-2 text-gray-30" >{name}</h4>
            <div className="flex gap-5">
                <div className="bold-16">{new_price}.00</div>  
                <div className="text-secondary bold-16 line-through " >{Number(old_price).toFixed(2) }</div>
            </div>
        </div>

    </div>
  )
}