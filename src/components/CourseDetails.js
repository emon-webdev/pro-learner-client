import React from "react";

const CourseDetails = ({ course }) => {
  const { title, image, id, price, rating } = course;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{title}</h2>
          <p>Price: $ {price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Course Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
