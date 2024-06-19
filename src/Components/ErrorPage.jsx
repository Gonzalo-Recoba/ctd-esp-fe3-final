import React from 'react'
import { useGlobalStates } from './utils/global.context'

const ErrorPage = () => {
  const {odontologos} = useGlobalStates()

  return (
    <div>
        <h2>Error 404.</h2>
        <h2>Page not found.</h2>
    </div>
  )
}

export default ErrorPage