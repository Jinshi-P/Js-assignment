

function validateName(){
    let name = document.getElementById("name");
    let nameError=document.getElementById("nameError");

    if(name.value.trim()==0){

       nameError.innerText="Please enter your full name"
        return false;

    }else if(name.value.length<5){

        nameError.innerText="Full name must be more than 5 characters";
        return false;

    }else{

        nameError.innerText="";
        return true;

    }
}


function validateEmail(){
    let email= document.getElementById("email");
    let emailError=document.getElementById("emailError");

    if(email.value.trim()==0){

        emailError.innerText="Email cannot be blank";
        return false;

    }
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)==false){

        emailError.innerText="Please enter a valid Email";
         return false;
    }
     else{
        emailError.innerText="";
         return true;
     }
}

function validatePassword(){

    let password=document.getElementById("password");
    let passError=document.getElementById("passError");

    if(password.value.trim()==0){

        passError.innerText=" password cannot be blank"
        return false;
    }
    else if(password.value.length<8)
    {
        passError.innerText="password must be greater than 8 characters";
        return false;

    }
    else{
        passError.innerText="";
        return true;
    }
}


function validateCnfrmpassword(){

    let password=document.getElementById("password");
    let cnfrmPassword=document.getElementById("cnfrmPassword");
    let cnfrmPassError=document.getElementById("cnfrmPassError");

    if(cnfrmPassword.value !=password.value){

        cnfrmPassError.innerText="incorrect password";
        return false;
    }
    else{
        cnfrmPassError.innerText="";
        return true;
    }
}

function formValidate(){
    if( !validateEmail || !validateName || !validateCnfrmpassword || ! validatePassword ){
      
        alert("you are entered wrong information ")
        return false;

    }
    else{
        alert ("success")
        
        return true;
    }
}