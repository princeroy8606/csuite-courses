import React, { useEffect, useState } from "react";
import Trash from "../../Assets/Images/trash.png";
import Edit from "../../Assets/Images/edit.png";
import Test from "../../Assets/Images/exam.png";
import AddTest from "./AddTest";
import { uploadVedio } from "../../../api/baseApi";

const NewLesson = ({ addLesson, cancel, editData }) => {
  const [openTest, setOpenTest] = useState({ open: false, data: null });

  const [currentLesson, setCurrentLesson] = useState({
    title: null,
    sublessons: [],
    test: [],
    updateIndex: null,
  });
  const [currentSublesson, setCurrentSublesson] = useState({
    title: "",
    duration: "",
    url: "#",
    updateIndex: null,
  });

  const [sublessonFile, setSublessonFile] = useState(null);

  const handleSubLessonsInput = (type, value) => {
    setCurrentSublesson({ ...currentSublesson, [type]: value });
  };

  const getVideoURL = async () => {
    try {
      const vedioFormData = new FormData();
      vedioFormData.append("video", sublessonFile);
      console.log(vedioFormData);
      const {data} = await uploadVedio(vedioFormData);
      setCurrentSublesson({...currentSublesson,url:data?.videoUrl})
      return data?.videoUrl;
    } catch (error) {
      console.log(error);
    }
  };

  const addSublessons = async () => {
    const vediolink = await getVideoURL();
    const newLessons = [...currentLesson.sublessons];
    if (
      currentSublesson.title &&
      currentSublesson.duration &&
      vediolink
    ) {
      if (currentSublesson.updateIndex === null) {
        newLessons.push({
          ...currentSublesson,
          updateIndex: newLessons?.length > 0 ? newLessons.length : 0,
        });
        setCurrentLesson({ ...currentLesson, sublessons: newLessons });
        setCurrentSublesson({
          title: "",
          duration: "",
          url: "#",
          updateIndex: null,
        });
      } else {
        newLessons[currentSublesson.updateIndex] = currentSublesson;
        setCurrentLesson({ ...currentLesson, sublessons: newLessons });
        setCurrentSublesson({
          title: "",
          duration: "",
          url: "#",
          updateIndex: null,
        });
      }
    }
  };

  const validateAndUpdateLesson = () => {
    if (currentLesson.title && currentLesson.sublessons.length > 0) {
      addLesson(currentLesson);
    }
  };

  const handleRemoveSublesson = (index) => {
    const newsubLessons = [...currentLesson.sublessons];
    newsubLessons.splice(index, 1);
    setCurrentLesson({ ...currentLesson, sublessons: newsubLessons });
  };

  console.log(sublessonFile);

  useEffect(() => {
    if (editData) setCurrentLesson(editData);
  }, [editData]);

  return (
    <div className="lesson-popup-cnt">
      <div className="lesson-new-cnt">
        {openTest.open && (
          <AddTest
            data={currentLesson.test}
            addTest={(data) => {
              setCurrentLesson({ ...currentLesson, test: data });
            }}
            closeTest={() => setOpenTest({ open: false })}
          />
        )}
        <div className="form-right-header">
          <h3 className="course-new-title form-right-heading">
            Create New Lesson
          </h3>
          <div className="top-btn-cnt">
            <div
              className="add-new-lesson-btn cancel-btn"
              onClick={() => cancel()}
            >
              Cancel
            </div>
            <div
              className="add-new-lesson-btn"
              onClick={() => validateAndUpdateLesson()}
            >
              Add to Course
            </div>
          </div>
        </div>
        <div className="new-lesson-top">
          <div className="lesson-name-cnt">
            <p>Lesson Title</p>
            <input
              type="text"
              name=""
              id=""
              value={currentLesson.title}
              className="lesson-title-input"
              onChange={(e) =>
                setCurrentLesson({
                  ...currentLesson,
                  title: e.target.value,
                })
              }
            />
            <div
              className="lesson-test-overview-cnt"
              onClick={() =>
                setOpenTest({ open: true, data: currentLesson.test })
              }
            >
              <img src={Test} alt="test" className="test" />
              <p>
                {currentLesson?.test?.length < 1
                  ? "No Tests has been created for this lesson"
                  : `Test with ${currentLesson?.test?.length} questions click to update`}
              </p>
              <div className="lesson-test-overview-btn"></div>
            </div>
          </div>
          <div className="lesson-content-input-cnt">
            <div className="sublesson-name-cnt">
              <p>Sub lesson Title</p>
              <input
                type="text"
                name=""
                id=""
                value={currentSublesson.title}
                className="sublesson-title-input"
                onChange={(e) => handleSubLessonsInput("title", e.target.value)}
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
                  value={currentSublesson.duration}
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
                    style={{ position: "absolute" }}
                    id=""
                    className="file-title-input"
                    onChange={(e) => setSublessonFile(e.target.files[0])}
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
        </div>
        <div className="content-list">
          {currentLesson?.sublessons?.map((sublesson, index) => (
            <div className="lesson-content-input-cnt sublesson" key={index}>
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
                  //   onClick={() => setPopupOpen(false)}
                >
                  <div className="delete-btn">
                    <img
                      src={Trash}
                      alt="delete"
                      className="action-btn-img"
                      onClick={() => handleRemoveSublesson(index)}
                    />
                  </div>
                  <div className="delete-btn">
                    <img
                      src={Edit}
                      alt="edit"
                      className="action-btn-img"
                      onClick={() => setCurrentSublesson(sublesson)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewLesson;
