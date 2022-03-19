// VARIABLES AT THE TOP
let options = 
	["blackmask","pinksoldier","456"];
let computerchoice;
let userchoice;
let result, buttons;

// FUNCTIONS AFTER VARIABLES
function makeComputerChoice(){
	console.log("Computer was",computerchoice);
	return computerchoice = Math.floor( Math.random() * options.length );   
}
/* Dont need this part, just to see what computer is doing
function showComputerChoice(){
	document.write(options[computerchoice])
}
makeComputerChoice ();
showComputerChoice ();
===== END of testing======*/
function makeUserChoice(choice){
	makeComputerChoice();// makeComputerChoice when user made a choice
	userchoice = choice; 
	//  show the options in console
	console.log(
		options[userchoice],
		"vs",
		options[computerchoice]
	);
	//  show the options on the document
	result.innerHTML =
		"<div id='flex'><img src='images/"+"squidgame_"+
			options[userchoice]+".svg'>"+
		"<h2 class='vs_result'>VS</h2>"+ "<img src='images/"+"squidgame_"+
			options[computerchoice]+".svg'></div>";

	makeGameResult();
}
function makeGameResult(){
	let resultstring = "";
	if(userchoice == computerchoice) {
		console.log("It's a tie. You survived this round!");
		resultstring="<div class='description_result'>It's a tie. You survived this round!</div>";
	}
	else if(
		(userchoice == 0 && computerchoice == 1) || 
        (userchoice == 1 && computerchoice == 2) || 
        (userchoice == 2 && computerchoice == 0) 
		) {
		console.log("Oops, you're eliminated!");
		resultstring="<div class='description_result'>Oops, you're eliminated!</div>";
	}
	else if( 
		(userchoice == 0 && computerchoice == 2) ||
        (userchoice == 1 && computerchoice == 0) ||
        (userchoice == 2 && computerchoice == 1)
        
		) {
		console.log("Congrats, you won 45.6 billion won!");
		resultstring="<div class='description_result'>Congrats, you won 45.6 billion won!</div>";
	}

	result.innerHTML += 
		resultstring+
		"<div><button onclick='showOptions()' class='btn_result'>Would You Like to Play Again?</button></div>";
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


// model view controller MVC

// Everything is set up ready to go. Let the browser display your buttons. By default, showOptions() will display buttons and hide the result.
// Since we put our js on top, we need to add onload 
window.onload = function() {
	result = document.querySelector("#squidgame_result");
	buttons = document.querySelector("#squidgame_buttons");
    document.querySelector(".btn_blackmask").addEventListener("click", function(){makeUserChoice(0);}, false)
    document.querySelector(".btn_pinksoldier").addEventListener("click", function(){makeUserChoice(1);}, false)
    document.querySelector(".btn_456").addEventListener("click", function(){makeUserChoice(2);}, false)
}
