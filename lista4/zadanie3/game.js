window.onload = function(){
    Game.init();
};
    VAR = {
        W:0,
        H:0,
        D:0,
        points:0,
        base:0,
        inbase: 0,
        time:0,
        freeze:false,
        rand:function(min,max){
            return Math.floor(Math.random()*(max-min+1))+min;
        }
    };
    Game = {
        init:function(){
            Game.canvas= document.createElement("canvas");
            Game.ctx = Game.canvas.getContext("2d");
            Game.layout();
            Game.points = 0;
            Game.base = 0;
            Game.time = 0;
            Game.inbase = 0;
            Game.freeze = false;
            Game.main = new Main();
            Game.main.draw();

            Game.showScore();

            var xs = [], ys = [];
            for(var i=1; i<Small.count+1; i++){
                xs.push(i);
                ys.push(i);
            }
            xs = Game.shuffle(xs);
            ys = Game.shuffle(ys);
            while(!Game.goodShuffle(xs, ys,Game.main)){
                ys = Game.shuffle(ys);
            }
            for(var i=0; i<Small.count; i++){
                new Small(xs[i], ys[i],i);
            }
            window.addEventListener('resize',Game.layout);
            document.body.appendChild(Game.canvas);
            Game.timeCount();
            document.addEventListener('mousemove',function(e){
                if(Game.freeze)
                    return;

                Small.draw();
                var x = event.clientX;
                var y = event.clientY;

                if(x >= Game.main.x && x <= Game.main.x+Game.main.w &&
                    y >= Game.main.y+70 && y <= Game.main.y+Game.main.h+70 ){
                        Game.base = 1;
                        Game.inbase = 1;
                        if(Game.end()){
                            Game.freeze = true;
                            Game.save();
                        }
                }else{
                    Game.inbase = 0;
                }

                for(var i in Small.all){
                    if(x >= Small.all[i].x && x <= Small.all[i].x+40 &&
                        y >= Small.all[i].y+70 && y <= Small.all[i].y+110){

                        if(Small.all[i].b == 0 && Game.base == 1){
                            Small.all[i].b = 1;
                            Game.points += 10;
                            Game.base = 0;
                        }
                        else if(Small.all[i].b == 1 && Game.base == 1){
                            Game.points -= 10;
                            Game.base = 0;
                        }
                    }
                }
            });

        },
        layout:function(event){
            VAR.W = window.innerWidth-300;
            VAR.H = window.innerHeight-80;

            VAR.d = Math.min(VAR.W,VAR.H);
            Game.canvas.width = VAR.W;
            Game.canvas.height = VAR.H;
            Game.ctx.fillStyle = 'black';
            Game.ctx.strokSetyle = 'black';
            Game.ctx.lineWidth= 3;
            Game.ctx.lineoin = 'round';
        },
        timeCount:function(){
            if(!Game.freeze){
                if(!Game.inbase){
                    Game.time++;
                }
                document.getElementById("menu").innerHTML = "time: "+Game.time+" points: "+Game.points;;
                setTimeout(Game.timeCount,1000);
            }
        },
        shuffle:function(array) {
            var j, x, i;
            for (i = array.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = array[i];
                array[i] = array[j];
                array[j] = x;
            }
            return array;
        },
        goodShuffle:function(xs, ys, main){
            for(var i = 0; i < Small.count; i++){
                if(xs[i]/Small.count * VAR.W + Small.size >= main.x &&
                   xs[i]/Small.count * VAR.W - Small.size <= main.x + main.w &&
                   ys[i]/Small.count * VAR.H + Small.size >= main.y &&
                   ys[i]/Small.count * VAR.H - Small.size <= main.y + main.h){
                       return false;
                   }
            }
            return true;
        },
        save:function(){
            if(sessionStorage.count)
                sessionStorage.count = (Number(sessionStorage.count) + 1);
            else
                sessionStorage.count = 1;
            
            sessionStorage.setItem(
                "highscore"+sessionStorage.count, 
                "Time: " + Game.time + ", Points: " + Game.points
            );
            alert(sessionStorage.getItem("highscore"+sessionStorage.count));
            location.reload();
        },
        showScore:function(){
            document.getElementById("scores").innerHTML = "";
            for(var i = 1; i <= sessionStorage.count; i++){
                var d = document.createElement("div");
                d.innerHTML = i + ". " + sessionStorage.getItem("highscore"+i);
                document.getElementById("scores").appendChild(d);
            }
        },
        end:function(event){
            for(var i = 0; i < Small.count; i++){
                if(Small.all[i].b == 0){
                    return false;
                }
            }
            return true;
        }
    };
