import { useContext } from "react";
import {ShopContext} from '../Context/ShopContext.jsx';
import { useParams } from "react-router";
import ProductHd from "./ProductHd";
import ProductDisplay from "./ProductDisplay.jsx";
import ProductDescription from "./ProductDescription.jsx";
import RelatedProducts from "./RelatedProducts.jsx";

export default function Product() {

  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  const {isVisible} = useContext(ShopContext);

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="pt-[75px]">
      {isVisible && <div className="bg-lime-600 text-white py-2 text-md text-center"><i className="bx bx-mark"></i>Product Added Successfully</div>}
      <section className="max_padd_container !mt-0 py-18" >
        <div>
          <ProductHd product={product} />
          <ProductDisplay product={product} />
          <ProductDescription/>
          <RelatedProducts/>
        </div>
      </section>
    </div>
  )
}