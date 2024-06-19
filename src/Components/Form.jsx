import React, { useState } from "react";
import { useGlobalStates } from "./utils/global.context";


const Form = ({show, setShow}) => {
  const {usuario, setUsuario} = useGlobalStates()
  const [error, setError] = useState(false)
  
  const handleSubmit = (e) =>{
    e.preventDefault()

    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(usuario.nombre.trim().length > 5 && regex.test(usuario.email) && usuario.consulta.trim().length > 10){
      setShow(false)
      setError(false)
    } else {
      setShow(true)
      setError(true)
    }
    alert(`
      Consulta recibida correctamente.
      Nombre ${usuario.nombre}
      Email: ${usuario.email}
      Consulta: ${usuario.consulta}
      `)

      setTimeout(() => {
        setShow(true)
      }, "3000");
  }

  const handleName = (e) => setUsuario({ ...usuario, nombre: e.target.value });
  const handleEmail = (e) => setUsuario({ ...usuario, email: e.target.value });
  const handleConsulta = (e) => setUsuario({ ...usuario, consulta: e.target.value });

  return (
    <>
      <form className="form">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" onBlur={handleName} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onBlur={handleEmail} />

        <label htmlFor="consulta">Consulta</label>
        <textarea id="consulta" onBlur={handleConsulta} rows="4" cols="50"/>

        <button type="submit" id="btn-enviar" onClick={handleSubmit}>Enviar</button>
      </form>
      {error && <p style={{ color: "red", textAlign:'center', fontSize:'20px' }}>Debe colocar sus datos correctamente.</p>}
    </>
  );
};
export default Form;