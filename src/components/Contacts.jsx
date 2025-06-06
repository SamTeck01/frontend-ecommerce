import sendWhatsAppMessage from './SendWhatsappMessage';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const sendEmail = async(e) => {
  e.preventDefault();

  await emailjs.sendForm(
    'service_h8ddgou',
    'template_5c8ze1k',
    e.target,
    'Tt6Lsp9ljrdjT8qhs'
  ).then((result) => {
    console.log(result.text);
    alert("Message sent!");
  }, (error) => {
    console.log(error.text);
  });

  e.target.reset(); // Reset the form after submission
};

const Contact = () => {
return (
    <section id="contact" className="py-12 px-4 bg-white">

        <div className="container mx-auto">

            <div className="text-center mb-16">
                <span className="text-secondary-600 font-medium">Get in Touch</span>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mt-2 mb-4">
                    Power Your Future—Contact Our Solar Experts
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Contact us today to learn more about our solutions or schedule a personalized demo.
                </p>
            </div>
            <div className="max-w-[36rem]  ">
                <span className="inline-flex items-center px-5 py-[6px] font-medium text-center text-black bg-ash-100 rounded-2xl text-[13px] uppercase mb-10 ">
                    Get in Touch
                </span>

                <h2 className="h8 text-black ">Power Your Future—Contact Our Solar Experts </h2>

                <p className="text-ash text-[18px] my-4 leading-relaxed">
                    Contact us today to learn more about our solutions or schedule a personalized demo.
                </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div>
                    <div className="bg-[#e49900d1] rounded-xl p-8 h-full">
                        <h3 className="text-2xl font-bold text-primary-900 mb-6">Contact Information</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-black p-3 rounded-full mr-4">
                                    <Mail size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-ash text-sm">Email</p>
                                    <p className="text-ash font-medium">samadoye28@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-black p-3 rounded-full mr-4">
                                    <Phone size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-ash text-sm">Phone</p>
                                    <p className="text-ash font-medium">+(234)-902-303-6748</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start">
                                <div className="bg-black p-3 rounded-full mr-4">
                                    <MapPin size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-ash text-sm">Address</p>
                                    <p className="text-ash font-medium">Lagos state, Nigeria:</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <form className="bg-white rounded-xl p-8 shadow-lg border border-gray-100" onSubmit={sendEmail}>
                        <h3 className="text-2xl font-bold text-primary-900 mb-6">Send Us a Message</h3>
                        
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-ash mb-2 font-medium">
                                        Full Name
                                    </label>
                                    <input 
                                        type="text" 
                                        name='name'
                                        id="name" 
                                        className="w-full px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-50 transition duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-ash mb-2 font-medium">
                                        Email Address
                                    </label>
                                    <input 
                                        type="email" 
                                        name='email'
                                        id="email" 
                                        className="w-full px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-50 transition duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="interest" className="block text-ash mb-2 font-medium">
                                    I'm interested in
                                </label>
                                <select 
                                    id="interest" 
                                    name='interest'
                                    className="w-full px-4 py-3 rounded-md outline-none border border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-50 transition duration-300"
                                >
                                    <option value="">Select an option</option>
                                    <option value="payroll">Basic Plan</option>
                                    <option value="pos">Premium Plan</option>
                                </select>
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-ash mb-2 font-medium">
                                    Your Message
                                </label>
                                <textarea 
                                    id="message" 
                                    name='message'
                                    rows={4} 
                                    className="w-full px-4 py-3 rounded-md outline-none border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold focus:ring-opacity-50 transition duration-300"
                                    placeholder="Tell us about your needs..."
                                ></textarea>
                            </div>
                        </div>
                        
                        <button 
                            className="mt-6 bg-[#e49900d1] hover:bg-gold text-white px-6 py-3 rounded-md font-medium transition duration-300 w-full flex items-center justify-center"
                        >
                            Send Message <Send size={18} className="ml-2" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);
};

export default Contact;