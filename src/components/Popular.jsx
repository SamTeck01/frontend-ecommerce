import POPULAR from "../assets/popular";
import Item from "./Item";
import firstPic from '../assets/demo-business-company-01.jpg';
import secondPic from '../assets/demo-business-company-02.jpg';

export default function Popular() {
  return (
    <section>
      <div className="max_padd_container py-12 xl:py-28 xl:w-[88%]" >

        <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side: Heading and Subheading */}
          <div>
            <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-white bg-ash-100 rounded-2xl text-[13px] uppercase mb-10 ">
              About Bee Energy
            </span>        
            <h2 className="h8">Empowering Homes with Sustainable Solar Solutions</h2>
            <p className="text-ash text-[18px]">
              We’re passionate about transforming homes and businesses with cutting-edge solar technology. 
              With years of experience, we’re dedicated to making clean energy accessible, reliable, and affordable for everyone.
            </p>
          </div>

          {/* Right side: Overlapping images */}
          <div className="relative flexEnd">
            {/* Larger image */}
            <img
              src={secondPic}
              alt="Team at work"
              className="w-[76%] h-auto rounded-lg shadow-lg "
            />
            {/* Smaller overlapping image */}
            <img
              src={firstPic}
              alt="Team discussion"
              className="absolute -bottom-8 left-3 w-[60%] h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
        {/*container */}
        <div className="grid grid-cols-1 sx:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6" >
            {POPULAR.map((item)=> <Item key={item.id} item={item} id={item.id} /> ) }
        </div>
      </div>
    </section>
  )
}
