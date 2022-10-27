import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CourseDetails = () => {
  const course = useLoaderData();
  const { title, id, image, price, description } = course;

  return (
    <div ref={ref} className="my-20 course-details container mx-auto ">
      <div className=" py-8 px-4 card items-center mx-auto  card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Course Name: {title}</h2>
          <p>Price: $ {price}</p>
          <p>Description: {description}</p>
          <div className="card-actions">
            <Link to={`/checkout/${id}`} className="btn btn-primary">
              Get Premium Access
            </Link>

            <button className="btn btn-primary">
              <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
              </Pdf>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
