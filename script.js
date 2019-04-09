window.onload = setTimeout(message, 100);

var ba = 0;
var mo = 0;
var bt = 0;

function message(){
	alert("Man, this guy seems to like classical music... Wait a minute.")
}

//This function is responsible for displaying the fake error box.
//It's also supposed to play a sound but for unknown reasons it refuses to work.
function peepee3(el){
	if (document.getElementById("win").style.visibility = "visible"){
		//Do nothing
	}
	else if (document.getElementById("win").style.visibility = "hidden"){
		document.getElementById("one").play();
		document.getElementById("win").style.visibility = "visible";
	}
}

function peepee2(el){
	document.getElementById("win").style.visibility = "hidden";
}

function ha(el){
	window.alert("I am 𝘯𝘰𝘵 looking in there.");
}

function bach(){
	ba = 1;
	checkwin();
	
}

function motz(){
	mo = 1;
	checkwin();
}

function beet(){
	bt = 1;
	checkwin();
}

//If anything that has this function is clicked, reset all three values to 0 and run the function peepee1.
function peepee1(){
	ba = 0;
	mo = 0;
	bt = 0;
	peepee3();
}

//The function here checks if all three files have been clicked, if they are, go to the win page. If they haven't don't do anything.
//This function is assigned in the Bach, motz, and beet functions so that it does not matter which order they are clicked in.
function checkwin(){	
	if ((ba == 1) && (mo == 1) && (bt == 1)){
		document.location.href = "YES/index.html";
	}
	else {
		//Do nothing
	}
}
