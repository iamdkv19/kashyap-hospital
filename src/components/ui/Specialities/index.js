import React from "react";
import Card from "./Card";
import "./Specialities.scss";

const Specialities = () => {
  return (
    <div className="specialities_wrp">
      <div className="top">
        <h6>Our Specialities</h6>
        <h1>High-Quality Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu,
          vestibulum vel tristique. Dui adipiscing augue nibh purus, vehicula
          quis cursus
        </p>
      </div>
      <div className="down">
        <div className="row">
          {[1,2,3,4,5,6,7,8].map((item, index) => {
            return <Card key={new Date().getTime() + index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Specialities;
