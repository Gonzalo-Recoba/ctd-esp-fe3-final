import axios from "axios";
import {createContext, useContext, useEffect, useReducer, useState } from "react";

export const GlobalStates = createContext(undefined);

const localFavs = JSON.parse(localStorage.getItem('favs')) || []
const localThme = JSON.parse(localStorage.getItem('theme')) || 'light'
const reducer = (state, action) =>{
  switch(action.type){
    case 'GET': 
      return {...state,  odontologos: action.payload};
    case 'ADD_FAV':
      return {...state, favs: [...state.favs, action.payload]};
    case 'CHANGE_THEME':
       {
        if(state.theme === 'dark') return {...state, theme:"light"}
        if(state.theme === 'light') return {...state, theme:"dark"}
        }
    case 'DELETE_FAVS':
      return {...state, favs: []}
    case 'DELETE_FAV': 
        const filtrerFavs = state.favs.filter((fav)=> fav.id !== action.payload.id)
        return {...state, favs: filtrerFavs}
    default: console.log("Error")
  }
}

const initialState = {
  odontologos: [],
  odontologo: [],
  favs: localFavs,
  theme: localThme
}

const ContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({nombre: '', email: '', consulta: ''})

  const [state, dispatch] = useReducer(reducer, initialState )

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(state.theme))
  }, [state.theme])
  
  const url = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    axios(url)
    .then((res) => dispatch({type: "GET", payload: res.data}))
    .catch((err)=> console.log(err))
  }, [])

  return (
    <GlobalStates.Provider value={{
      state, dispatch,
      usuario, setUsuario
    }}>
      {children}
    </GlobalStates.Provider>
  );
};
export default ContextProvider;
export const useGlobalStates = () => useContext(GlobalStates);