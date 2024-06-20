import React from 'react'
import { useGlobalStates } from './utils/global.context'

const ErrorPage = () => {
  const {theme} = useGlobalStates()
  return (
    <div className='errorPage'>
        <img src="./images/DH.png" alt='DH-logo' className='imagenDH' />
        <h2>Error 404.</h2>
        <h2>Page not found.</h2>
    </div>
  )
}

export default ErrorPage