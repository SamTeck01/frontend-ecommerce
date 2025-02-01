import { NavLink } from "react-router-dom"
import '../assets/boxicons-2.1.4 (2)/boxicons-2.1.4/css/boxicons.min.css'

// eslint-disable-next-line react/prop-types
export default function Navbar({containerStyles} ) {
  return (
    <nav className={`${containerStyles}`} >
      <NavLink to={'/'} className={({isActive}) => isActive ? 'active_link' : '' } > <div className="flexCenter gap-x-1" ><i className='bx bx-user'></i> Home</div> </NavLink>
      <NavLink to={'/mens'} className={({isActive}) => isActive ? 'active_link' : '' } > <div className="flexCenter gap-x-1" ><i className='bx bx-category-alt' ></i> Mens</div> </NavLink>
      <NavLink to={'/womens'} className={({isActive}) => isActive ? 'active_link' : '' } > <div className="flexCenter gap-x-1" ><i className="bx bx-shopping-bag"></i>  Women </div> </NavLink>
      <NavLink to={'/kids'} className={({isActive}) => isActive ? 'active_link' : '' } > <div className="flexCenter gap-x-1" > <i className="bx bx-phone "></i> Kids</div> </NavLink>
    </nav>
  )
}
