
// var regexp = /^[a-zA-Z]+$/;
var numbers_exp = /^[0-9]+$/;
var email_exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
document.getElementById("button").addEventListener('click',myValidation);

function myValidation(){
    validatePesel();
    validateAccountNr();
    validateEmail();
    validateDate();
}

function validatePesel(){
    var pesel = document.getElementById("pesel").value;
    if(pesel.length < 11 || pesel.length > 11){
        producePrompt("Pesel to 11 cyfr","lb-pesel","red");
        return false;
    }
    else if(!numbers_exp.test(pesel)){
        producePrompt("Pesel składa się tylko z cyfr","lb-pesel","red");
        return false;
    }
    else{
        producePrompt("","lb-pesel","red");
        return true;
    }
}
function validateAccountNr(){
    var account = document.getElementById("account").value;
    if(account.length < 26 || account.length > 26){
        producePrompt("Numer konta ma 26 cyfr","lb-account","red");
        return false;
    }
    else if (!numbers_exp.test(account)){
        producePrompt("Numer konta składa się tylko z cyfr","lb-account","red");
        return false;
    }
    else{
        producePrompt("","lb-account","red");
        return true;
    }

}
function validateDate(){
    var date = document.getElementById("date").value;
    if(date == ""){
        producePrompt("Data jest wymagana","lb-date","red");
        return false;
    }
    else{
        producePrompt("","lb-date","red");
        return true;
    }
}
function validateEmail(){
    var email = document.getElementById("email").value;
    if(!email_exp.test(email)){
        producePrompt("Nieporawny email!","lb-email","red");
        return false;
    }
    else{
        producePrompt("","lb-email","red");
        return true;
    }
}

function producePrompt(message,promptlocation, color){
    document.getElementById(promptlocation).innerHTML= message; 
    document.getElementById(promptlocation).style.color = color;
}