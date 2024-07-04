import React, { useState } from "react";
import Sidebar from "../sidebar/LeftBar";
import "./users-admin.css";
import Users from "./Users";
import AddnewUser from "./AddnewUser";
import EditUserData from "./EditUserData";

const Allusers = () => {
  const [addnewUser, setAddnewUser] = useState(false);
  const [editnewUser, setEditUser] = useState(false);
  return (
    <div className="users-page-dashboard">
      <Sidebar />
      <Users
        openNewUser={() => setAddnewUser(true)}
        openEditUser={() => setEditUser(true)}
      />
      {addnewUser && <AddnewUser closeNewUser={() => setAddnewUser(false)} />}
      {editnewUser && <EditUserData closeEditUser={() => setEditUser(false)} />}
    </div>
  );
};

export default Allusers;
