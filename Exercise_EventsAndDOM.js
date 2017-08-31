var color = document.getElementsByTagName("div");
var i;
for(i =0; i< color.length; i++){
    color[i].style.backgroundColor = "lightblue";
}
var b1 = document.getElementById("b1").style.backgroundColor = "lightyellow";

var changeColor = function(){
    var color = document.getElementsByTagName("div");
    var i;
    for(i =0; i< color.length; i++){
        color[i].style.backgroundColor = "lightyellow";
    }
}
