let options = ["luxurygoods","people","socialmedia"];
let computerchoice;
let userchoice;
let result, buttons;

function makeComputerChoice(){
	return computerchoice = Math.floor( Math.random() * options.length );   
}
function makeUserChoice(choice){
	makeComputerChoice();
	userchoice = choice; 
	result.innerHTML =
		"<div id='flex'><img src='images/fashionistaworld_" + options[userchoice] + ".jpg'>" +
		"<h2 class='vs_result'>VS</h2>" + 
		"<img src='images/fashionistaworld_" + options[computerchoice] + ".jpg'></div>";
	makeGameResult();
}
function makeGameResult(){
	let resultstring = "";
	if(userchoice == computerchoice) {
		resultstring = "<div class='description_result'>It's a tie. You survived this round!</div>";
	} else if ((userchoice == 0 && computerchoice == 1) 
		|| (userchoice == 1 && computerchoice == 2) 
		|| (userchoice == 2 && computerchoice == 0) ) {
		resultstring= "<div class='description_result'>Oops, you're eliminated!</div>";
	} else if((userchoice == 0 && computerchoice == 2) 
		|| (userchoice == 1 && computerchoice == 0) 
		|| (userchoice == 2 && computerchoice == 1)) {
		console.log("Congrats, you won 45.6 billion won!");
		resultstring = "<div class='description_result'>Congrats, you won 45.6 billion won!</div>";
	}

	result.innerHTML += resultstring + "<div><button onclick='showOptions()' class='btn_result'>Would You Like to Play Again?</button></div>";
	showResults();
}
//Show and hide the 3 buttons. When showing results, show play agian button; Click play button, show three options.
function showOptions(){
	buttons.style.display = "block";
	result.style.display = "none";
}
function showResults(){
	buttons.style.display = "none";
	result.style.display = "block";
}


window.onload = function() {
	result = document.querySelector("#fashionistaworld");
	buttons = document.querySelector("#desert_buttons");
    document.querySelector(".btn_luxurygoods").addEventListener("click", function(){makeUserChoice(0);}, false)
    document.querySelector(".btn_people").addEventListener("click", function(){makeUserChoice(1);}, false)
    document.querySelector(".btn_socialmedia").addEventListener("click", function(){makeUserChoice(2);}, false)
}
