import axios from "axios";

const API = axios.create({
  baseURL: "https://csuite-production.up.railway.app/api",
});

// user
export const addnewUser = (userdata) => API.post("/user", userdata);

export const allUsers = () => API.get("/user", console.log("req->"));

export const updateUser = (userdata, Id) =>
  API.put(`/user/${Id}`, userdata);

export const deleteUser = (Id) => API.delete(`/user/${Id}`);

// purchases
export const allPurchases = () => API.get(`/payment`);

// courses
export const addnewCourse = (course) => API.post("/courseDetail/add", course);

export const getAllCourse = () => API.get("/courseDetail");

export const uploadVedio = (formdata) =>
  API.post("/uploadtovimeo", formdata, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateCourse = (updatedData) =>
  API.put(`/courseDetail/edit/${updatedData?._id}`, updatedData);

// test
export const addnewTest = (test) => API.post("/tests", test);
export const updateTest = (test) => API.put(`/tests/${test._id}`, test);
export const getLessonTest = (testId) => API.get(`/tests/${testId}`);
