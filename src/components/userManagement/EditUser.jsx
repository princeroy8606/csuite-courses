import React from "react";
import potrate from "../Assets/Images/potrate-1.jpg";
import Trash from "../Assets/Images/trash.png";
import Edit from "../Assets/Images/edit.png";

const EditUser = ({ open, openEdit }) => {
    
  return (
    <div className="edit-user-cnt" style={{ right: open ? "1rem" : " -28rem" }}>
      <div className="profile-details-cnt">
        <img src={potrate} alt="potrate" className="profile-details-img" />
        <h4>Test user-1</h4>
        <div className="action-btn-cnt">
          <img src={Trash} alt="delete" className="action-img" />
          <img
            src={Edit}
            alt="edit"
            className="action-img"
            onClick={() => openEdit()}
          />
        </div>
      </div>
      <div className="user-ofiicial-details-cnt">
        <div className="ofiicial-detail">
          <h3 className="details-text">Email</h3>
          <p>testuser123@gmail.com</p>
        </div>
        <div className="ofiicial-detail">
          <h3 className="details-text">Gende</h3>
          <p>female</p>
        </div>
        <div className="ofiicial-detail">
          <h3 className="details-text">company</h3>
          <p>testusercompny</p>
        </div>
        <div className="ofiicial-detail">
          <h3 className="details-text">position</h3>
          <p>Hr manager</p>
        </div>
      </div>
      <div className="courses-history">
        <div className="courses-history-header">
          <h5>Course</h5>
          <h5>status</h5>
        </div>
        <div className="courses-history-content courses-history-header">
          <h5>AI in hiring assisatance</h5>
          <h6>Attending</h6>
        </div>
        <div className="courses-history-content courses-history-header">
          <h5>AI in hiring assisatance</h5>
          <h6>Attending</h6>
        </div>
        <div className="courses-history-content courses-history-header">
          <h5>AI in hiring assisatance</h5>
          <h6>Attending</h6>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
