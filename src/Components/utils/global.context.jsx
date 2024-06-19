import axios from "axios";
import {createContext, useContext, useEffect, useState } from "react";

// export const initialState = {theme: 'light', data: []}

export const GlobalStates = createContext(undefined);

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [favs, setFavs] = useState([])
  const [odontologos, setOdontologos] = useState([])
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '', 
    consulta: ''
  })

  
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