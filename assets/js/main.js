var chile4 = document.getElementById("chile4")
var lima5 = document.getElementById("lima5");
var lima6 = document.getElementById("lima6");

var clasechile = document.getElementsByClassName("4-chile");
var claselima5 = document.getElementsByClassName("5-lima");
var claselima6 = document.getElementsByClassName("6-lima");

var coder = document.getElementsByClassName("coder");
var select = document.getElementById("select");

console.log(clasechile.length)

select.onchange = function(){

	if(select.value == "chile4ta"){
		for(var i = 0; i < clasechile.length; i++){

			lima5.setAttribute("style","display:none;");
			lima6.setAttribute("style","display:none;");
			chile4.setAttribute("style","display:block;");

		}
	}else if(select.value == "lima5ta"){
		for(var i = 0; i < claselima5.length; i++){

			chile4.setAttribute("style","display:none;");
			lima6.setAttribute("style","display:none;");
			lima5.setAttribute("style","display:block;");
		}
	}else if(select.value == "lima6ta"){
		for(var i = 0; i < claselima6.length; i++){

			chile4.setAttribute("style","display:none;");
			lima5.setAttribute("style","display:none;");
			lima6.setAttribute("style","display:block;");
		}

	}
}