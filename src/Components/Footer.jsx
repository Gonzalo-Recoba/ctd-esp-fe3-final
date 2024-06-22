import React from 'react'
import { useGlobalStates } from './utils/global.context'

const Footer = () => {
  const {state} = useGlobalStates()
  return (
    <footer className={state.theme}>
        <p>Powered by Gonzalo Recoba <a href='mailto:gonzalo.recoba@gmail.com'>📧</a> in association with</p>
        <img src="./images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
