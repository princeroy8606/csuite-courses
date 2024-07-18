import axios from "axios";

const API = axios.create({ baseURL: "https://c-suite.onrender.com/" });

// user
export const addnewUser = (userdata) => API.post("/api/user", userdata);

export const allUsers = () => API.get("/api/user",console.log("req->"));

export const updateUser = (userdata, Id) =>
  API.put(`/api/user/${Id}`, userdata);

export const deleteUser = (Id) => API.delete(`/api/user/${Id}`);

// purchases
export const allPurchases = () => API.get(`/api/payment`);

// courses
export const addnewCourse = (course) => API.post("/api/courseDetail", course);

export const getAllCourse = () => API.get("/api/courseDetail");

export const uploadVedio = (formdata) =>
  API.post("/api/uploadtovimeo", formdata, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateCourse = (updatedData) =>
  API.put(`/api/courseDetail/${updatedData?._id}`, updatedData);
