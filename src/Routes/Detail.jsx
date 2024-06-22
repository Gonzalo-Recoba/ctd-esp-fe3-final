import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Detail = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [odontologo, setOdontologo] = useState({})
  const [show, setShow] = useState(false)


  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  useEffect(() => {
    axios(url)
      .then((res) => {
        setOdontologo(res.data)
        setShow(true)
      })
      .catch((err)=> console.log(err))
  })
  return (
        <div className='detailContainer'>
    {show ? (
      <>
          <button onClick={()=>navigate(-1)} className='buttonBack'>🔙</button>
          <button onClick={()=>navigate(1)} className='buttonSoon'>🔜</button>
          <div className='detail'>
              <img src="https://www.dentaltix.com/es/sites/default/files/odontologo-clinica-dental.jpg" alt="" />
              <h2>{odontologo.name}</h2>
              <h3>{odontologo.username}</h3>
              <a href={"https://" + odontologo.website} target='_blank' className='iconDetail' rel="noreferrer">🌐</a>
              <a href={'mailto:'+odontologo.email} className='iconDetail' rel="noreferrer">📧</a>
              <a href={'tel://'+odontologo.phone} className='iconDetail' rel="noreferrer">📞</a>
          </div>
      </>
        ) : 
        <h3>Cargando...</h3>
      }
      </div>
     
  )
}

export default Detail