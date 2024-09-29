import { showAllCoursesInCoursesPage,insertCourseBoxHtmlTemplate } from "./funcs/shared.js";
import { paginate,getUrlParam,addParamToURL } from "./funcs/utils.js";

window.addParamToURL = addParamToURL


window.addEventListener("load" , () => {

    

    showAllCoursesInCoursesPage().then((courses) => {
        console.log(courses);
        const categoryCoursesWrapper = document.querySelector(
            "#category-courses-wrapper"
          );
        const paginationListElem = document.querySelector(".courses__pagination-list")
        const currentPage = getUrlParam("page")
        const shownCourses = paginate([...courses],3,paginationListElem,currentPage)
        insertCourseBoxHtmlTemplate(
          [...shownCourses],
          "row",
          categoryCoursesWrapper
        );
        
    })
    
    
})