function userReg()
{  
var uname = document.getElementById("uname");
var mail = document.getElementById("email");
mailxx =document.getElementById("email").value;
var cnumber = document.getElementById("cnum");
var cnumberxx=document.getElementById("cnum").value;
var regnumber = document.getElementById("reg");
var pass = document.getElementById("passwd");
var conpass = document.getElementById("cpass");
var dept =document.getElementById("dpt");
var sexy = document.getElementById("rd1");
var mailx = /^([a-z 0-9\.-]+)@([a-z 0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
var cnumberx =/^[0][7]\d{8}$/;

// validating radio buttons
if (sexy.checked == false)
{
    alert("Please select one option on the sex butttons");
    sexy.style.border = "solid 3px red";
    document.getElementById("lbluser").style.visibility = "visible";
    return false;
}

// validating a name textbox and displaying error message
else if (uname.value.trim() =="")
{
alert("Name cannot be blank");
uname.style.border="solid 3px red";
document.getElementById("lbluser1").style.visibility = "visible";
return false;  
}

// validating email textbox and displaying error msg
else if( email.value.trim() == "")
{
alert("email cannot be blank");
mail.style.border="solid 3px red";
document.getElementById("lbluser2").style.visibility = "visible";
return false;
}
else if(mailx.test(mailxx) == false)
{
  alert("Incorrect email format"); 
  mail.style.border="solid 3px red";
document.getElementById("lbluser2").style.visibility = "visible";
  return false;

}
// validating contact and displaying error message
else if(cnumber.value.trim() =="")
{
alert("Contact number cannnot be blank");
cnumber.style.border = "solid 3px red ";
document.getElementById("lbluser3").style.visibility = "visible";
return false;
}
else if(cnumberx.test(cnumberxx) == false)
{
    alert("Incorrect contact number format");
    cnumber.style.border = "solid 3px red ";
    document.getElementById("lbluser3").style.visibility = "visible";
    return false;
}
// validating a regnumber txtbox
else if(regnumber.value.trim() == "")
{
    alert("No empty spaces allowed");
    regnumber.style.border = "solid 3px red";
    document.getElementById("lbluser4").style.visibility="visible";
    return false;
}

// validating a password txtbox so that it will not take null values
else if(pass.value.trim() == "")
{
    alert("No empty spaces allowed ");
    pass.style.border = "solid 3px red";
    document.getElementById("lbluser5").style.visibility = "visible";
    return false
}
// validating a password textbox to take more than 6 characters
else if(pass.value.trim().length<6)
{
    alert("Password should be greater than 6 characters");
    return false;
}
// validating a cornfirm password txtbox so that it will not take null values
else if(conpass.value.trim() == "")
{
    alert("No empty spaces allowed");
    conpass.style.border = "solid 3px red";
    document.getElementById("lbluser7").style.visibility = "visible";
    return false;
}
// validating a department txtbox so that it will not take null values
else if (dept.value == "Select your department")
{
    alert("Select your department");
    dept.style.border ="solid 3px red";
    document.getElementById("lbluser6").style.visibility = "visible";
    return false;
}

else{
    document.getElementById("lbluser2").style.visibility = "hidden";
    return true;
}
}