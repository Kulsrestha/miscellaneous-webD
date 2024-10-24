function validateForm(){
    var input = document.getElementById("emailorPhone").value;
    var password = document.getElementById("password").value;

    var atPosition = input.indexOf("@");   
    var dotPosition = input.lastIndexOf(".");
    var isNumeric = true;
    for(let i=0;i<input.length;i++){
        if(input[i] < '0' || input[i] > '9'){
            isNumeric = false;
            break;
        }
    }
    if(isNumeric){
        if(input.length !=10){
            alert("Enter a valid Phone Number or Email");
            return false;
        }
    }
    else{
        if(atPosition<1 || dotPosition < atPosition || dotPosition < atPosition + 2 || dotPosition + 2 > input.length){
            alert("Please enter a valid E-mail address or phone number");
            return false;
        }
    }
    if(password.length<6){
        alert("Password must have at least 6 characters");
        return false;
    }

    return true;
}


// a@gmail.co