import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext";

const CartItems = () => {

    const {all_products, cartItems, addToCart, removeFromCart, deleteCart } = useContext(ShopContext);

  return (
    <section className="max_padd-container pt-20 min-h-screen ">
        <small className="text-red-700 ml-10">Note: Click on the quantity number of a product to increase the product quantity</small>
      <table className="w-full mx-auto !mt-2 overflow-scroll">
        <thead>
            <tr className="bg-slate-900/20 regular-18 sm:regular-22">
                <th className="p-1 py-2">Products</th>
                <th className="p-1 py-2">Title</th>
                <th className="p-1 py-2">Price</th>
                <th className="p-1 py-2">Quantity</th>
                <th className="p-1 py-2">Total</th>
                <th className="p-1 py-2 px-[23px]">Action</th>
            </tr>
        </thead>
        <tbody>
            {all_products.map((e)=>{
                if (cartItems[e.id] > 0 ) {
                    return <tr key={e.id} className="border-b border-slate-900/20 p-6 medium-14 text-gray-50 text-center">
                        <td className="flexCenter"><img className="rounded-lg ring-1 ring-slate-900/5 my-1" src={e.image} alt="prdtImg" width={43} height={43} /> </td>
                        <td><div className="line-clamp-3" >{e.name} </div></td>
                        <td>${e.new_price}</td>
                        <td onClick={()=>addToCart(e.id)} className="cursor-pointer w-16 h-16 bg-white" title="Click on this to add to cart" >{cartItems[e.id]}</td>
                        <td>${e.new_price * cartItems[e.id]}</td>
                        <td >
                            <div className="flex justify-center gap-3">
                                <button onClick={()=> removeFromCart(e.id) }><i className="bx bx-minus bx-sm "></i> </button>
                                <button onClick={()=> deleteCart(e.id) }><i className="bx bx-trash bx-sm "></i> </button>
                            </div>
                        </td>
                    </tr>
                }
            })}
        </tbody>
      </table>
      {/*Cart Detail */}

        <div className="flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-white w-full max-w-[666px] overflow-scroll">
            <div className="flex flex-col gap-10">
                <h4 className="bold-20">Summary</h4>
                <div className="flexBetween py-4">
                    <h4 className="medium-16">SubTotal</h4>
                    <h4 className="font-semibold text-gray-30">${0}</h4>
                </div>
                <hr className="-m-8"/>
                <div className="flexBetween py-4">
                    <h4 className="medium-16">Shipping Fee</h4>
                    <h4 className="font-semibold text-gray-30">Free</h4>
                </div>
                <hr className="-m-8" />
                <div className="flexBetween py-4 ">
                    <h4 className="bold-18" >Total</h4>
                    <h4 className="bold-18">${0}</h4>
                </div>
                <button className="btn_dark_rounded w-44">Checkout</button>
                <div className="flex flex-col gap-10 m-0">
                    <h4 className="bold-20 capitalize">Your coupon code enter here:</h4>
                    <div className="flexBetween pl-5 h-12 bg-primary rounded-full ring-2 ring-slate-900/10 " >
                        <input className="bg-transparent border-none outline-none" type="text" placeholder="Coupon code" />
                        <button className="btn_dark_rounded">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default CartItems
