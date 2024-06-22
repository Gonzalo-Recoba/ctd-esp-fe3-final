import React from 'react'
import { routes } from './utils/routes'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='errorPage'>
        <img src="./images/DH.png" alt='DH-logo' className='imagenDH' />
        <h2>Error 404.</h2>
        <h2>Page not found.</h2>
        <Link to={routes.home}><h4><button className='buttonBack'>🏠 Ir a Home</button></h4></Link>
    </div>
  )
}

export default ErrorPage