import {Link} from 'react-router-dom';
import logo from '../assets/IMG-20250526-WA0150.png';
import { useState, useEffect } from 'react';
import SendWhatsAppMessage from './SendWhatsappMessage';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState('#home');

  const handleClick = (section) => {
    setIsActive(section);
    setIsOpen(false);
  }

  const linkClass = (section) =>
    `text-primary-900 hover:text-secondary-600 font-medium transition duration-300 ${
      section === isActive ? 'text-secondary-600 font-bold' : ''
    }`

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

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-gray-50 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-900">
              <span className="text-primary-700">Efem</span>
              <span className="text-secondary-600">Soft</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className={linkClass('#home')} onClick={()=>handleClick('#home')}>
              Home
            </a>
            <a href="#solutions" className={linkClass('#solutions')} onClick={()=>handleClick('#solutions')} >
              Solutions
            </a>
            <a href="#features" className={linkClass('#features')} onClick={()=>handleClick('#features')} >
              Features
            </a>
            <a href="#products" className={linkClass('#products')} onClick={()=>handleClick('#testimonials')}>
              Products
            </a>
            <a href="#contact" className={linkClass('#contact')} onClick={()=>handleClick('#contact')} >
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <button onClick={()=>SendWhatsAppMessage('Hi! I’d like to learn more about your services and discuss how they might fit my business needs. Can we chat about the features and pricing? Thanks!')}
             className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-2 rounded-md font-medium transition duration-300">
              Chat with us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-900 focus:outline-none"
            >
              {/*isOpen ? <X size={24} /> : <Menu size={24} />*/}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 p-4 ">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#solutions"
                className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </a>
              <a
                href="#features"
                className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Products
              </a>
              <a
                href="#contact"
                className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <button
                onClick={()=>SendWhatsAppMessage('Hi! I’d like to learn more about your services and discuss how they might fit my business needs. Can we chat about the features and pricing? Thanks!')}
                className="bg-secondary-600 hover:bg-secondary-700 text-white px-6 py-2 rounded-md font-medium transition duration-300 w-full">
                Chat with us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

const NewHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isActive, setIsActive] = useState('#home');

  const handleClick = (section) => {
    setIsActive(section);
    setIsOpen(false);
  }

  const linkClass = (section) =>
    ` hover:text-ash font-medium transition duration-300 ${
      section === isActive ? 'text-ash font-bold' : ''
    }`

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

  return (
    <>
      {/*<Header/>*/}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md py-2'
            : 'bg-gold py-4'
        }`}
      >

        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className='flexCenter gap-x-2 '>
                <Link to={'/'}> <img src={logo} alt="Logo" height={50} width={50} /> </Link>
                <span className=' font-semibold text-center text-[20px]'>BEE Energy</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className={linkClass('#home')} onClick={()=>handleClick('#home')}>
                Home
              </a>
              <a href="#about" className={linkClass('#solutions')} onClick={()=>handleClick('#solutions')} >
                About
              </a>
              <a href="#plans" className={linkClass('#features')} onClick={()=>handleClick('#features')} >
                Plans
              </a>
              <a href="#products" className={linkClass('#products')} onClick={()=>handleClick('#testimonials')}>
                Products
              </a>
              <a href="#services" className={linkClass('#products')} onClick={()=>handleClick('#testimonials')}>
                Services
              </a>
              <a href="#contact" className={linkClass('#contact')} onClick={()=>handleClick('#contact')} >
                Contact
              </a>
            </nav>

            <div className="hidden md:block">
              <button onClick={()=>SendWhatsAppMessage('Hi! I’d like to learn more about your services and discuss how they might fit my business needs. Can we chat about the features and pricing? Thanks!')}
              className={`${scrolled ? 'bg-[#E49900] hover:bg-transparent hover:border-gold hover:border-2 text-white hover:text-gold' : 'bg-transparent' } text-black px-6 py-2 rounded-md font-medium transition duration-300`}>
                Chat with us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-primary-900 focus:outline-none"
              >
                {isOpen ? <i className='bx bx-x text-3xl'></i> : <i className='bx text-3xl bx-menu'></i>}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 -mx-4 -mb-3 px-7 p-4 shadow-md ">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#home"
                  className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a
                  href="#plans"
                  className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Plans
                </a>
                <a
                  href="#products"
                  className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </a>
                <a
                  href="#services"
                  className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-primary-900 hover:text-secondary-600 font-medium transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
                <button
                  onClick={()=>SendWhatsAppMessage('Hi! I’d like to learn more about your services and discuss how they might fit my business needs. Can we chat about the features and pricing? Thanks!')}
                  className={`${scrolled ? 'bg-[#E49900] hover:bg-transparent hover:border-gold hover:border-2 hover:text-gold text-white' : 'bg-transparent text-black' }  px-6 py-2 rounded-md font-medium transition duration-300 w-full`}>
                  Chat with us
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

    </>

  );
};

export default function Final(){
  return(<>
    <NewHeader/>
    
  </>)
};