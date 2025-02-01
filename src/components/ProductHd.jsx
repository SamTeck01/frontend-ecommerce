
const ProductHd = (props) => {

  const {product} = props;

  return (
    <div className="flex items-center gap-x-2 flex-wrap medium-16 my-4 capitalize " >
      Home <i className="bx bx-chevron-right "></i> Shop <i className="bx bx-chevron-right "></i> {product.category}
      <i className="bx bx-chevron-right "></i> {product.name}
    </div>
  )
}

export default ProductHd;
