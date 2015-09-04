"use strict";
var provincia = document.getElementById("provincia");
var ciudad = document.getElementById("ciudad");

var datos ={
				nombre:'',
				apellido:'',
				provincia: '',
				ciudad: '',
				password: ''
			}

document.getElementById("loginBtn").addEventListener("click", function(){
    datos.nombre = document.getElementById("first_name").value;
    datos.password = document.getElementById("password").value;
    datos.apellido = document.getElementById("first_name").value;
    datos.provincia = provincia.value;
    datos.ciudad = ciudad.value;

   	var auth = new Auth();
   	auth.signup(datos);  
});

 document.addEventListener("DOMContentLoaded", function(event) {
    DomBuilder.addElements("Buenos Aires");
});

provincia.addEventListener("change", function(o) {
    DomBuilder.addElements(provincia.value);
});