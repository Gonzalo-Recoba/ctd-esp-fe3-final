import React, { useState } from 'react'
import Form from '../Components/Form'
import { useGlobalStates } from '../Components/utils/global.context'

const Contact = () => {
  const [show, setShow] = useState(true)
  const {usuario} = useGlobalStates()

  return (
    <div style={{height:'100vh'}}>
      {show ? (
        <div>
          <h2 style={{textAlign:"center"}}>¿Desea saber más?</h2>
          <h3 style={{textAlign:"center"}}>Envíenos su consulta y nos comunicarémos con usted.</h3>
          <Form show={show} setShow={setShow}/>
        </div>
      ) : (
        <div style={{textAlign:"center", height:'100vh'}}>
          <h2>Muchas gracias por su consulta {usuario.nombre}</h2>
          <h4>Nos estaremos comunicando con usted al mail: {usuario.email}</h4>
        </div>
      )}
    </div>
  )
}

export default Contact