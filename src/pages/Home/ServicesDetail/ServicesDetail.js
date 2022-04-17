import React from "react";
import { Link, useParams } from "react-router-dom";

const ServicesDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h3>this is Services Detail {serviceId}</h3>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
};

export default ServicesDetail;
