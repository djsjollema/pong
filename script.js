window.addEventListener("load",function(){ 
	var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var posX = 100;
    var stapX = 1;
    
    function drawCanvas(){
        context.clearRect(0,0,800,450);
        context.fillRect(posX,100,50,50);
        posX+= stapX;
        if(posX > 750){
            stapX = - stapX;
        };
        if(posX <0){
            stapX = - stapX;
        }
    }
    
    setInterval(drawCanvas,10);
})
