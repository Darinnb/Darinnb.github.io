function f(x,y){
const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
ctx.fillstyle = "red";
ctx.beginPath();
ctx.arc(x,y,25,0,2*Math.PI);	
ctx.stroke();
ctx.fill();
}

f(200,40);
f(130,100);
