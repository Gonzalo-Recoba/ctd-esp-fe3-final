import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from "./utils/routes"
import { useGlobalStates } from './utils/global.context'
import Theme from './Theme'


const Navbar = () => {
  const {state} = useGlobalStates()
  const cantFavs = state.favs.length > 0 ? "(" + state.favs.length + ")" : "";

  return (
    <nav className={state.theme}>
        <Link to={routes.home}><img src="DH.ico" alt="logo" className='logo'/></Link>
        <Link to={routes.home}><h3>Inicio</h3></Link>
        <Link to={routes.contact}><h3>Contacto</h3></Link>
        <Link to={routes.favs}><h3>Favoritos <span>{cantFavs}</span></h3></Link>
        <Theme/>
      </nav>
  )
}

export default Navbar