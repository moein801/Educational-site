
import {submitContactUsMsg} from "./funcs/shared.js"

window.addEventListener("load" , () => {

    const loginFormBtn = document.querySelector(".login-form__btn")
    loginFormBtn.addEventListener("click" , event => {
        event.preventDefault()
    submitContactUsMsg()

    })

    
    
})
