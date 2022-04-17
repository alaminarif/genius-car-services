import React from "react";
import experts1 from "../../../images/experts/expert-1.jpg";
import experts2 from "../../../images/experts/expert-2.jpg";
import experts3 from "../../../images/experts/expert-3.jpg";
import experts4 from "../../../images/experts/expert-4.jpg";
import experts5 from "../../../images/experts/expert-5.jpg";
import experts6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const Experts = () => {
  const experts = [
    { id: 1, name: "Arif", img: experts1 },
    { id: 2, name: "Al-amin", img: experts2 },
    { id: 3, name: "Halim", img: experts3 },
    { id: 4, name: "Mizan", img: experts4 },
    { id: 5, name: "Sadik", img: experts5 },
    { id: 6, name: "Khadija", img: experts6 },
  ];
  return (
    <div className="container" id="experts">
      <h2 className="text-primary text-center my-4">Our Experts</h2>
      <div className="row ">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
