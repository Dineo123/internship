
function validation(){
    var name =document.getElementById('name').value;
    var message =document.getElementById('message').value;
    var email =document.getElementById('email').value;
    var form =document.getElementById('form').value;
    var error =document.getElementById('error');
    var contact =document.getElementById('contact').value;
    var text;

    

    if(name.length ==""){
        error.style.padding = "10px";
        text = " Please enter your name";
        error.innerHTML = text;
        return false;
    }

    if(isNaN(contact) || contact.length != 10){
        error.style.padding = "10px";
        text = "Please Enter valid Phone Number";
        error.innerHTML = text;
        return false;
      }

      if(email.indexOf("@")== -1 || email.length <6){
        error.style.padding = "10px";
        text = " Please enter valid email";
        error.innerHTML = text;
        return false;
    }

    alert("form submited succesful")    
    return true;

}