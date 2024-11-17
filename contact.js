let contactForm = document.getElementById('content-form')
let firstNameInput = document.getElementById('first_name')
let lastNameInput = document.getElementById('last_name')
let passwordInput = document.getElementById('password')
let emailInput = document.getElementById('email')
let commentInput = document.getElementById('comment')

let isFirstNameValid = false;
let isLastNameValid = false;
let isPasswordValid = false;
let isEmailValid = false;

let emailRegex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

let regex = /^[a-z ,.'-]+$/i


firstNameInput.addEventListener("keyup", (event) => {
    if((event.target.value).match(regex)){
        firstNameInput.style.border = 'solid 1px green'
        isFirstNameValid = true;
    } else {
        firstNameInput.style.border = 'solid 1px red'
        isFirstNameValid = false;
    }
})

lastNameInput.addEventListener("keyup", (event) => {
    if((event.target.value).match(regex)){
        lastNameInput.style.border = 'solid 1px green'
        isLastNameValid = true;
    } else {
        lastNameInput.style.border = 'solid 1px red'
        isLastNameValid = false;
    }
})

emailInput.addEventListener("keyup", (event) => {
    if((event.target.value).match(emailRegex)){
        emailInput.style.border = 'solid 1px green'
        isEmailValid = true;
    } else {
        emailInput.style.border = 'solid 1px red'
        isEmailValid = false;
    }
})

passwordInput.addEventListener("keyup", (event) => {
    let password = event.target.value;
    if(password.length > 6) {
        passwordInput.style.border = 'solid 1px green'
        isPasswordValid = true;
    } else {
        passwordInput.style.border = 'solid 1px red'
        isPasswordValid = false;
    }
})

let validateBtn = document.getElementById('validate_btn')

const validate = (firstName, lastName, password, email, comment) => {
    console.log(firstName, lastName, email, password, comment)
    if(firstName && lastName && password && email && (comment.length > 1)) {
        return true;
    } else return false;
}

validateBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (validate(isFirstNameValid, isLastNameValid, isEmailValid, isPasswordValid, commentInput.value)) {
        alert(`Thank you for submitting this form! ${firstNameInput.value}`)

        firstNameInput.value = ''
        lastNameInput.value = ''
        passwordInput.value = ''
        emailInput.value = ''
        commentInput.value = ''

        lastNameInput.style.border = ''
        firstNameInput.style.border = ''
        emailInput.style.border = ''
        passwordInput.style.border = ''
    } else {
        alert('Please fill out all inputs')
    }
})