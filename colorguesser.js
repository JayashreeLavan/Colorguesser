var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var difficulty = document.querySelectorAll("button");

var colors = generateRandomColors(6);
var index= generateClue(colors);
setGridColors(colors)
clickLogic();

// resetButton.addEventListener("click",function(){
// removeColor();
// var colors = generateRandomColors(6);
// var index= generateClue(colors);
// setGridColors(colors)
// clickLogic();
// });

// difficulty.addEventListener("click",function(){
// difficulty.classList.add("selected");
// });


//random number generator
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generating random colors for the array
function generateRandomColors(gridsize){
	var arr = [];
	for(var i =0; i<gridsize;i++){
		var R =getRandomIntInclusive(0,255);
		var G =getRandomIntInclusive(0,255);
		var B =getRandomIntInclusive(0,255);
		arr[i] = "rgb(" +R+ ", " +G+", "+B+")";
	}
	return arr;
}

//generating hint
function generateClue(colorsArray){
	var hint =getRandomIntInclusive(0,5);
	document.getElementById("hint").innerHTML = colorsArray[hint];
	return hint;
}

//set square to array colors
function setGridColors(colorsArray){
	for (var i =0 ; i<squares.length;i++){
		//assigning the colors to the squares
		squares[i].style.backgroundColor = colorsArray[i];
	}
}

//what happens when the squares are clicked!
function clickLogic(){
	
	for (var i =0 ; i<squares.length;i++){
		//checking if the guess si correct
		squares[i].addEventListener("click",function(){
		if(this.style.backgroundColor===colors[index]){
			document.getElementById("message").innerHTML = "Yay! Good Job!!";
			changeColor(this.style.backgroundColor);
		}
		else{
			this.style.backgroundColor = "#232323";
			document.getElementById("message").innerHTML = "Try Again!";
		}
		});
	}
}

//change color of squares and jumbotron to the correct answer
function changeColor(color){
	for (var i =0 ; i<squares.length;i++){
	//assigning the correct color to the squares
	squares[i].style.backgroundColor = color;
	}
	//assigning the correct color to the jumbotron
	var jumbotron = document.querySelector(".jumbotron");
	jumbotron.style.background = color;
}

function removeColor(){
	var jumbotron = document.querySelector(".jumbotron");
	jumbotron.style.background = "steelblue";
}