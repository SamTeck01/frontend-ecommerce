// src/components/PlansSection.jsx
// src/components/PlanCard.jsx

import PropTypes from 'prop-types';

const PlanCard = ({ 
  title, 
  priceLabel, 
  price, 
  features = [], 
  ctaText, 
  onCtaClick, 
  bgColor = 'bg-white',
  iconBg = 'bg-ash',
  icon = 'cart',
  textColor = 'text-gray-800' 
}) => {
  return (
    <div className={`rounded-xl p-8 transition-all duration-300 hover:shadow-xl ${bgColor} flex flex-col justify-between`}>
      <div className={`w-16 h-16 rounded-full ${iconBg} flex items-center justify-center mb-6`}>
        <i className={`bx bx-${icon} text-[24px] text-white`}></i>
      </div>
    
      {/* Header: Title + Price */}
      <div className="border-b flex items-center justify-between">
        <h3 className={`text-xl font-semibold mb-4 ${textColor}`}>{title}</h3>
        <div className="text-right">
          <p className="text-2xl font-bold">{price}</p>
          <p className="text-sm font-medium text-ash mb-1">{priceLabel}</p>
        </div>
      </div>

      {/* Body: Features List */}
      <ul className="space-y-3 mb-1 py-4">
        {features.map((feat, idx) => (
          <li key={idx} className="flex items-start">
            {/* A small check‐icon; you can swap for any icon library */}
            <span className="mt-1 mr-2 text-green-500 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-green-500 flex-shrink-0 h-5 w-5"
                fill="none"
                viewBox="0 4 18 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p className={`${textColor}`}>{feat}</p>
          </li>
        ))}
      </ul>

      {/* Footer: CTA Button */}
      <div className="pt-4 border-t">
        <button
          onClick={onCtaClick}
          className="w-full bg-transparent text-ash border-2 border-ash hover:bg-ash hover:text-white py-3 rounded-md font-medium transition duration-300"
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};

PlanCard.propTypes = {
  title: PropTypes.string.isRequired,
  priceLabel: PropTypes.string,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string),
  ctaText: PropTypes.string.isRequired,
  onCtaClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  iconBg: PropTypes.string,
  icon: PropTypes.string,
  textColor: PropTypes.string,
};

const PlansSection = () => {
  // Feature lists for each plan
  const basicFeatures = [
    '1.2KVA / 12V Inverter with 1-year warranty',
    '220AH / 12V Tall Tubular Battery (18 months warranty)',
    'Battery Rack & Electrical Installation Kit included',
  ];

  const premiumFeatures = [
    '1.2KVA / 12V Inverter with 1-year warranty',
    '220AH / 12V Tall Tubular Battery (18 months warranty)',
    'Battery Rack & Electrical Installation Kit included',
    '3× 250W Poly Solar Panels + Solar Charge Controller',
    'Solar Panel Installation Kit & Protective Devices',
  ];

  // Handlers (you can replace with your own logic)
  const handleBasicCta = () => {
    // e.g. navigate to checkout, or open a form modal
    alert('You clicked Get Basic Plan!');
  };

  const handlePremiumCta = () => {
    alert('You clicked Get Premium Plan!');
  };

  return (
    <section className="px-4 py-12 mt-5">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="w-full max-w-[36rem]  ">
          <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-white bg-ash-100 rounded-2xl text-[13px] uppercase mb-10 ">
            Our Solar Plans
          </span>

          <h2 className="h8 text-white ">Flexible Solar Plans for Every Need</h2>

          <p className="text-ash text-[18px] my-4 leading-relaxed">
            Choose the plan that best fits your home’s energy needs. Both Basic and Premium plans
            come with smart, IoT-enabled technology—so you can monitor and control your system online.
          </p>
        </div>

        {/* Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Plan */}
          <PlanCard
            title="Basic Plan"
            priceLabel="Limited Offer"
            price="₦450,000"
            features={basicFeatures}
            ctaText="Get Basic Plan"
            onCtaClick={handleBasicCta}
            bgColor="bg-white"
            borderColor="border-ash"
            textColor="text-ash"
          />

          {/* Premium Plan */}
          <PlanCard
            title="Premium Plan"
            priceLabel="₦800,000"
            price="₦800,000"
            features={premiumFeatures}
            ctaText="Get Premium Plan"
            onCtaClick={handlePremiumCta}
            bgColor="bg-yellow-50"
            borderColor="border-yellow-400"
            textColor="text-ash"
          />
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
