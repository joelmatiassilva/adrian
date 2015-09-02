"use strict";

//MODULO PATTERN JAVACRIPT AJAX
/*separar en una archivo las constantes*/
var DONDE = "http://localhost/adrian/back/index.php/registrar";
var PARAM_USUARIO = "usuario=";
var PARAM_PASS = "contra=";

var ajax = (function () {
    var done = 4, ok = 200;

    function enviar(url, parameters) {

        var XHR = new XMLHttpRequest();
        var p = Promise();

        if (parameters === false || parameters === null || parameters === undefined) {
            parameters = "";
        }

        XHR.open("post", url, true);
        XHR.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        XHR.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        XHR.onreadystatechange = function () {
            if (XHR.readyState === done && XHR.status === ok) {
                p.mantener(XHR.responseText);
            }
        };
        XHR.send(parameters);

        return p.compartir;
    }

    return {
        send: enviar
    };

}());
