import { getCourseDetails, getAndShowRelatedCourses ,sendComment  } from "./funcs/shared.js";



window.addEventListener('load', () => {

    const commentSubmitBtn = document.querySelector(".comments__respond-btn")
    
    
    getCourseDetails()
    getAndShowRelatedCourses().then(data => {
        console.log(data);
    })

    commentSubmitBtn.addEventListener("click" , sendComment)
    

})