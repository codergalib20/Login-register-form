const loginBtn = document.querySelector('.login-btn')
const regiBtn = document.querySelector('.regi-btn')


let loginForm = document.querySelector('.login-form')
let regiForm = document.querySelector('.regi-form')
// Functions
function login() {
    // form.style.left = '-310px'
    loginForm.style.left = '0px'
    regiForm.style.left = '0px'
    loginBtn.style.background = 'rgba(255, 0, 0, 0.281)'
    regiBtn.style.background = 'transparent'
}
function regi() {
    // form.style.left = '-310px'
    loginForm.style.left = '-310px'
    regiForm.style.left = '-310px'
    regiBtn.style.background = 'rgba(255, 0, 0, 0.281)'
    loginBtn.style.background = 'transparent'
}
if (loginBtn === 'click') {
    
}