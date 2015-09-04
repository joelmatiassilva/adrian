"use strict";

//MODULO PATTERN JAVACRIPT AJAX
/*separar en una archivo las constantes*/
var DONDE = "http://localhost/adrian/back/index.php/registrar";
var PARAM_USUARIO = "usuario=";
var PARAM_PASS = "contra=";

var ajax = (function () {
    var done = 4, ok = 200;

    function enviar(url, parametros, metodo) {

        var XHR = new XMLHttpRequest();
        var p = Promise();

        if (parametros === false || parametros === null || parametros === undefined) {
            parametros = "";
        }

        XHR.open(metodo, url, true);
        XHR.setRequestHeader("content-type", "application/json;charset=UTF-8");
        XHR.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        XHR.onreadystatechange = function () {
            if (XHR.readyState === done && XHR.status === ok) {
                p.mantener(XHR.responseText);
            }
        };
        console.log(parametros);
        XHR.send(JSON.stringify(parametros));

        return p.compartir;
    }

    return {
        send: enviar
    };

}());
