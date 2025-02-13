import {Link, NavLink} from 'react-router-dom';
import logo from '../assets/logo.svg';
//import logout from '../assets/logout.svg';
import user from '../assets/user.svg';
import Navbar from './Navbar.jsx';
import { useState, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext.jsx';

export default function Header() {

  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <header className='fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10' >
      <div className='px-4 flexBetween py-3 max-xs:px-2' >
        {/*Logo */}
        <div>
            <Link to={'/'}> <img src={logo} alt="Logo" height={66} width={88} /> </Link>
        </div>
        {/*navbar desktop*/}
        <Navbar containerStyles={'hidden md:flex gap-x-5 xl:gap-x-10 medium-15 '} />

        {/*Navbar mobile */}
        <Navbar containerStyles={`${menuOpened ? `flex item-start flex-col gap-y-12
           fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 
           ring-1 ring-slate-900/5 transition-all duration-300` : `flex item-start flex-col gap-y-12
           fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 
           ring-1 ring-slate-900/5 transition-all duration-300 hidden ` }`}/>
        {/*Buttons */}
        <div className='flexBetween sm:gap-x-2 bold-16'>
          {!menuOpened ? 
            <i className="bx bx-menu bx-sm flex justify-center items-center md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-2 ring-slate-900/30 h-8 w-8 rounded-full " onClick={toggleMenu} ></i> : 
            <i className="bx bx-x bx-sm flex justify-center items-center md:hidden cursor-pointer hover:text-secondary mr-2 p-1 ring-2 ring-slate-900/30 h-8 w-8 rounded-full " onClick={toggleMenu} ></i>
          }
          <div className="flexBetween sm:gap-x-6 cursor-pointer ">
            <NavLink to={'cart-page'} className={'flex'}> 
              <i className="bx bx-cart bx-sm flex justify-center items-center p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full"></i> 
              <span className="relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2 ">{getTotalCartItems()}</span>
            </NavLink>

            {/*<NavLink to={'logout'} className={'btn_secondary_rounded flexCenter gap-x-2 medium-16'}> <img src={logout} alt="logout" height={19} width={19} />Logout</NavLink>*/}
            <NavLink to={'login'} className='btn_secondary_rounded flexCenter gap-x-2 medium-16'><img src={user} alt="user" height={19} width={19} /> Login</NavLink>
            {/*hello */}
          </div>
        </div>

      </div>
    </header>
  )
}
