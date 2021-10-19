const userName = document.querySelector('.txtUserName');
const email = document.querySelector('.txtEmail');
const psw = document.querySelector('.txtPwd');
const conPsw = document.querySelector('.txtConPwd');


const onSuccess = (input)=>{
    const parent = input.parentElement;
    const messageEle = parent.querySelector('small');
    messageEle.style.visibility = 'hidden';
    parent.classList.add('success');
    parent.classList.remove('error');
}

const onError = (input,message)=>{
    const parent = input.parentElement;
    const messageEle = parent.querySelector('small');
    messageEle.style.visibility='visible';
    messageEle.innerHTML = message;
    parent.classList.add('error');
    parent.classList.remove('success');
}



function validateUserName(){
//
    if (userName.value.length<3){
        onError(userName, `User name must be at least 3 characters long!`);
    }else if(userName.value.trim()===''){
        onError(userName, `User name can't be empty!`);
    }else{
        onSuccess(userName);
    }
}
//
function validateEmail(){
    if(email.value.trim()===''){
        onError(email, `Email can't be empty!`);
    }else if(!isValidEmail(email.value.trim())){
        onError(email, `Email not valid!`);
    }else{
        onSuccess(email);
    }
}
//
function validatePsw(){
    if(psw.value.trim()===''){
        onError(psw, `Password can't be empty`);
    }else{
        onSuccess(psw);
    }
}
//
function validateConPsw(){
    if(conPsw.value.trim()===''){
        onError(conPsw, `Please confirm password! Can't be empty`);
    }else if(conPsw.value.trim()!==psw.value.trim()){
        onError(conPsw, `Password don't match, please try again!`);
    }else{
        onSuccess(conPsw);
    }

}
function isValidEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

document.querySelector(".txtUserName").addEventListener("input", validateUserName);
document.querySelector(".txtEmail").addEventListener("input", validateEmail);
document.querySelector(".txtPwd").addEventListener("input", validatePsw);
document.querySelector(".txtConPwd").addEventListener("input", validateConPsw);


document.querySelector('button')
.addEventListener('click', (event)=>{
    event.preventDefault();
    validateUserName();
    validateEmail();
    validatePsw();
    validateConPsw();
});

// const el1 = document.querySelector('.txtUserName');
// const el2 = document.querySelector('.txtEmail');
// const el3 = document.querySelector('.txtPwd');
// const el4 = document.querySelector('.txtConPwd');

// el1, el2, el3, el4.addEventListener('input', function(){
//         validate();
//     });

// el4.addEventListener('input', validate);




// document.querySelectorAll('.form-control').forEach(item=>{
//     item.addEventListener('input', (event)=>{
//         event.preventDefault();
      
// })
// });

