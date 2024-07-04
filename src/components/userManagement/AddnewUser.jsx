import React from "react";

const AddnewUser = ({ closeNewUser }) => {
  return (
    <div className="add-new-user-cover">
      <div className="add-new-user-cnt">
        <>
          <h2>New User </h2>
          <p>Enter New User Details</p>
        </>
        <form className="user-details-from">
          <div className="course-name-cnt user-input">
            <p>Enter user Name</p>
            <input type="text" name="" id="" className="name-input " />
          </div>
          <div className="course-name-cnt user-input">
            <p>Enter user email</p>
            <input type="text" name="" id="" className="name-input " />
          </div>
          <div className="course-name-cnt user-input">
            <p>Enter user company</p>
            <input type="text" name="" id="" className="name-input " />
          </div>
          <div className="course-name-cnt user-input">
            <p>Enter user position</p>
            <input type="text" name="" id="" className="name-input " />
          </div>
          <div className="course-name-cnt user-input">
            <p>Enter user geneder</p>
            <input type="text" name="" id="" className="name-input " />
          </div>
          <div
            className="course-name-cnt name-input user-input "
            style={{ position: "relative" }}
          >
            <p className="file-upload ">Upload User Profile</p>
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
          <div className=" course-delete-btn " onClick={() => closeNewUser()}>
            Cancel
          </div>
          <div className="add-new-lesson-btn" onClick={() => closeNewUser()}>
            Add User
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddnewUser;
