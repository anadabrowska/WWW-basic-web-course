Small.count = 15;
Small.size = 40;
Small.all = [];
var red = document.getElementById("red");
var green = document.getElementById("green");
function Small(xs, ys, i){
    this.id = i;
    this.x = xs/Small.count * (VAR.W - Small.size);
    this.y = ys/Small.count * (VAR.H - Small.size);
    this.b = 0;

    Small.all.push(this);
}

Small.prototype.draw = function(){
    if(this.b == 1){
        Game.ctx.drawImage(green,this.x,this.y);
    }
    else{
        Game.ctx.drawImage(red,this.x,this.y);
    }
};

Small.draw = function(){

    Small.num = 0;
    for(var i in Small.all){
        //console.log(Small.all[i]);
        Small.num++;
        Small.all[i].draw();
    }
}