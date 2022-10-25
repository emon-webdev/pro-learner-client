import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseDetails from "./CourseDetails";

const Courses = () => {
  const allCourse = useLoaderData();

  console.log(allCourse);
  return (
    <div>
      <h2>All Courses {allCourse.length}</h2>

      <div>
        {allCourse.map((course) => (
          <CourseDetails key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
