import React from "react";
import { Link } from "react-router-dom";


const Card = ({ odontologo, children }) => {

  const {name, username, id } = odontologo
  return (
    <div className="card">
      <Link to={'/odontologo/' + id}>
        <img src=".\images\doctor.jpg" alt="imagen doctor" />
          <h4>{name}</h4>
          <p>{username}</p>
      </Link>
      {children}
    </div>
  );
};

export default Card;