import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useGlobalStates } from '../Components/utils/global.context'
import { useNavigate, useParams } from 'react-router-dom'

const Detail = () => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [odontologo, setOdontologo] = useState({})



  const url = `https://jsonplaceholder.typicode.com/users/${id}`
  useEffect(() => {
    axios(url)
      .then((res) => setOdontologo(res.data))
      .catch((err)=> console.log(err))
  }, [])

console.log(odontologo)
  return (
    <div className='detailContainer'>
      <button onClick={()=>navigate(-1)} className='buttonBack'>🔙</button>
      <button onClick={()=>navigate(1)} className='buttonSoon'>🔜</button>
      <div className='detail'>
          <img src="https://www.dentaltix.com/es/sites/default/files/odontologo-clinica-dental.jpg" alt="" />
          <h3>{odontologo.name}</h3>
          <h4>{odontologo.username}</h4>
          <a href={"https://" + odontologo.website} target='_blank' className='iconDetail'>🌐</a>
          <a href={'mailto:'+odontologo.email} className='iconDetail'>📧</a>
          <a href={'tel://'+odontologo.phone} className='iconDetail'>📞</a>
        </div>
    </div>
  )
}

export default Detail