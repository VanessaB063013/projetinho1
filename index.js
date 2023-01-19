function validateFields(){
    toggleButtonDisable();
    toggleEmailErrors();
    togglePasswordErrors();
    

}

function toggleEmailErrors(){
    const email = document.getElementById("email").value;
    if(!email){
        document.getElementById("email-required-error").style.display = "block";
    }else{
        document.getElementById("email-required-error").style.display = "none";
    }

    if(validaEmail(email)){
        document.getElementById("email-invalid-error").style.display = "none";
    }else{
        document.getElementById("email-invalid-error").style.display = "block";
    }

}

function togglePasswordErrors(){
    const password = document.getElementById("senha").value;

    if(!senha){
        document.getElementById("senha-required-error").style.display = "block";
    }else{
        document.getElementById("senha-required-error").style.display = "none";
    }
}

function toggleButtonDisable(){
    const emailValid = isEmailValid();
    const email = document.getElementById("email").value;
    document.getElementById("recover-password-button").disabled = !emailValid;

    const PasswordValid = isPasswordValid();
    document.getElementById("login-button").disabled = !emailValid || !PasswordValid;

    
}

function isEmailValid(){
    const email = document.getElementById("email").value;
    if(!email){
        return false;
    }
    return validaEmail(email);

}


function validaEmail(email){
    return /\S+@\S+\.\S+/.test(email);

}

function isPasswordValid(){
    const senha = document.getElementById("senha").value;
    if(!senha){
        return false;
    }
    return true;
}






