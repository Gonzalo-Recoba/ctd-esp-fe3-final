import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";
import { Link } from "react-router-dom";
import { routes }  from "../Components/utils/routes";

const Favs = () => {
  const {favs,setFavs} = useGlobalStates()

  return (
    <div style={{textAlign:"center", height:'100vh'}}>
    {favs.length > 0 ?
      <>
        <h1>Odontologos favoritos</h1>
        <button onClick={() => setFavs([])} className="deleteFavButton">Eliminar todos los favoritos</button>
        <div className="card-grid">
            {favs.map( (fav) => <Card key={fav.id} odontologo={fav}/>)}
          </div>
        </>
         : 
         <>
            <h1>No hay odontologos favoritos</h1>
            <h3>Agrega tus odontologos a favoritos desde el inicio.</h3>
            <Link to={routes.home}><h4>Ir al home</h4></Link>
         </> }
      </div>
  );
};

export default Favs;