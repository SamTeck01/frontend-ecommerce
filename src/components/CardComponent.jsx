import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardComponent = ({ title, description, image, to, productCount }) => {
  return (
    <Link to={to} className="block">
      <section className='bg-grey-glass flex flex-col gap-3 p-[10px] rounded-[15px]'>
        {/*image */}
        <div>
          <img src={image} className='rounded-[15px] w-[100vw] object-cover' />
        </div>

        {/*little info */}
        <div className='rounded-[10px] bg-white py-4 px-2 '>
          {/*name*/}
          <div>
            <p className='text-base font-semibold text-black-400' >{title}</p>
            <p className='text-sm'>{description}</p>
          </div>
        </div>

        <div className='rounded-[10px] bg-white py-4 px-2' >
          <div className='flex items-center justify-between -mb-1'>
            <span className='text-sm text-gray-30'>Starting from</span>
            <span className='text-lg font-semibold text-gold2'>R 1,500.00</span>
          </div>
          
          <hr className="my-3 border-t border-gray-300" />

          <div className='flex flex-row justify-between' >
            <div className='flex items-center gap-1 text-sm text-gray-500'>
              <i className='bx bx-box text-[16px] text-gold2'></i>
              <span>{productCount} Products</span>
            </div>

            {/*button */}
            <button className='py-1 px-3 text-gold2 font-medium flex items-center gap-1 text-sm border-[1.5px] border-gold2 rounded-2xl ' >
              Explore <i className='bx bx-right-arrow-alt text-lg'></i>
            </button>
          </div>
        </div>
      </section>
    </Link>
  );
};
CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  productCount: PropTypes.number.isRequired,
};

export default CardComponent;
