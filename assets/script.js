

const inputSection = document.querySelectorAll('.input-section');


// Focus login and signup input on mouser over.
inputSection.forEach(item => {
    item.addEventListener('mouseover', ()=> {
        item.focus();
    })
})

const showPwd = document.querySelector('.bx-show');
const hidePwd = document.querySelector('.bx-hide');
const inputPassword = document.querySelector('.password-input-s');

// show password
showPwd.addEventListener('click', ()=> {
    showPwd.classList.add('hide');
    hidePwd.classList.add('show');
    inputPassword.type = "text";
})

// hide password
hidePwd.addEventListener('click', ()=> {
    hidePwd.classList.remove('show');
    showPwd.classList.remove('hide');
    inputPassword.type = "password";
})

var eight_chars = document.querySelector('.eight_chars');
var capital_chars = document.querySelector('.capital_chars');
var lower_chars = document.querySelector('.lower_chars');
var number_chars = document.querySelector('.number_chars');
var special_chars = document.querySelector('.special_chars');

// conditions
// Check if the input password meet requirements
inputPassword.addEventListener('keyup', (e)=> {
    console.log(inputPassword.value);
    if(/[A-Z]/g.test(inputPassword.value)){
        capital_chars.classList.add('success-clr');
    }else {
        capital_chars.classList.remove('success-clr');
    }
    if(/[a-z]/g.test(inputPassword.value)){
        lower_chars.classList.add('success-clr');
    }else {
        lower_chars.classList.remove('success-clr');
    }
    if(/[0-9]/g.test(inputPassword.value)){
        number_chars.classList.add('success-clr');
    }else {
        number_chars.classList.remove('success-clr');
    }
    if(/[^a-z0-9]/ig.test(inputPassword.value)){
        special_chars.classList.add('success-clr');
    }else {
        special_chars.classList.remove('success-clr');
    }
    if(inputPassword.value.length >= 8){
        eight_chars.classList.add('success-clr');
    }else {
        eight_chars.classList.remove('success-clr');
    }
})

const firstname = '';
const lastname = '';
const email = document.querySelector('.email-input-s');
const password = '';
const submitBtn = document.querySelector('.submit-btn-s');

// Check submitted form for errors.
// check if submitted form is empty
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(!(/.@./.test(email.value))){
        email.classList.add('error-input');
    }
})