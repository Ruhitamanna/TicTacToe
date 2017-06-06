//JS code goes here
/*var cell1=window.document.getElementBYID('cell1');
console.log(window.document.getElementBYID'cell1');
function cellClicked(event){
	event.target.innerHTML="X";
}*/
//cell1.addEven

// var turn;
// function cellclicked(event){
// event.target.innerHTML=turn?"0" : "X";
// turn!=turn;
// }

var turn;
var count=0;
var inner;
var player1 = 0;
var player2 = 0;

function cellclicked(event){

	inner = event.target.innerHTML;	

	if (!inner) {
		if (count%2==0) {event.target.innerHTML="X";}
		else{event.target.innerHTML="0";}
		count++;
		if (count>2) {CheckGame();}
	}
}

function Restart(){

	var x = document.getElementById("tictable").getElementsByTagName("td");

	for (var i = 0; i <= 8; i++) {
		x[i].innerHTML = "";		
	}

	document.getElementById("oneWon").innerHTML = player1;
	document.getElementById("twoWon").innerHTML = player2;
	document.getElementById("oneLost").innerHTML = player2;
	document.getElementById("twoLost").innerHTML = player1;
}

function CheckGame(){

	var x = document.getElementById("tictable").getElementsByTagName("td");

	if  	(x[0].innerHTML=="X" && x[1].innerHTML=="X" && x[2].innerHTML=="X" ){ alert("Player 2 Win the game");player2++;Restart();}
	else if	(x[0].innerHTML=="X" && x[3].innerHTML=="X" && x[6].innerHTML=="X" ){ alert("Player 2 Win the game");player2++;Restart();}
	else if	(x[0].innerHTML=="X" && x[4].innerHTML=="X" && x[8].innerHTML=="X" ){ alert("Player 2 Win the game");player2++;Restart();}
	else if	(x[2].innerHTML=="X" && x[5].innerHTML=="X" && x[8].innerHTML=="X" ){ alert("Player 2 Win the game");player2++;Restart();}
	else if	(x[2].innerHTML=="X" && x[4].innerHTML=="X" && x[6].innerHTML=="X" ){ alert("Player 2 Win the game");player2++;Restart();}
	else if	(x[1].innerHTML=="X" && x[4].innerHTML=="X" && x[7].innerHTML=="X" ){ alert("Player 2 Win the game");player2++;Restart();}
	else if	(x[3].innerHTML=="X" && x[4].innerHTML=="X" && x[5].innerHTML=="X" ){ alert("Player 2 Win the game");player2++;Restart();}
	else if	(x[6].innerHTML=="X" && x[7].innerHTML=="X" && x[8].innerHTML=="X" ){ alert("Player 2 Win the game");player2++;Restart();}
		

	if  	(x[0].innerHTML=="0" && x[1].innerHTML=="0" && x[2].innerHTML=="0" ){ alert("Player 1 Win the game");player1++;Restart();}
	else if	(x[0].innerHTML=="0" && x[3].innerHTML=="0" && x[6].innerHTML=="0" ){ alert("Player 1 Win the game");player1++;Restart();}
	else if	(x[0].innerHTML=="0" && x[4].innerHTML=="0" && x[8].innerHTML=="0" ){ alert("Player 1 Win the game");player1++;Restart();}
	else if	(x[2].innerHTML=="0" && x[5].innerHTML=="0" && x[8].innerHTML=="0" ){ alert("Player 1 Win the game");player1++;Restart();}
	else if	(x[2].innerHTML=="0" && x[4].innerHTML=="0" && x[6].innerHTML=="0" ){ alert("Player 1 Win the game");player1++;Restart();}
	else if	(x[1].innerHTML=="0" && x[4].innerHTML=="0" && x[7].innerHTML=="0" ){ alert("Player 1 Win the game");player1++;Restart();}
	else if	(x[3].innerHTML=="0" && x[4].innerHTML=="0" && x[5].innerHTML=="0" ){ alert("Player 1 Win the game");player1++;Restart();}
	else if	(x[6].innerHTML=="0" && x[7].innerHTML=="0" && x[8].innerHTML=="0" ){ alert("Player 1 Win the game");player1++;Restart();}
		



}