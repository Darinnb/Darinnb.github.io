const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
 
//canvas
ctx.fillStyle = 'white';
    ctx.fillRect(0,0,400,400);
//background
ctx.fillStyle = "#A0DDFF";
    ctx.fillRect(0,0,400,400);



 let x=0;
 let y=0;
 let score =0;
 let gameRunning =true
const keys={};
//remebering my player
const player={
        //key:value pair
        x:200,
        y:200,
        speed:3
};






//road
ctx.fillStyle = "black";
    ctx.fillRect(0,350,400,400);
//yellowRoadMark
function yellowRoadMark(x){
ctx.fillStyle = "yellow";
    ctx.fillRect(x,370,40,15);
}
//mainguy
function drawPlayer(x,y){
ctx.fillStyle = "pink";
    ctx.fillRect(x,y,20,20);

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.moveTo(x,y-8);
ctx.lineTo(x+5,y);
ctx.lineTo(x,y);
ctx.lineTo(x,y-8);
ctx.fill();
ctx.strokeStyle="blue";
ctx.stroke();


ctx.fillStyle = "blue";
ctx.beginPath();
ctx.moveTo(x+5,y-8);
ctx.lineTo(x+10,y);
ctx.lineTo(x+5,y);
ctx.lineTo(x+5,y-8);
ctx.fill();
ctx.strokeStyle="blue";
ctx.stroke();

ctx.fillStyle = "blue";
ctx.beginPath();
ctx.moveTo(x+10,y-8);
ctx.lineTo(x+15,y);
ctx.lineTo(x+10,y);
ctx.lineTo(x+10,y-8);
ctx.fill();
ctx.strokeStyle="blue";
ctx.stroke();


ctx.fillStyle = "blue";
ctx.beginPath();
ctx.moveTo(x+15,y-8);
ctx.lineTo(x+20,y);
ctx.lineTo(x+15,y);
ctx.lineTo(x+15,y-8);
ctx.fill();
ctx.strokeStyle="blue";
ctx.stroke();

ctx.beginPath();
ctx.arc(x+5,y+5,1, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.strokeStyle="black";
ctx.stroke();

ctx.beginPath();
ctx.arc(x+13,y+5,1, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();
ctx.strokeStyle="black";
ctx.stroke();

ctx.fillStyle = "red";
    ctx.fillRect(x+6,y+10,10,2);

}
function shooter(x,y){
ctx.beginPath();
ctx.arc(x, y, 7, 0, 2 * Math.PI);
ctx.fillStyle = "lime";
ctx.fill();
ctx.strokeStyle="orange";
ctx.stroke();
}
//clouds
function cloud(x,y){
ctx.beginPath();
ctx.arc(x, y, 23, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.strokeStyle="black";
ctx.stroke();

ctx.beginPath();
ctx.arc(x+28, y-16, 23, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.strokeStyle="black";
ctx.stroke();

ctx.beginPath();
ctx.arc(x+22, y+16, 23, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.strokeStyle="black";
ctx.stroke();

ctx.beginPath();
ctx.arc(x+57, y+10, 23, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.strokeStyle="black";
ctx.stroke();
}
//now im getting things to GOOO
function movePlayer(){
	//player.x+=player.speed;
	if(keys['ArrowDown']){
		player.y += player.speed;}
	if (keys['ArrowUp']){
		player.y -= player.speed;}
	if (keys['ArrowLeft']&&
		player.x >0){
		player.x -= player.speed;}
	if (keys['ArrowRight'] &&
		player.x < 400){
		player.x += player.speed;}	
}
//score
function  drawScore(){
        ctx.fillStyle = "black";
	ctx.font = "5px Arial";
	ctx.fillText(score, 10,10);
}
//so this is huge
function animate() {
	if(gameRunning){
ctx.clearRect(0,0,400,400);
score = score+1;
drawScore();
drawPlayer(player.x, player.y);
movePlayer();
checkCollision();
}}
function checkCollision(){
//does player touch box? using AABB
//make hlper variables

let box_min_x =x-50;
let box_min_y =y-50;
let box_max_x =x+50;
let box_max_y =y+50;

let player_min_x = player.x-20;
let player_min_y = player.y-20;
let player_max_x = player.x+20;
let player_max_y = player.y+20;

if (box_max_y > player_min_y &&
	box_min_y < player_max_y &&
	box_max_x > player_min_x &&
	box_min_x < player_max_x){
	gameRunning = false;}
    requestAnimationFrame(animate);
}
function handleKeyPress(e){
	//console.log(e.key);
	keys[e.key]=true;
}
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup',(e)=>{
	console.log(e.key + " up");
	keys[e.key]=false;
});



//call stuff
cloud(45,65);
cloud(290,48);
yellowRoadMark(0);
yellowRoadMark(57);					
yellowRoadMark(114);
yellowRoadMark(171);
yellowRoadMark(228);
yellowRoadMark(285);
yellowRoadMark(342);
yellowRoadMark(399);
animate();

