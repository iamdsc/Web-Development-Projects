var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector("#reset");
var modebtns = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeBtns();
	setUpSquares();
	reset();
}

function setUpModeBtns(){
	for(var i=0;i<modebtns.length;i++){
	modebtns[i].addEventListener("click",function(){
		modebtns[0].classList.remove("selected");
		modebtns[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
	}
}

function setUpSquares(){
	for(var i=0;i<squares.length;i++){
	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetbtn.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#232323";
             messageDisplay.textContent="Try Again!";
			}
		});
	}
}

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelBlue";
	messageDisplay.textContent="";
	resetbtn.textContent = "New Colors";	
}

resetbtn.addEventListener("click",function(){
	reset();
});

function changeColors(color){
	//loop through all aquares
	for(var i=0;i<squares.length;i++){
	//change each color to given color
	squares[i].style.backgroundColor = color;
	}
}
 
//For picking random colors from array   
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//To generate random colors array
function generateRandomColors(num){
	//Make an array
	var arr = [];
	//repeat num times
	for(var i=0;i<num;i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

//To generate a random color
function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}
