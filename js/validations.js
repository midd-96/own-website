var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var mobileError = document.getElementById('mobile-error')
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');




function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length==0){
        nameError.innerHTML= 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length==0){
        emailError.innerHTML='Email is required'
        return false;
    }
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = 'Email invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMobile(){
    var mobile = document.getElementById('contact-mobile').value;

    if(mobile.length==0){
        mobileError.innerHTML='Mobile number is required'
        return false;
    }
    if(!mobile.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
        mobileError.innerHTML = 'Mobile number invalid'
        return false;
    }
    mobileError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required=15;
    var left=required-message.length;

    if(left>0){
        messageError.innerHTML=left+'more character required';
        return false;
    }

    messageError.innerHTML= '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateEmail() || !validateMessage()){

        // submitError.style.display='block';
        submitError.innerHTML='Please fill  and submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}