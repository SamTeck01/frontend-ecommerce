
import productImage from '../assets/product_1.png';
import CardComponent from './CardComponent.jsx';
import IconButton from '@mui/material/IconButton'

export default function Products() {

  return (
    <section className="px-4 py-12" >
      <div className=' container mx-auto'>
        <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-white bg-ash-100 rounded-2xl text-[13px] uppercase mb-10 ">
          Our Products
        </span>   
        <h2 className="h8 text-white w-full md:w-[50%] lg:w-[50%]">We offer a range of products to choose from</h2>

        <div className='flexEnd'><IconButton aria-label="" className='h-[35px] !rounded-3xl font-semibold'>
          <p className='text-white text-sm ms-1 '>Browse all products</p>
          < i className='bx text-white bx-arrow-right-stroke'  ></i> 
        </IconButton></div>  
        
        {/*Products section */}
        <div className='flexCenter'><div className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          <CardComponent title={'Solar Inverter'} description={'Efficient DC to AC converters.'} image={productImage} to={'/'} />
          <CardComponent title={'Solar Panels'} description={'High-efficiency panels for reliable solar power.'} image={productImage} to={'/'} />
          <CardComponent title={'Battery Storage'} description={'Store solar energy for later use.'} image={productImage} to={'/'} />        
          <CardComponent title={'Monitoring Systems'} description={'Secure structures for panel installation.'} image={productImage} to={'/'} />
        </div></div>

      </div>
    </section>
  
  )
}
