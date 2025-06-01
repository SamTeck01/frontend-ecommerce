
export default function Offer() {

  return (
    <section className="bg-green-50 px-4 py-24 mt-16 max_padd_container" >
      <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-white bg-ash-100 rounded-2xl text-[13px] uppercase mb-10 ">
        Our Products
      </span>   
      <h2 className="h8 w-[50%]">We offer a range of products to choose from</h2>
      
      {/*Products section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Solar Panel</h3>
          <p className="text-gray-600 mb-4">High-efficiency solar panels for your home or business.</p>
          <a href="#" className="text-green-600 font-medium hover:underline">Learn More</a>
        </div>
        
      </div>

    </section>
  )
}
