var clasechile = document.getElementsByClassName("4-chile");
var claselima5 = document.getElementsByClassName("5-lima");
var claselima6 = document.getElementsByClassName("6-lima");

var select = document.getElementById("select");

function show(clase,atributo){

	for(var i = 0; i < clase.length; i++){
		clase[i].style.display = atributo;
	}
}

select.onchange = function(){

	if(select.value == "chile4ta"){

		show(clasechile,"inline-block");
		show(claselima5,"none");
		show(claselima6,"none");

	}else if(select.value == "lima5ta"){

		show(clasechile,"none");
		show(claselima5,"inline-block");
		show(claselima6,"none");

	}else if(select.value == "lima6ta"){

		show(clasechile,"none");
		show(claselima5,"none");
		show(claselima6,"inline-block");

	}else{

		show(clasechile,"inline-block");
		show(claselima5,"inline-block");
		show(claselima6,"inline-block");

	}
}