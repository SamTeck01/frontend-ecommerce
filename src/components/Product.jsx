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

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <section className="max_padd_container py-28" >
      <div>
        <ProductHd product={product} />
        <ProductDisplay product={product} />
        <ProductDescription/>
        <RelatedProducts/>
      </div>
    </section>
  )
}