window.onload = setTimeout(message, 100);

var ba = 0;
var mo = 0;
var bt = 0;

function message(){
	alert("Man, this guy seems to like classical music... Wait a minute.")
}

function peepee1(el){
	if (document.getElementById("win").style.visibility = "visible"){
	
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
	console.log(ba, mo, bt, win)
}

function motz(){
	mo = 1;
	checkwin();
}

function beet(){
	bt = 1;
	checkwin();
}

function other(){
	ba = 0;
	mo = 0;
	bt = 0;
	peepee1();
}

function checkwin(){	
	if ((ba == 1) && (mo == 1) && (bt == 1)){
		document.location.href = "YES/index.html";
	}
	else {
		
	}
}
