"use strict";

var Promise = function () {

    var pendientes = [],
        listo = false,
        resultado;

    var entonces = function (callback) {
        if (typeof callback === "function") {
            if (listo === false) {
                pendientes.push(callback);
            } else {
                callback(result);
            }
        }
        return this;
    };

    var mantener = function (response) {
        if (listo === false) {
            listo = true;
            pendientes.forEach(function (value, index, ar) {
                resultado = response;
                value(resultado);
            });
            pendientes = undefined;
        }
    };

    var estaPreparado = function () {
        return listo;
    };

    return {
        mantener: mantener,
        compartir: {
            entonces: entonces,
            estaPreparado: estaPreparado
        }
    };

};