"use strict";
var provincia = document.getElementById("provincia");

document.getElementById("loginBtn").addEventListener("click", function(){
    var usuario = document.getElementById("first_name").value;
    var pass = document.getElementById("password").value;
   	var auth = new Auth(usuario, "email@email.com", pass);
   	auth.signup();  
});

 document.addEventListener("DOMContentLoaded", function(event) {
    DomBuilder.addElements("Buenos Aires");
});

provincia.addEventListener("change", function(o) {
    DomBuilder.addElements(provincia.value);
});