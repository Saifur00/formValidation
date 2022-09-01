import { lengthCheck } from "./checkLength.js";

const form = document.getElementById('signup-form')
const feedback = document.querySelector('.feedback')
const pattern = /^[a-z]{6,}$/

form.addEventListener('submit', e=>{
    e.preventDefault();
    // console.log(form.fname.value)
    let firstName = form.fname.value
    const result = lengthCheck(firstName)
    console.log(result)

    if(result === 'passed'){
        feedback.textContent = "Username is valid"
    }
    else{
        feedback.textContent = "Provide a valide username"
    }
    
})

form.username.addEventListener('keyup', e=>{
    if(pattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    }
    else{
        form.username.setAttribute('class', 'error');
    }
})

