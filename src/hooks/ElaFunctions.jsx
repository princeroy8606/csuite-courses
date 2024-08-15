import {
  addQuestion,
  deleteQuestion,
  updateQuestion,
  updateSection,
} from "../api/baseApi";

export const addNewQuestion = async (testId, section, question) => {
  console.log(testId, section, question);
  try {
    const { data } = await addQuestion(testId, section, question);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editQuestions = async (testId, section, question) => {
  console.log(testId, section, question);
  try {
    const { data } = await updateQuestion(testId, section, question);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editSectionDetails = async (testId, section, sectionData) => {
  console.log(testId, section, sectionData);
  try {
    const { data } = await updateSection(testId, section, sectionData);
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error updating section:", error);
  }
};

export const deleteSingleQuestion = async (testId, section, questionIndex) => {
  console.log(testId, section, questionIndex);
  try {
    const { data } = await deleteQuestion(testId, section, questionIndex);
    console.log(data);
    return data;
  } catch (error) {
    console.log("Error updating section:", error);
  }
};
