import { useParams } from 'react-router-dom';
//import plans from '../assets/all_plans';
import { Star, ShoppingCart, AlertCircle, Info, DollarSign, ChevronRight, ChevronDown, ChevronUp, Heart, Share2 } from 'lucide-react';
import SendWhatsAppMessage from './SendWhatsappMessage';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useWishlist } from './WishlistContext';
import { useContext } from 'react';
import { PlansContext } from './PlansContext';


const PlanDetails = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const { plans } = useContext(PlansContext);
  const { planWishlist, togglePlanWishlist } = useWishlist();
  const [showToast, setShowToast] = useState(false);
  const [parsedDescription, setParsedDescription] = useState([]);
  const [openSections, setOpenSections] = useState([]);

  const { slug } = useParams();
  const plan = plans.find((item) => item.slug === slug);

  useEffect(() => {
    if (!plan?.description) return;

    try {
      const parsed = JSON.parse(plan.description);
      setParsedDescription(parsed);
      setOpenSections(parsed.map(() => true));
    } catch (err) {
      console.error("Failed to parse plan description:", err);
    }
  }, [plan]);
  
  if (!plan || !plan.description) {
    return <div className='py-24 text-center'>Loading plan details...</div>;
  }else{null}
  
  const handleWishlistToggle = () => {
    togglePlanWishlist(plan.slug);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000); // 3 seconds
  };
  
  const isWishlisted = planWishlist.includes(plan.slug);
  
  let parsedFeatures = [];
  try {
    // Replace curly braces with square brackets
    parsedFeatures = JSON.parse(plan.features.replace(/^{/, '[').replace(/}$/, ']'));
  } catch (err) {
    console.error('Error parsing features:', err);
  }
  
  // Filter out the current plan to show others
  const similarPlans = plans.filter(p => p.slug !== slug).slice(0, 3); // Show top 3

  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.map((isOpen, idx) => (idx === index ? !isOpen : isOpen))
    );
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: plan.title,
        text: `Discover the '${plan.title}' solar plan — just ${plan.price} from Bee Energy Hive!`,
        url: window.location.href
      })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.log('Share failed', error));
    } else {
      alert('Sharing not supported on this browser. Copy the link manually.');
    }
  };

  return (
     <section className="px-4 py-24 ">
      <div className="md:container w-90 -mx-1 md:mx-auto relative">
        {/*Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="fixed top-16 left-auto bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50 w-[94.5%] md:w-[80%] flex items-center justify-between"
            >
              {isWishlisted ? 'Plan Successfully Wishlisted' : 'Removed from Wishlist'}
              <HashLink smooth to="/wishlist" className="text-white underline ml-2">
                View Wishlist
              </HashLink>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Breadcrumbs */}
        <nav className="text-sm text-ash flex items-center mb-3 ms-2 space-x-2">
          <Link to="/" className="hover:text-gold2">Home</Link>
          <ChevronRight size={16} />
          <Link to="/plans" className="hover:text-gold2">Plans</Link>
          <ChevronRight size={16} />
          <span className="text-black font-medium">{plan.title}</span>
        </nav>

        <div className="md:bg-white bg-transparent rounded-lg grid grid-cols-1 gap-2 md:gap-2 md:w-[75%] w-full">

          <div className='flex md:flex-row flex-col gap-2 md:gap-10'>
            {/* Image */}
            <div className='md:w-[280px] w-full flexCenter shrink-0 md:flex md:items-start flex-col bg-white md:bg-transparent p-3 rounded-lg shadow-md md:shadow-none'>
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
            <div className='w-full bg-white md:bg-transparent p-3 rounded-lg'>
              <h1 className="text-2xl font-bold text-gray-800">{plan.title}</h1>
              <p className="text-gray-500 mt-1">{plan.subtext || 'Smart Energy Plan for Modern Homes'}</p>

              <p className="text-2xl text-gray-800 font-bold mt-3">{plan.price}</p>

              <div className='flex justify-between' >
                <div className="flex items-center gap-1 mt-2 text-gold2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor"/>)}
                  <span className="text-gray-500 text-sm ml-1">(5 ratings)</span>
                </div>

                <div className="flex items-center gap-3">
                  <motion.span
                    whileTap={{ scale: 0.8 }}
                    onClick={handleWishlistToggle}
                    className="cursor-pointer"
                  >
                    {isWishlisted ? (
                      <Heart size={20} fill='#e49900' stroke='#e49900' />
                    ) : (
                      <Heart size={20} className="text-gold2" />
                    )}
                  </motion.span>

                  <Share2 size={20} className="text-gold2 cursor-pointer" onClick={handleShare}/>
                </div>
              </div> 

              <ul className="space-y-1 my-4 text-gray-600">
                {parsedFeatures.map((feat, idx) => (
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
          </div>

          <div className="show md:hidden bg-white md:bg-transparent p-3 rounded-lg shadow-md md:shadow-none ">
            <h3 className="text-lg font-semibold mb-2 text-black">Promotions</h3>
            <ul className="space-y-2 text-ash text-sm">
              <li className="flex items-center gap-2"><Info size={16}/> Free Installation in Lagos</li>
              <li className="flex items-center gap-2"><DollarSign size={16}/> Flexible payment options available</li>
              <li className="flex items-center gap-2"><AlertCircle size={16}/> 18-month battery warranty</li>
            </ul>
          </div>

          {/* Description */}
          <div className="bg-white md:bg-transparent p-3 rounded-lg md:shadow-none shadow-md">
            <h2 className="text-lg font-semibold text-black mb-4">Description</h2>

            {parsedDescription.map((section, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full text-left flex justify-between items-center text-md font-medium text-black mb-2 focus:outline-none"
                >
                  {section.title}
                  <div>{openSections[index] ? <ChevronDown size={16}/> : <ChevronUp size={16} /> }</div>
                </button>

                <AnimatePresence>
                  {openSections[index] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      {Array.isArray(section.content) ? (
                        <ul className="list-disc list-inside text-ash text-base space-y-1">
                          {section.content.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600">{section.content}</p>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Similar Plans Section */}
          <div className=" bg-white md:bg-transparent py-3 px-2 rounded-lg md:shadow-none shadow-md">
            <h2 className="text-lg font-medium text-black ps-1 mb-2">Customers Also Viewed</h2>
            <div className='overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory pb-2' >
              <div className="flex gap-3">
                {similarPlans.map((similar, idx) => (
                  <HashLink smooth to={`/plans/${similar.slug}`}
                    key={idx}
                    className="w-52 shrink-0 rounded-lg hover:shadow-md transition bg-white inline-block snap-start"
                  >
                    <img src={similar.image} alt={similar.title} className="w-full h-40 object-cover rounded-t-md mb-1.5" />
                    <div className='px-1 pb-1'>
                      <h3 className="text-base font-medium text-gray-700">{similar.title}</h3>
                      <p className="text-gold2 text-base font-semibold">{similar.price}</p>
                    </div>
                  </HashLink>
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