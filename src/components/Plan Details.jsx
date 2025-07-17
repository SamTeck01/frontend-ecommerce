import { useParams } from 'react-router-dom';
import SendWhatsAppMessage from './SendWhatsappMessage';
import plans from '../assets/all_plans';

const PlanDetails = () => {
  const { slug } = useParams();
  const plan = plans.find((item) => item.slug === slug);

  if (!plan) {
    return <p className="text-center mt-20 text-red-500">Plan not found</p>;
  }

  return (
    <section className="px-4 py-24">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src={plan.image} alt={plan.title} className="w-full rounded-lg shadow-md" />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2 text-ash">{plan.title}</h1>
          <p className="text-gold2 font-bold text-xl mb-4">{plan.price}</p>
          <p className="text-ash mb-4">{plan.description}</p>

          <ul className="space-y-2 mb-4">
            {plan.features.map((f, i) => (
              <li key={i} className="text-sm text-ash">✔ {f}</li>
            ))}
          </ul>

          <button
            href={`https://wa.me/234XXXXXXXXXX?text=Hello,%20I'm%20interested%20in%20the%20${plan.title}%20plan.`}
            onClick={()=>SendWhatsAppMessage(`Hello, I'm interested in the ${plan.title} plan`)}
            className="inline-block mt-4 px-6 py-3 bg-ash text-white rounded hover:bg-black transition"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default PlanDetails;
