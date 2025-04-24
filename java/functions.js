const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");


ctx.fillStyle = "blue";
ctx.fillRect(0,0,400,400);

ctx.fillStyle = "white";
ctx.fillRect(0,300,400,100);

function f(x,y,r){
ctx.beginPath();
ctx.arc(x,y,r,0,2*Math.PI);	
ctx.stroke();
ctx.fill();
}

function snow(x,y){
f(x,y,25);
f(x,y+50,40);
f(x,y+110,55);
}

function sqr(x,y){
ctx.fillStyle = "green";
ctx.fillRect(x,y,40,40);
}
function stair(x,y){
sqr(x,y,40,40);
sqr(x+41,y-41,40,40);
sqr(x+82,y-82,40,40);
}
stair(30,260);
stair(130,260);
stair(260,100);
