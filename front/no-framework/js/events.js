
//ATRAPA EL EVENTO CLICK CON LOGINBTN
document.getElementById("loginBtn").addEventListener("click", function(){
    var usuario = document.getElementById("first_name").value;
    var pass = document.getElementById("password").value;
   	var auth = new Auth(usuario, "email@email.com", pass);
   	auth.signup();  
});

 document.addEventListener("DOMContentLoaded", function(event) {
    function addElement () { 
		var x = document.getElementById("ciudad");
		var option = document.createElement("option");
		option.text = "Kiwi";
		x.add(option);
		
		var option2 = document.createElement("option");
		option2.text = "Kiwi2";
		x.add(option2);
	}
	addElement();
});

activities = document.getElementById("provincia");
activities.addEventListener("click", function() {
    var options = activities.querySelectorAll("option");
    var count = options.length;
    if(typeof(count) === "undefined" || count < 2)
    {
        addActivityItem();
    }
});
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}

activities.addEventListener("change", function(o) {
    //if(activities.value == "addNew")
    //{
    console.log(activities.value);
    function addElement () { 
		var x2 = document.getElementById("ciudad");
		var option3 = document.createElement("option");
		option3.text = "Kiwi";
		x2.add(option3);

	}

	   var div1 = document.getElementById("ciudad");
      var div1Paras = div1.getElementsByTagName("option");
      console.log(typeof(div1Paras));

for (var i = 0; i < div1Paras.length; i++) {
    div1Paras[i];
    console.log(div1Paras[i]);
    div1Paras[i].parentNode.removeChild(div1Paras[i])
}
	//element.parentNode.removeChild(element);
	
	//addElement();
        //addActivityItem();
    //}
});