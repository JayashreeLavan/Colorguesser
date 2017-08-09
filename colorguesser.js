var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("hint");
var message = document.getElementById("message");
var headerDisplay =document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
// var modeButtons = document.querySelectorAll(".mode");

var gridSize =6;
var colors = generateGridColors(gridSize);
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;


// for(var i =0;i<modeButtons.length;i++){
// 	modeButtons[i].addEventListener("click",function(){
// 		modeButtons[0].classList.remove("selected");
// 		modeButtons[1].classList.remove("selected");
// 		this.classList.add("selected");


		
// 	})
// }



resetButton.addEventListener("click",function(){
	
	buttonClick(gridSize);
	
	for(var i=0;i< squares.length;i++){
		squares[i].style.background = colors[i];
	}
});

easy.addEventListener("click",function(){
	gridSize = 3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	buttonClick(gridSize);
	
	for(var i=0;i< squares.length;i++){
		if(colors[i]){
		squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
});

hard.addEventListener("click",function(){
	gridSize = 6;
	hard.classList.add("selected");
	easy.classList.remove("selected");
	buttonClick(gridSize);

	for(var i=0;i< squares.length;i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

	for(var i=0;i< squares.length;i++){
		squares[i].style.background = colors[i];
		squares[i].addEventListener("click",function(){

			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor){
				message.textContent = "Correct!";
				var clickedColor = this.style.backgroundColor;
				changeColorsWhenCorrect(clickedColor);
			}else{
				this.style.backgroundColor = "#232323";
				message.textContent = "Uh Oh! Try Again";
			}
		})
	}

function buttonClick(gridSize){
	headerDisplay.style.backgroundColor = "steelblue";
	resetButton.textContent ="New Game";
	colors = generateGridColors(gridSize);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	message.textContent = " ";
}

function generateGridColors(num){
	var arr = [];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	var color = "rgb(" + red + ", " + green + ", " + blue + ")";
 	return color;
}

function pickColor(){
	var random = Math.floor((Math.random() * colors.length ));
	return colors[random];
}

function changeColorsWhenCorrect(color){
	for(var i=0;i< colors.length;i++){
		squares[i].style.backgroundColor = color;
	}
	headerDisplay.style.backgroundColor = color;
	resetButton.textContent ="Play Again?";
}
