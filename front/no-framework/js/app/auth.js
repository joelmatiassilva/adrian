"use strict";

function Auth(u,e,p) {
  this.usuario = u;
  this.email = e;
  this.pass = p;
}


// Agregamos un par de métodos a Auth.prototype
Auth.prototype.login = function(datos) {
	console.log("Login llego a Auth.js");
	//ajax.send(this.usuario, this.pass, 'get');
	return ajax.send("http://localhost/adrian/back/index.php/login", datos,'get');
};

//DESCRIPCION
Auth.prototype.logout = function(datos){
	console.log("Logout llego a Auth.js");
	//ajax.send(this.usuario, this.pass, 'get');
	return ajax.send("http://localhost/adrian/back/index.php/logout", datos,'get');
	
}

//DESCRIPCION
Auth.prototype.signup = function(datos){
	console.log("Signup llego a Auth.js");
	return ajax.send("http://localhost/adrian/back/index.php/registrar", datos,'post');
}
