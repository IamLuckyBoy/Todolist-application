var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function inputLength()
{
	return input.value.length;
}

function after(){
	    var li = document.createElement("li");
    	li.appendChild(document.createTextNode(input.value));
    	ul.appendChild(li);
    	input.value="";
}

function afterClick()
{
    if(inputLength() > 0){
    	after();
    }
}

function afterEnter(event){
   if(inputLength() > 0 && event.keyCode === 13){
   	after();
   }
}

ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}



button.addEventListener("click",afterClick);

input.addEventListener("keypress",afterEnter);
