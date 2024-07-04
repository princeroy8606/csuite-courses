import React from "react";

const EditUserData = ({ closeEditUser }) => {
  return (
    <div className="add-new-user-cover">
      <div className="add-new-user-cnt">
        <>
          <h2>Edit User </h2>
          <p>Update User Details</p>
        </>
        <form className="user-details-from">
          <div className="course-name-cnt user-input">
            <p>Name</p>
            <input type="text" name="" id="" className="name-input " />
          </div>
          <div className="course-name-cnt user-input">
            <p>Email</p>
            <input type="text" name="" id="" className="name-input " />
          </div>
          <div className="course-name-cnt user-input">
            <p>Company</p>
            <input type="text" name="" id="" className="name-input " />
          </div>
          <div className="course-name-cnt user-input">
            <p>Position</p>
            <input type="text" name="" id="" className="name-input " />
          </div>
          <div className="course-name-cnt user-input">
            <p>Geneder</p>
            <input type="text" name="" id="" className="name-input " />
          </div>
          <div
            className="course-name-cnt name-input user-input "
            style={{ position: "relative" }}
          >
            <p className="file-upload ">Upload Profile</p>
            <input
              type="file"
              name=""
              id=""
              className="name-input file-input-hide "
              placeholder="upload"
            />
          </div>
        </form>
        <div className="bottom-btn-cnt">
          <div className=" course-delete-btn " onClick={() => closeEditUser()}>
            Cancel
          </div>
          <div className="add-new-lesson-btn" onClick={() => closeEditUser()}>
            Add User
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserData;
