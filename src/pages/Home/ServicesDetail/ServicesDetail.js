import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServicesDetail = () => {
  const { serviceId } = useParams();
  const [service, setSerivce] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSerivce(data));
  }, []);
  console.log(serviceId);
  return (
    <div>
      <h3> Services Detail: {service.name}</h3>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
};

export default ServicesDetail;
