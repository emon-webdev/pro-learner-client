import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const {title, image, price, description} =  course;
  console.log(course);
  return (
    <div className="my-20 container mx-auto">
      <div className=" py-8 card items-center mx-auto  card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{price}</p>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
