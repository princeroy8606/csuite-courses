import React, { useEffect, useRef, useState } from "react";
import searchIcon from "../Assets/Images/potrate-1.jpg";
import moreIcon from "../Assets/Images/more.png";
import EditUser from "./EditUser";

const UsersList = ({ editAction }) => {
  const [editUser, setEditUser] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setEditUser(false);
      }
    }

    if (editUser) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editUser]);

  return (
    <div className="users-list-cnt">
      <div className="users-details-header">
        <p className="user-name-cnt ">username</p>
        <p className="user-name-cnt">position</p>
        <p className="user-name-cnt">compnay</p>
        <p className="user-date-cnt">Joined date</p>
        <p style={{ width: ".5rem" }}></p>
      </div>
      <div className="user-details-cnt">
        <div className="user-name-cnt">
          <img src={searchIcon} alt="profile-icon" className="profile-img" />
          <div className="name-cnt">
            <h3>Test user</h3>
            <p>testuser123@gmail.com</p>
          </div>
        </div>
        <p className="user-name-cnt details-text">Marketing Manager</p>
        <p className="details-text user-name-cnt">Google</p>
        <p className="details-text user-date-cnt">july 4, 2023</p>
        <img
          src={moreIcon}
          alt="more"
          className="more-icon"
          onClick={() => setEditUser(true)}
        />
      </div>
      <div className="user-details-cnt">
        <div className="user-name-cnt">
          <img src={searchIcon} alt="profile-icon" className="profile-img" />
          <div className="name-cnt">
            <h3>Test user</h3>
            <p>testuser123@gmail.com</p>
          </div>
        </div>
        <p className="user-name-cnt details-text">Hr-manager</p>
        <p className="details-text user-name-cnt">One-yes Infotech solutions</p>
        <p className="details-text user-date-cnt">july 4, 2023</p>
        <img
          src={moreIcon}
          alt="more"
          className="more-icon"
          onClick={() => setEditUser(true)}
        />
      </div>
      <div ref={wrapperRef}>
        <EditUser open={editUser} openEdit={editAction} />
      </div>
    </div>
  );
};

export default UsersList;
