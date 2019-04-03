function Main(){
    this.w = 200;
    this.h = 200;

    this.x = VAR.W/2-this.h/2;
    this.y = VAR.H/2-this.w/2;
}

Main.prototype.draw = function(){
    Game.ctx.fillStyle = 'black';
    Game.ctx.rect(this.x,this.y,this.w,this.h);
    Game.ctx.fill();
};