import { NavLink } from "react-router-dom"
import '../assets/boxicons-2.1.4 (2)/fonts/basic/boxicons.min.css'

// eslint-disable-next-line react/prop-types
export default function Navbar({containerStyles} ) {
  return (
    <nav className={`${containerStyles} text-dark`} >
      <NavLink to={'/'} className={({isActive}) => isActive ? 'active_link' : '' } > <div className="flexCenter gap-x-1" > Home</div> </NavLink>
      <NavLink to={'/mens'} className={({isActive}) => isActive ? 'active_link' : '' } > <div className="flexCenter gap-x-1" >About</div> </NavLink>
      <NavLink to={'/womens'} className={({isActive}) => isActive ? 'active_link' : '' } > <div className="flexCenter gap-x-1" >  Products </div> </NavLink>
      <NavLink to={'/kids'} className={({isActive}) => isActive ? 'active_link' : '' } > <div className="flexCenter gap-x-1" > Contact</div> </NavLink>
    </nav>
  )
}
