const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


let x=0;
let y=0;
let yay=5;
let ay=1;
let score =0;
let gameRunning =true
//this is an object
//we access values like this:
//player.x
const player={
	//key:value pair
	x:200,
	y:200,
	color: 'green',
	speed:3
};

//this is also an onject
//we access values from this kind of object like this:
// keys['Arrowup']
const keys={};


//define functions
function drawRect(x,y) {
    //console.log("drawing rect");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,50,50);
 
}

function drawPlayer(){
	ctx.fillStyle=player.color;
	ctx.beginPath();
	ctx.arc(
		player.x,
		player.y,
		20,
		0,
		2*Math.PI
);
ctx.fill();
}
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

	//if (player.y ==400){
		//player.y=player.y - 400;}
	//if (player.y ==0){
               // player.y=player.y - 400;}
	//if (player.x ==400){
               // player.x=player.x - 400;}
	//if (player.x ==0){
               // player.x =player.x - 400;}
	if(player.y < 0){
		player.y= 400;}
	if(player.y > 400){
		player.y=0;}

};

function  drawScore(){
	ctx.font = "10px Arial";
	ctx.fillText(score, 10,10);
}

function animate() {

	if(gameRunning){
		

score = score+1;
//Game over?
x=x+yay;  
y=y+ay;
 drawRect(x,y);
drawScore();
drawPlayer();
movePlayer();
checkCollision();


    // TODO: Add some code here 
    //  that will change the rectangle's position


if(x>350){
yay=yay*-1;
}
if(x<0){
yay=yay*-1;
}
if(y<0){
ay=ay*-1;
}
if(y>350){
ay=ay*-1;
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
						//making the player



function handleKeyPress(e){
	//console.log(e.key);
	keys[e.key]=true;
}



//2 inputs: what type of event, afunction to call)
document.addEventListener('keydown', handleKeyPress);
document.addEventListener('keyup',(e)=>{
	console.log(e.key + " up");
	keys[e.key]=false;
});



//call our function
}
animate();
