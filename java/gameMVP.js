const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
 
//canvas
ctx.fillStyle = 'white';
    ctx.fillRect(0,0,400,400);


let score = 0;
let highScore = 0; 
let gameRunning =true;
const keys={};
//remebering my player
const player={
        //key:value pair
        x:200,
        y:200,
        speed:5
};

const listOfBalls = [
	{x:0, y:200, xspeed:.2, yspeed: 6},
	{x:100, y:3,xspeed:.1,yspeed:4}
]

function addNewBall(){
	listOfBalls.push({
	x:Math.random()*400,
	y:0,
	xspeed: (Math.random()*12)-6,
	yspeed: Math.random()*6
});
}

function moveAllBalls(){
	listOfBalls.forEach((b) => {b.x += b.xspeed;  b.y+=b.yspeed})
}
function drawAllBalls(){
listOfBalls.forEach((b) => {shooter(b.x,b.y)});
}

//background
function background(){
ctx.fillStyle = "#A0DDFF";
    ctx.fillRect(0,0,400,400);}
//road
function road (){
ctx.fillStyle = "black";
    ctx.fillRect(0,350,400,400);
}
//yellowRoadMark
function yellowRoadMark(x){
ctx.fillStyle = "yellow";
    ctx.fillRect(x,370,40,15);
}
//mainguy
function drawPlayer(){
x=player.x;
y=player.y;
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
function reset(){
listOfBalls.splice(0,listOfBalls.length)
frame = 0;
score = 0;
if (!gameRunning) {
gameRunning = true;
animate();
}
}


function allOfIt (){
background();
cloud(45,65);
cloud(290,48);
road();
yellowRoadMark(0);
yellowRoadMark(57);
yellowRoadMark(114);
yellowRoadMark(171);
yellowRoadMark(228);
yellowRoadMark(285);
yellowRoadMark(342);
yellowRoadMark(399);

}

//now im getting things to GOOO
function movePlayer(){
	//iplayer.x+=player.speed;
	if(keys['ArrowDown']&&
		player.y < 390){	
	player.y += player.speed;}
	if (keys['ArrowUp']&&
		player.y >0){
		player.y -= player.speed;}
	if (keys['ArrowLeft']&&
		player.x > 0){
		player.x -= player.speed;}
	if (keys['ArrowRight'] &&
		player.x < 390){
		player.x += player.speed;}	

}
//score
function  drawScore(){
        ctx.fillStyle = "black";
	ctx.font = "15px Arial";
	ctx.fillText(score, 10,15);
}
//so this is huge
let frame = 0;
function animate() {
	if(gameRunning){
		ctx.clearRect(0,0,400,400);
		frame++;
		allOfIt();
		drawScore();
		drawPlayer();
		movePlayer();
		moveAllBalls();
		drawAllBalls();
		if (frame % 60 == 0) {
			for (let i = 0; i < frame/60; i++) addNewBall();
			score++;
		}
		checkCollision();
		if (score > highScore) highScore = score;
		requestAnimationFrame(animate);
	}
}
function checkCollision(){
//does player touch box? using AABB
//make hlper variables
	listOfBalls.forEach((b) => {
		let box_min_x =b.x-7;
		let box_min_y =b.y-7;
		let box_max_x =b.x+7;
		let box_max_y =b.y+7;

		let player_min_x = player.x;
		let player_min_y = player.y-8;
		let player_max_x = player.x+20;
		let player_max_y = player.y+20;

		if (box_max_y > player_min_y &&
			box_min_y < player_max_y &&
			box_max_x > player_min_x &&
			box_min_x < player_max_x){
			gameRunning = false;
		}
	});
}


function handleKeyPress(e){
	e.preventDefault();
	//console.log(e.key);
	keys[e.key]=true;
}

document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup', (e) => {
	e.preventDefault();
	keys[e.key]=false;
});
document.getElementById("reset").addEventListener("click", reset);

//call stuff
animate();

