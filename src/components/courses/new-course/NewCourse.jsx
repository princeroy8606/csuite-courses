import React, { useEffect, useState } from "react";
import Nolesson from "../../Assets/Images/no-lesson-illustration.svg";
import Trash from "../../Assets/Images/trash.png";
import Edit from "../../Assets/Images/edit.png";
import EditImg from "../../Assets/Images/edit.png";
import { useNavigate } from "react-router-dom";

const NewCourse = () => {
  const [popupOpen, setPopupOpen] = useState({ open: false, data: null });
  const [currentOverview, setCurrentOverview] = useState({
    title: null,
    description: null,
  });
  const [currentLesson, setCurrentLesson] = useState({
    title: null,
    sublessons: [],
  });
  const [currentSublesson, setCurrentSublesson] = useState({
    title: null,
    duration: null,
    url: "#",
  });

  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    coursename: null,
    description: null,
    price: null,
    thumbnail: null,
    overviews: [],
    lessons: [],
  });

  useEffect(() => {
    if (popupOpen) window.scrollTo(0, 1000);
  }, [popupOpen]);

  const handledirectInput = (type, value) => {
    setCourseData({ ...courseData, [type]: value });
  };

  const handleOverviewInput = (type, value) => {
    setCurrentOverview({ ...currentOverview, [type]: value });
  };

  const handleSubLessonsInput = (type, value) => {
    setCurrentSublesson({ ...currentSublesson, [type]: value });
  };

  const addSublessons = () => {
    const newLessons = [...currentLesson.sublessons];
    newLessons.push(currentSublesson);
    setCurrentLesson({ ...currentLesson, sublessons: newLessons });
  };

  const addNewOverview = () => {
    if (currentOverview.title && currentOverview.description) {
      const newOverview = courseData.overviews;
      newOverview.push(currentOverview);
      setCourseData({ ...courseData, overviews: newOverview });
    }
  };

  const addLessontoCourse = () => {
    const newLessons = [...courseData.lessons];
    newLessons.push(currentLesson);
    setCourseData({ ...courseData, lessons: newLessons });
    setPopupOpen({ open: false });
  };

  console.log(courseData);

  return (
    <div
      className="course-list-cnt new-course"
      style={{
        // height:  popupOpen ? "100vh" :"auto",
        overflow: popupOpen ? "hidden" : "scroll",
      }}
    >
      <div className="top-header-cnt">
        <div>
          <h3 className="course-new-title">Create New Course</h3>
          <p className="course-new-discription">
            Create new course and lets publish
          </p>
        </div>
        <div className="top-btn-cnt">
          <div className=" course-delete-btn " onClick={() => navigate("/")}>
            Cancel
          </div>
          <div className="add-new-lesson-btn" onClick={() => navigate("/")}>
            Save Course
          </div>
        </div>
      </div>
      <div className="input-split-cover">
        <form className="left-form">
          <div className="course-name-cnt">
            <p>Enter course Name</p>
            <input
              type="text"
              name=""
              id=""
              className="name-input"
              onChange={(e) => handledirectInput("coursename", e.target.value)}
            />
          </div>

          <div className="course-description-cnt">
            <p>Describe course</p>
            <textarea
              type="text"
              name=""
              id=""
              className="description-input"
              onChange={(e) => handledirectInput("description", e.target.value)}
            />
          </div>
          <div className="flex-input">
            <div className="course-name-cnt">
              <p>Enter course price</p>
              <input
                type="number"
                name=""
                id=""
                className="name-input price-input"
                placeholder="₹"
                onChange={(e) => handledirectInput("price", e.target.value)}
              />
            </div>
            <div className="course-name-cnt">
              <p>Upload course thumnale</p>
              <input
                type="file"
                name=""
                id=""
                className="styled-input"
                placeholder=""
              />
            </div>
          </div>
          <div className="course-description-cnt">
            <p>OverviewPoints</p>
            <div className="overview-input-cnt">
              <input
                type="text"
                name=""
                id=""
                className="name-input"
                placeholder="Heading"
                onChange={(e) => handleOverviewInput("title", e.target.value)}
              />
              <textarea
                type="text"
                name=""
                id=""
                className=" overview-input name-input"
                placeholder="Description"
                onChange={(e) =>
                  handleOverviewInput("description", e.target.value)
                }
              />
              <div
                className="overview-add-btn"
                onClick={() => addNewOverview()}
              >
                <p>Add</p>
              </div>
            </div>
            {courseData?.overviews?.map((overview) => (
              <div className="overviewPoint-cnt">
                <div className="overview-head-cnt">
                  <p className="overviewPoint-heading">{overview?.title}</p>
                  <div className="action-btn-cnt-overview">
                    <img
                      src={Trash}
                      alt="delete"
                      className="action-img-overview"
                    />
                    <img
                      src={EditImg}
                      alt="edit"
                      className="action-img-overview"
                      // onClick={() => openEdit()}
                    />
                  </div>
                </div>
                <p className="overviewPoint-content">{overview?.description}</p>
              </div>
            ))}
          </div>
        </form>
        <form className="form-right">
          <div className="form-right-header">
            <h3 className="course-new-title form-right-heading">
              List The Lessons
            </h3>
            <div
              className="add-new-lesson-btn"
              onClick={() => setPopupOpen({ open: true })}
            >
              Add new lesson
            </div>
          </div>

          <div className="lesson-list-cnt">
            {courseData.lessons?.length > 0 ? (
              courseData?.lessons?.map((lesson, index) => (
                <div
                  className="lesson"
                  onClick={() => setPopupOpen({ open: false })}
                >
                  <h1 className="lesson-number">{index + 1}</h1>
                  <div className="lesson-title-cnt">
                    <h3 className="lesson-title">{lesson?.title}</h3>
                  </div>
                  <ul className="lesson-subtitle-cnt">
                    {lesson?.sublessons?.map((sublesson) => (
                      <li>
                        <p className="lesson-subtitle">{sublesson?.title}</p>
                        <p className="lesson-duration-txt">
                          duration : {sublesson?.duration}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <div className="no-lesson-cnt">
                <img
                  src={Nolesson}
                  alt="no-lesson"
                  className="empty-lesson-img"
                />
              </div>
            )}
            {/*  */}
          </div>
        </form>
      </div>
      {popupOpen.open && (
        <div className="lesson-popup-cnt">
          <div className="lesson-new-cnt">
            <div className="form-right-header">
              <h3 className="course-new-title form-right-heading">
                Create New Lesson
              </h3>
              <div className="top-btn-cnt">
                <div
                  className="add-new-lesson-btn cancel-btn"
                  onClick={() => setPopupOpen({open:false})}
                >
                  Cancel
                </div>
                <div
                  className="add-new-lesson-btn"
                  onClick={() => addLessontoCourse()}
                >
                  Add to Course
                </div>
              </div>
            </div>
            <div className="new-lesson-top">
              <div className="lesson-content-input-cnt">
                <div className="sublesson-name-cnt">
                  <p>Sub lesson Title</p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="sublesson-title-input"
                    onChange={(e) =>
                      handleSubLessonsInput("title", e.target.value)
                    }
                  />
                </div>
                <div className="sublesson-content-cover">
                  <div className="input-cnt">
                    <p>Duration</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="sublesson-duration-input sublesson-title-input "
                      onChange={(e) =>
                        handleSubLessonsInput("duration", e.target.value)
                      }
                    />
                  </div>
                  <div className="input-cnt add-sublesson-btn">
                    <div className="sublesson-title-input center-media">
                      <p>upload video</p>
                      <input
                        type="file"
                        name="video-upload"
                        accept="video/*"
                        id=""
                        className="file-title-input "
                      />
                    </div>
                  </div>
                  <div
                    className="add-new-lesson-btn add-sublesson-btn"
                    onClick={() => addSublessons()}
                  >
                    Add
                  </div>
                </div>
              </div>
              <div className="lesson-name-cnt">
                <p>Lesson Title</p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="lesson-title-input"
                  onChange={(e) =>
                    setCurrentLesson({
                      ...currentLesson,
                      title: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="content-list">
              {currentLesson?.sublessons?.map((sublesson) => (
                <div className="lesson-content-input-cnt sublesson">
                  <div className="sublesson-name-cnt">
                    <p className="sublesson-title-txt">Sub lesson Title</p>
                    <input
                      type="text"
                      name=""
                      id=""
                      value={sublesson?.title}
                      className="sublesson-title-input sublesson-card-input"
                    />
                  </div>
                  <div className="sublesson-content-cover">
                    <div className="input-cnt sublesson-title-txt">
                      <p>Duration</p>
                      <input
                        type="text"
                        name=""
                        id=""
                        value={sublesson?.duration}
                        className="sublesson-duration-input sublesson-title-input sublesson-card-input"
                      />
                    </div>
                    <div className="input-cnt add-sublesson-btn">
                      <div className="sublesson-title-input center-media sublesson-card-input">
                        <p className="sublesson-title-txt">upload video</p>
                        <input
                          type="file"
                          name="video-upload"
                          accept="video/*"
                          id=""
                          className="file-title-input "
                        />
                      </div>
                    </div>
                    <div
                      className="add-new-lesson-btn add-sublesson-btn edit-sublesson-btn"
                      onClick={() => setPopupOpen(false)}
                    >
                      <div className="delete-btn">
                        <img
                          src={Trash}
                          alt="delete"
                          className="action-btn-img"
                        />
                      </div>
                      <div className="delete-btn">
                        <img src={Edit} alt="edit" className="action-btn-img" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewCourse;
