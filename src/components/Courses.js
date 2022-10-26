import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "./Course";
import CourseSideBar from "./CourseSideBar";

const Courses = () => {
  const allCourse = useLoaderData();
  return (
    <div>
      <h2 className="text-5xl py-6 font-bold ml-4 text-violet-700 text-center">All Courses {allCourse.length}</h2>
      <div className="course-container px-5">
        <div className=" course-navbar text-left w-[300px]">
          {allCourse.map((course) => (
           <CourseSideBar key={course.id} course={course} />
          ))}
        </div>
        <div className="course-content">
          {allCourse.map((course) => (
            <Course key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
