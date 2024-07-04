import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCourses from "../components/courses/AllCourses";
import AddnewCourse from "../components/courses/new-course/AddnewCourse";
import EditCourse from "../components/courses/edit-course/EditCourse";
import Allusers from "../components/userManagement/Allusers";
import PurchasesPage from "../components/purchases/PurchasesPage";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AllCourses />} />
      <Route path="/Courses/new" element={<AddnewCourse />} />
      <Route path="/Course/edit" element={<EditCourse />} />
      <Route path="/users" element={<Allusers />} />
      <Route path="/purchases" element={<PurchasesPage />} />
    </Routes>
  );
};

export default AppRoute;
