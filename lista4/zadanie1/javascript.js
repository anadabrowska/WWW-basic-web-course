function CreateDiv(){
    var div = document.createElement("div");
    div.setAttribute("id","menu");
    div.style.height = "200px";
    div.style.border = "5px dotted black";
    div.style.textAlign= "center";
    div.style.fontSize = "40px";
    div.style.display = "flex";
    div.style.justifyContent = "space-around";
    div.style.alignItems = "center";
    div.style.margin = "30px";
    document.getElementById("content").appendChild(div);
}
function CreateLinks(){
    var a1 = document.createElement("a");
    var a2 = document.createElement("a");
    var a3 = document.createElement("a");
    a1.textContent = "Black";
    a2.textContent = "Red";
    a3.textContent = "Brown";
    a1.style.color = "black";
    a2.style.color = "red";
    a3.style.color = "brown";

    a1.onclick = function(){
        document.getElementById("menu").style.border = "5px dotted black";
    }
    a2.onclick = function(){
        document.getElementById("menu").style.border = "5px dotted red";
    }
    a3.onclick = function(){
        document.getElementById("menu").style.border = "5px dotted brown";
    }
    document.getElementById("menu").appendChild(a1);
    document.getElementById("menu").appendChild(a2);
    document.getElementById("menu").appendChild(a3);

}