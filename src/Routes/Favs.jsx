import React, { useContext } from "react";
import Card from "../Components/Card";
import { useGlobalStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favs} = useGlobalStates()

//
//const lsCart = JSON.parse(localStorage.getItem("cart")) || [];
  return (
    <div style={{textAlign:"center", height:'100vh'}}>
      <h1>Odontologos favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        { <Card key={favs.name} odontologo={favs}/> }
      </div>
    </div>
  );
};

export default Favs;