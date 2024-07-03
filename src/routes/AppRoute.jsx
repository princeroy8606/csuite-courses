import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCourses from "../components/courses/AllCourses";
import AddnewCourse from "../components/courses/new-course/AddnewCourse";
import EditCourse from "../components/courses/edit-course/EditCourse";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AllCourses />} />
      <Route path="/Courses/new" element={<AddnewCourse />} />
      <Route path="/Course/edit" element={<EditCourse />} />
    </Routes>
  );
};

export default AppRoute;
