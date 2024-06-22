import React from "react";
import { Link } from "react-router-dom";
import { useGlobalStates } from "./utils/global.context";


const Card = ({ odontologo }) => {
  const {name, username, id } = odontologo;
  const {state, dispatch } = useGlobalStates();
  const findFavs = state.favs.find((fav) =>id === fav.id)

  const addCart = () =>{
    if(findFavs){
      dispatch({type: "DELETE_FAV", payload: odontologo})
    } else{
      dispatch({type: "ADD_FAV", payload: odontologo})
    }
  }

  return (
    <div className="card">
      <Link to={'/odontologo/' + id}>
        <img src=".\images\doctor.jpg" alt="imagen doctor" />
          <h4>{name}</h4>
          <p>{username}</p>
      </Link>
      <button onClick={addCart} className={findFavs ? "deleteFavButton" : "addFavButton"}>{findFavs ? "❌ Quitar de favoritos" : "⭐ Agregar a favoritos"}</button>
    </div>
  );
};

export default Card;