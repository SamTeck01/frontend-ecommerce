import {Link, NavLink} from 'react-router-dom';
import logo from '../assets/IMG-20250526-WA0150.png';
import whatsappIcon from '../assets/whatsapp-logo-thin-svgrepo-com.svg';
import Navbar from './Navbar.jsx';
import { useState, useEffect } from 'react';
import SendWhatsAppMessage from './SendWhatsappMessage';

const NewHeader = () => {
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
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white text-gold shadow-md py-3' 
          : 'bg-gold text-white py-4'
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
             className={`${scrolled ? 'bg-gold hover:bg-transparent hover:border-gold hover:border-2 hover:text-gold' : 'bg-transparent' } text-white px-6 py-2 rounded-md font-medium transition duration-300`}>
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
                className={`${scrolled ? 'bg-gold hover:bg-transparent hover:border-gold hover:border-2 hover:text-gold' : 'bg-transparent' } text-white px-6 py-2 rounded-md font-medium transition duration-300 w-full`}>
                Chat with us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NewHeader;

function Header() {

  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  return (
    <header className='fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10' >
      <div className='flexBetween py-3 max-xs:px-2' >
        {/*Logo */}
        <div className='flexCenter gap-x-2 '>
            <Link to={'/'}> <img src={logo} alt="Logo" height={50} width={50} /> </Link>
            <span className='text-gold md:font-semibold lg:font-semibold text-center text-[15px] md:text-[20px] lg:text-[20px]'>BEE Energy</span>
        </div>
        {/*navbar desktop*/}
        <Navbar containerStyles={'hidden md:flex gap-x-5 xl:gap-x-10 medium-18 '} />

        {/*Navbar mobile */}
        <Navbar containerStyles={`${menuOpened ? `flex item-start flex-col gap-y-12
           fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 
           ring-1 ring-slate-900/5 transition-all duration-300` : `flex item-start flex-col gap-y-12
           fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 
           ring-1 ring-slate-900/5 transition-all duration-300 hidden ` }`}/>
        {/*Buttons */}
        <div className='flexBetween sm:gap-x-2 bold-16'>
          {!menuOpened ? 
            <i className="bx bx-menu bx-sm flex justify-center items-center md:hidden cursor-pointer hover:text-gray-20 mr-2 p-1 ring-2 ring-slate-900/30 h-8 w-8 rounded-full " onClick={toggleMenu} ></i> : 
            <i className="bx bx-x bx-sm flex justify-center items-center md:hidden cursor-pointer hover:text-gray-20 mr-2 p-1 ring-2 ring-slate-900/30 h-8 w-8 rounded-full " onClick={toggleMenu} ></i>
          }
          <div className="flexBetween sm:gap-x-6 cursor-pointer ">
            <NavLink to={'cart-page'} className={'flex'}>
              <i className="bx bx-phone-ring bx-sm flex justify-center items-center p-1 h-8 w-8 ring-black text-black ring-1 rounded-full me-2"></i> 
            </NavLink>

            {/*<NavLink to={'logout'} className={'btn_secondary_rounded flexCenter gap-x-2 medium-16'}> <img src={logout} alt="logout" height={19} width={19} />Logout</NavLink>*/}
            <NavLink to={'login'} className='btn_secondary_rounded flexCenter gap-x-2'><img src={whatsappIcon} alt="user" height={17} width={17} style={{marginLeft: '-5px'}} /> <span className='text-[10px] md:text-[13px] lg:text-[13px]'>Chat with us</span></NavLink>
            {/*hello */}
          </div>
        </div>

      </div>
    </header>
  )
}
