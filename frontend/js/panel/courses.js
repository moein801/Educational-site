import { createNewCourse, getAllCourses, prepareCreateCourseForm } from "./funcs/courses.js";

window.addEventListener("load", () => {
  const createCourseBtn = document.querySelector("#create-course-btn");
  console.log(createCourseBtn);
  

  getAllCourses();
  prepareCreateCourseForm()

  createCourseBtn.addEventListener("click", (event) => {
    event.preventDefault();
    createNewCourse();
  });
});
