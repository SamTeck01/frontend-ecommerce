import { useParams } from 'react-router-dom';
import plans from '../assets/all_plans';
import { Star, ShoppingCart, AlertCircle, Info, DollarSign, ChevronRight } from 'lucide-react';
import SendWhatsAppMessage from './SendWhatsappMessage';
import { Link } from 'react-router-dom';

const PlanDetails = () => {
  const { slug } = useParams();
  const plan = plans.find((item) => item.slug === slug);

  if (!plan) {
    return <p className="text-center mt-20 text-red-500">Plan not found</p>;
  }

  // Filter out the current plan to show others
  const similarPlans = plans.filter(p => p.slug !== slug).slice(0, 3); // Show top 3


  return (
     <section className="px-4 py-24 ">
      <div className="md:container w-90 -mx-1 md:mx-auto ">

        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 flex items-center mb-3 ms-2 space-x-2">
          <Link to="/" className="hover:text-gold2">Home</Link>
          <ChevronRight size={16} />
          <Link to="/plans" className="hover:text-gold2">Plans</Link>
          <ChevronRight size={16} />
          <span className="text-gray-800 font-medium">{plan.title}</span>
        </nav>

        <div className="md:bg-white rounded-lg grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-2 md:gap-12 md:w-[75%] w-full">

          {/* Image */}
          <div className='md:w-[280px] w-full flexCenter md:flex md:items-start flex-col bg-white md:bg-transparent p-3 rounded-lg shadow-md'>
            <div>
              <img 
                src={plan.image} 
                alt={plan.title} 
                className="w-full rounded-lg shadow-lg"
              />
            </div>  

            <div className="mt-6 hidden md:grid">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Promotions</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2"><Info size={16}/> Free Installation in Lagos</li>
                <li className="flex items-center gap-2"><DollarSign size={16}/> Flexible payment options available</li>
                <li className="flex items-center gap-2"><AlertCircle size={16}/> 18-month battery warranty</li>
              </ul>
            </div>
          </div>

          {/* Details */}
          <div className='w-full bg-white md:bg-transparent p-3 rounded-lg '>
            <h1 className="text-2xl font-bold text-gray-800">{plan.title}</h1>
            <p className="text-gray-500 mt-1">{plan.subtext || 'Smart Energy Plan for Modern Homes'}</p>

            <p className="text-2xl text-gray-800 font-bold mt-3">{plan.price}</p>

            <div className="flex items-center gap-1 mt-2 text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor"/>)}
              <span className="text-gray-500 text-sm ml-1">(5 ratings)</span>
            </div>

            <ul className="space-y-1 my-4 text-gray-600">
              {plan.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <AlertCircle size={14} className="text-green-600"/> {feat}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => SendWhatsAppMessage(`Hello, I'm interested in the ${plan.title} plan`)} 
              className="bg-gold2 hover:bg-gold2/80 text-white font-medium px-6 py-3 rounded-md flex justify-between items-center gap-2 mt-3 transition w-full"
              >
              <ShoppingCart size={18}/> <span>Chat on Whatsapp</span> <div></div>
            </button>
          </div>

          <div className="show md:hidden bg-white md:bg-transparent p-3 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Promotions</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center gap-2"><Info size={16}/> Free Installation in Lagos</li>
              <li className="flex items-center gap-2"><DollarSign size={16}/> Flexible payment options available</li>
              <li className="flex items-center gap-2"><AlertCircle size={16}/> 18-month battery warranty</li>
            </ul>
          </div>

          {/* Similar Plans Section */}
          <div className=" bg-white md:bg-transparent py-3 px-2 rounded-lg shadow-md">
            <h2 className="text-xl font-medium text-gray-800 ps-1 mb-2">Customers Also Viewed</h2>
            <div className='overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory' >
              <div className="flex gap-3">
                {similarPlans.map((similar, idx) => (
                  <Link 
                    to={`/plan/${similar.slug}`} 
                    key={idx}
                    className="w-52 shrink-0 rounded-lg hover:shadow-md transition bg-white inline-block snap-start"
                  >
                    <img src={similar.image} alt={similar.title} className="w-full h-40 object-cover rounded-md mb-1.5" />
                    <div className='px-1 pb-1'>
                      <h3 className="text-lg font-semibold text-gray-700">{similar.title}</h3>
                      <p className="text-gold2 font-bold">{similar.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default PlanDetails;