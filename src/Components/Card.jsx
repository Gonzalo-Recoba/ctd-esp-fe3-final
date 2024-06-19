import React from "react";
import { Link } from "react-router-dom";
import { routes } from "./utils/routes";
import { useGlobalStates } from "./utils/global.context";


const Card = ({ odontologo, children }) => {

  const {name, username, } = odontologo
  return (
    <div className="card">
      <Link to={routes.detail}>
        <img src=".\images\doctor.jpg" alt="" />
          <h4>{name}</h4>
          <p>{username}</p>
      </Link>
      {children}
    </div>
  );
};

export default Card;