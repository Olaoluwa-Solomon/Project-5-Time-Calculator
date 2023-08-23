 let username = document.getElementsByClassName("username");
var button = document.getElementById("btn");
 var Homeinput= document.getElementById("Homeinput");
  var navigate = document.getElementById("navigate");
button.addEventListener("click", function (){

 
   
    if(Homeinput.value=== ""){
        alert("Name cannot be blank");
        return false;
} else if(!(isNaN(Homeinput.value))){
    alert("Name cannot be digits");
    return false;
    
} else {
navigate.href = "index.html";
console.log(Homeinput.value);
return Homeinput.value;
}

})

