let colors = ["red", "orange", "yellow", "green", "blue","pink"];

$(document).ready(function() {
    for(let i = 0; i < 100; i++)
        $("#map").append("<div id=\"pixel" + i + "\" class=\"pixel\" ondrop=\"drop(event)\" ondragover=\"allowDrop(event)\"></p>");

    for(let i = 0; i < colors.length; i++)
        $("#toolbar").append("<div id=\""+colors[i]+"\" class=\"tool\" draggable=\"true\" ondragstart=\"drag(event)\"></div>");
});

function allowDrop(e) {
    e.preventDefault();
}

function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}

function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.style.backgroundColor = data;
}