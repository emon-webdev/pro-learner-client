import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseDetails from "./CourseDetails";

const Courses = () => {
  const allCourse = useLoaderData();
  return (
    <div>
      <h2>All Courses {allCourse.length}</h2>
      <div className="course-container flex">
        <div className="text-left">
          {allCourse.map((course) => (
            <Link to={`/`} key={course.id}>{course.title}</Link>
          ))}
        </div>
        <div className="flex flex-wrap">
          {allCourse.map((course) => (
            <CourseDetails key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
