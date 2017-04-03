var clasechile = document.getElementsByClassName("4-chile");
var claselima5 = document.getElementsByClassName("5-lima");
var claselima6 = document.getElementsByClassName("6-lima");

var coder = document.getElementsByClassName("coder");
var select = document.getElementById("select");

select.onchange = function(){

	if(select.value == "chile4ta"){

		for(var i = 0; i < clasechile.length; i++){
			clasechile[i].setAttribute("style","display:inline-block");
		}

		for(var i = 0; i < claselima5.length; i++){
			claselima5[i].setAttribute("style","display:none;");
		}

		for(var i = 0; i < claselima6.length; i++){
			claselima6[i].setAttribute("style","display:none;");
		}

	}else if(select.value == "lima5ta"){

		for(var i = 0; i < claselima5.length; i++){
			claselima5[i].setAttribute("style","display:inline-block");
		}

		for(var i = 0; i < claselima6.length; i++){
			claselima6[i].setAttribute("style","display:none;");
		}

		for(var i = 0; i < clasechile.length; i++){
			clasechile[i].setAttribute("style","display:none;");
		}

	}else if(select.value == "lima6ta"){

		for(var i = 0; i < claselima6.length; i++){
			claselima6[i].setAttribute("style","display:inline-block");
		}

		for(var i = 0; i < claselima5.length; i++){
			claselima5[i].setAttribute("style","display:none;");
		}

		for(var i = 0; i < clasechile.length; i++){
			clasechile[i].setAttribute("style","display:none;");
		}

	}else if(select.value == ""){

		for(var i = 0; i < claselima6.length; i++){
			claselima6[i].setAttribute("style","display:inline-block");
		}

		for(var i = 0; i < claselima5.length; i++){
			claselima5[i].setAttribute("style","display:inline-block;");
		}

		for(var i = 0; i < clasechile.length; i++){
			clasechile[i].setAttribute("style","display:inline-block;");
		}	
	}
}