"use strict";
var DomBuilder = (function(){
	function addElement(provin) { 
		deleteElements();
		var ciudad = document.getElementById("ciudad");
		for (var i = 0; i <= 3; i++) {
			var option = document.createElement("option");
			option.text = "ciudad "+ provin + " "+i;
			option.id = provin+i;
			ciudad.add(option);
		};
	};

	function deleteElements(){
		var ciudad = document.getElementById("ciudad");
		while (ciudad.firstChild) {
	    	ciudad.removeChild(ciudad.firstChild);
		}
	};

	return{
		addElements: addElement,
		deleteElements: deleteElements 
	}

}());