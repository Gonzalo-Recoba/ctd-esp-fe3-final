import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";

const Favs = () => {
  const {favs,setFavs} = useGlobalStates()

  return (
    <div style={{textAlign:"center", height:'100vh'}}>
      <h1>Odontologos favoritos</h1>
      <button onClick={() => setFavs([])} className="deleteFavButton">Eliminar todos los favoritos</button>
      <div className="card-grid">
        {favs.map( (fav) => <Card key={fav.id} odontologo={fav}/>)}
      </div>
    </div>
  );
};

export default Favs;