import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { title, image, id, price, rating } = course;
  return (
    <div>
      <div className="card gap-2 bg-base-100 shadow-md rounded-md border border-violet-500 ">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{title}</h2>
          <p>Price: $ {price}</p>
          <p>Id: {id}</p>
          <p>Ratting: {rating.rate}</p>
          <div className="card-actions">
            <Link to={`/course/${id}`} className="btn btn-primary">Course Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
