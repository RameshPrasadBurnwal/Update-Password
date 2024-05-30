let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let formResultEl = document.getElementById("formResult");


let newPasswordEl = document.getElementById("newPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");


let confirmPasswordEl = document.getElementById("confirmPassword");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");


let validateNewPassword = function(){
    if(newPasswordEl.value === ""){
        newPasswordErrMsgEl.textContent = "*Required";
    }
    else{
        newPasswordErrMsgEl.textContent = "";
    }
};



let validateConfirmPassword = function(){
    if(confirmPasswordEl.value === ""){
        confirmPasswordErrMsgEl.textContent = "*Required";
        formResultEl.textContent = "";
    }
    else if(confirmPasswordEl.value === newPasswordEl.value){
        formResultEl.textContent = "Both Password Matched";
        confirmPasswordErrMsgEl.textContent = "";
    }
    else if(confirmPasswordEl.value !== newPasswordEl.value){
        formResultEl.textContent = "Both Password Not Equal";
        confirmPasswordErrMsgEl.textContent = "";
    }
};


newPasswordEl.addEventListener("blur",validateNewPassword);
confirmPasswordEl.addEventListener("blur",validateConfirmPassword);


updatePasswordFormEl.addEventListener("submit",function(event){
    event.preventDefault();
    validateNewPassword();
    validateConfirmPassword();
});
