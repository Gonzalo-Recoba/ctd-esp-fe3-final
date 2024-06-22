import React from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";
import { Link } from "react-router-dom";
import { routes }  from "../Components/utils/routes";

const Favs = () => {
  const {state,dispatch} = useGlobalStates()

  return (
    <div style={{textAlign:"center", minHeight:'100vh'}}>
    {state.favs.length > 0 ?
      <>
        <h1>Odontologos favoritos</h1>
        <button onClick={() => dispatch({type: "DELETE_FAVS"})} className="deleteAllFavsButton">Eliminar todos los favoritos</button>
        <div className="card-grid">
            {state.favs.map( (fav) => <Card key={fav.id} odontologo={fav}/>)}
          </div>
        </>
         : 
         <>
            <h1>No hay odontologos favoritos</h1>
            <h3>Agrega tus odontologos a favoritos desde el inicio.</h3>
            <Link to={routes.home}><h4><button className='buttonBack'>🏠 Ir a Home</button></h4></Link>
         </> }
      </div>
  );
};

export default Favs;