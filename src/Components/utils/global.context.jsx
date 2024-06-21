import axios from "axios";
import {createContext, useContext, useEffect, useState } from "react";

export const GlobalStates = createContext(undefined);

const localFavs = JSON.parse(localStorage.getItem('favs')) || []
const localThme = JSON.parse(localStorage.getItem('theme')) || 'light'

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localThme)
  const [favs, setFavs] = useState(localFavs)
  const [odontologos, setOdontologos] = useState([])
  const [usuario, setUsuario] = useState({
    nombre: '', email: '', consulta: ''
  })

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favs))
  }, [favs])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])
  
  const url = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    axios(url)
    .then((res) => setOdontologos(res.data))
    .catch((err)=> console.log(err))
  }, [])

  return (
    <GlobalStates.Provider value={{
      theme, setTheme,
      favs, setFavs,
      odontologos,
      usuario, setUsuario
    }}>
      {children}
    </GlobalStates.Provider>
  );
};
export default ContextProvider;
export const useGlobalStates = () => useContext(GlobalStates);