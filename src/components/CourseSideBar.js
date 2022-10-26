import React from "react";
import { Link } from "react-router-dom";

const CourseSideBar = ({course}) => {
  return (
    <div>
      <div className="h-full p-2 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex items-center p-2 space-x-4">
          <img
            src={course.image}
            alt=""
            className="w-12 h-12 rounded-full dark:bg-gray-500"
          />
          <div>
            <Link to={`/course/${course.id}`} className="text-lg font-semibold">{course.title}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSideBar;
