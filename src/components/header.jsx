import {Link, NavLink} from 'react-router-dom';
import logo from '../assets/IMG-20250526-WA0150.png';
//import logout from '../assets/logout.svg';
import whatsappIcon from '../assets/whatsapp-logo-thin-svgrepo-com.svg';
import Navbar from './Navbar.jsx';
import { useState } from 'react';

export default function Header() {

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
