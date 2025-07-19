import { motion } from "framer-motion";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from '../assets/IMG-20250526-WA0150.png';
import { useState, useEffect } from 'react';
import SendWhatsAppMessage from './SendWhatsappMessage';
import { Menu, MessageCircleDashed, X } from "lucide-react";
import { Home, Info, Package, Box, Wrench, Phone, Heart } from "lucide-react";

const NewHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState('#home');

  const handleClick = (section) => {
    setIsActive(section);
    setIsOpen(false);
  };

  const linkClass = (section) => `hover:text-ash font-medium transition duration-300 ${section === isActive ? 'text-ash font-bold' : ''}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Import Lucide icons

  return (
    <>
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-gold py-4'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className='flexCenter gap-x-2'>
                <Link to={'/'}> <img src={logo} alt="Logo" height={50} width={50} /> </Link>
                <span className='font-semibold text-center text-[20px]'>BEE Energy</span>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <HashLink smooth to="/#home" className={linkClass('#home')} onClick={() => handleClick('#home')}>Home</HashLink>
              <HashLink smooth to="/#about" className={linkClass('#about')} onClick={() => handleClick('#about')}>About</HashLink>
              <HashLink smooth to="/plans" className={linkClass('#plans')} onClick={() => handleClick('#plans')}>Plans</HashLink>
              <HashLink smooth to="/#products" className={linkClass('#products')} onClick={() => handleClick('#products')}>Products</HashLink>
              <HashLink smooth to="/#services" className={linkClass('#services')} onClick={() => handleClick('#services')}>Services</HashLink>
              <HashLink smooth to="/#contact" className={linkClass('#contact')} onClick={() => handleClick('#contact')}>Contact</HashLink>
            </nav>

            <div className="hidden md:flexCenter gap-2">
              <HashLink smooth to="/wishlist" className="text-black font-medium transition duration-300 mt-1">
                <span className="inline-flex items-center gap-2 "><Heart size={18} />Wishlist</span>
              </HashLink>
              <button
                onClick={() => SendWhatsAppMessage('Hi! I’d like to learn more about your services and discuss how they might fit my business needs. Can we chat about the features and pricing? Thanks!')}
                className={`${scrolled ? 'bg-[#E49900] hover:bg-transparent text-white hover:text-gold2 border-2 border-gold2' : 'bg-transparent'} text-black px-5 py-1 rounded-md font-medium transition duration-300`}
              >
                Chat with us
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary-900 focus:outline-none"
              >
                {isOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            
              {/* ✅ CTA Button for mobile */}
              <Link
                to="/plans"
                className="block md:hidden ml-2 bg-gold2 text-white text-sm px-4 py-2 rounded-full shadow-md font-medium"
              >
                See Plans
              </Link>
            </div>
            
          </div>

          {isOpen && (
            <motion.div
              className="md:hidden mt-4 -mx-4 -mb-3 px-7 p-4 shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                <HashLink smooth to="/#home" onClick={() => setIsOpen(false)} className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300">
                  <span className="inline-flex items-center gap-2"><Home size={18} />Home</span>
                </HashLink>
                <HashLink smooth to="/#about" onClick={() => setIsOpen(false)} className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300">
                  <span className="inline-flex items-center gap-2"><Info size={18} />About</span>
                </HashLink>
                <HashLink smooth to="/plans" onClick={() => setIsOpen(false)} className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300">
                  <span className="inline-flex items-center gap-2"><Package size={18} />Plans</span>
                </HashLink>
                <HashLink smooth to="/#products" onClick={() => setIsOpen(false)} className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300">
                  <span className="inline-flex items-center gap-2"><Box size={18} />Products</span>
                </HashLink>
                <HashLink smooth to="/#services" onClick={() => setIsOpen(false)} className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300">
                  <span className="inline-flex items-center gap-2"><Wrench size={18} />Services</span>
                </HashLink>
                <HashLink smooth to="/#contact" onClick={() => setIsOpen(false)} className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300">
                  <span className="inline-flex items-center gap-2"><Phone size={18} />Contact</span>
                </HashLink>
                <HashLink smooth to="/wishlist" className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300">
                  <span className="inline-flex items-center gap-2"><Heart size={18} />Wishlist</span>
                </HashLink>
                <button
                  onClick={() => SendWhatsAppMessage('Hi! I’d like to learn more about your services and discuss how they might fit my business needs. Can we chat about the features and pricing? Thanks!')}
                  className={`${scrolled ? 'bg-[#E49900] hover:bg-transparent hover:border-gold hover:border-2 hover:text-gold text-white' : 'bg-transparent text-black'} px-6 py-2 rounded-md font-medium transition duration-300 w-full flexCenter gap-2`}
                >
                  <MessageCircleDashed/> <span>Chat with us</span>
                </button>
              </nav>
            </motion.div>
          )}
        </div>
      </header>
    </>
  );
};

export default NewHeader;
