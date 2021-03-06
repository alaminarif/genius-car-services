import React from "react";
import useServices from "../../hooks/UseServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      console.log("click proceed");
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remainig = services.filter((service) => service._id !== id);
          setServices(remainig);
          console.log("data");
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h2>this is Manage Services pages</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}{" "}
            <button className="text-danger border-0" onClick={() => handleDelete(service._id)}>
              X
            </button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
