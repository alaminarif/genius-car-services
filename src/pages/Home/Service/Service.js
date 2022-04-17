import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, price, description, img } = service;
  const navigate = useNavigate();
  const navigateToServiceDatail = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div>
      <img className="w-100" src={img} alt="" />
      <h3>name: {name}</h3>
      <p> Price{price}</p>
      <p>{description}</p>
      <button onClick={() => navigateToServiceDatail(id)} className="btn btn-primary">
        show more
      </button>
    </div>
  );
};

export default Service;
