function validate(){
    var un=document.forms["myform"]["uname"].value;
    var pw=document.forms["myform"]["p"].value;
//var username = document.getElementById("username").value;
//var password = document.getElementById("password").value;
if ( un == "admin" && pw == "admin"){
alert ("Login sucessfully");

window.location.href = "http://stackoverflow.com";
//window.location.replace("http://stackoverflow.com")
//window.location.assign = "http://www.google.com/"
//return true;*/
}
else{
alert("login failed");
//return false;
}
}