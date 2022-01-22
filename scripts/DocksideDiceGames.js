function enterBankroll() {
	let initialBankroll = parseInt(document.getElementById("bankroll").value);
	document.getElementById("currentBankroll").innerHTML = initialBankroll;
}

function rand(m, n) {
	return m + Math.floor((n - m + 1)*Math.random());
}

const allFaces = ["crown", "anchor", "heart", "spade", "club", "diamond"];

function randFace() {
	return allFaces[rand(0,5)];
}
// , crownBet, anchorBet, heartBet, spadeBet, clubBet, diamondBet
function playCAA() {

// let totalBetCAA = document.getElementById("").submit(); //fix this

	// bets from form
	let formCrownBet = parseInt(document.getElementById("crownBet").value);
	let formAnchorBet = parseInt(document.getElementById("anchorBet").value);
	let formHeartBet = parseInt(document.getElementById("heartBet").value);
	let formSpadeBet = parseInt(document.getElementById("spadeBet").value);
	let formClubBet = parseInt(document.getElementById("clubBet").value);
	let formDiamondBet = parseInt(document.getElementById("diamondBet").value);
	// place bets
	let bets = {
		crown: formCrownBet,
		anchor: formAnchorBet,
		heart: formHeartBet,
		spade: formSpadeBet,
		club: formClubBet,
		diamond: formDiamondBet
	};

	let totalBetCAA = 0;
	for(let i=0; i < allFaces.length; i++) {
		let face = allFaces[i];
		if(Number.isInteger(bets[face])) {
			totalBetCAA = totalBetCAA + bets[face];
		}
	}

	let currentBankrollCAA = parseInt(document.getElementById("currentBankroll").innerHTML);
	if (currentBankrollCAA < totalBetCAA) {
		alert("Not enough funds!");
		return
}

	let wonBets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };

	console.log('\tbets: ' +
		Object.keys(bets).map(face => `${face}: ${bets[face]}`).join(', ') + ` (total: ${totalBetCAA})`);
	
	// roll dice
	const hand = [];

	for(let roll = 0; roll < 3; roll++) {
		hand.push(randFace());
	}
	document.getElementById("CAAresult1").innerHTML = `\tDice rolls: ${hand.join(', ')}`;

	// collect winnings
	let winningsCAA = 0;
	for(let die=0; die < hand.length; die++) {
		let face = hand[die];
		if(bets[face] > 0) {
			winningsCAA = winningsCAA + bets[face];
			wonBets[face]++
		}
	}
	
	for(let i=0; i < allFaces.length; i++) {
		let face = allFaces[i];
		if(wonBets[face] > 0) { winningsCAA = winningsCAA + bets[face]};
	}
	// Winnings collected

	
	let netWinningsCAA = winningsCAA - totalBetCAA;
	currentBankrollCAA = currentBankrollCAA + netWinningsCAA;

	if(netWinningsCAA > 0) {
		document.getElementById("CAAresult2").innerHTML = "You won!";
	} else if(netWinningsCAA < 0) {
		document.getElementById("CAAresult2").innerHTML = "You lost!";
	} else {
		document.getElementById("CAAresult2").innerHTML = "You broke even";
	}
	document.getElementById("CAAresult3").innerHTML = `Net gain: ${netWinningsCAA}g`;
	document.getElementById("currentBankroll").innerHTML = currentBankrollCAA;
}

function dragonDiceRolls_Player() {
	let totalRoll = 0;
	let d4 = rand(1, 3);
	let d6 = rand(1, 6);
	let d8 = rand(1, 8);
	let d10 = rand(1, 10);
	totalRoll = d4 + d6 + d8 + d10;
	return [totalRoll, d4, d6, d8, d10];
}

function dragonDiceRolls_Bank() {
	let totalRoll = 0;
	let d4 = rand(1, 4);
	let d6 = rand(2, 6);
	let d8 = rand(1, 8);
	let d10 = rand(2, 10);
	totalRoll = d4 + d6 + d8 + d10;
	return [totalRoll, d4, d6, d8, d10];
}

function playDragonDice() {
	let currentBankrollDD = parseInt(document.getElementById("currentBankroll").innerHTML);
	let playerBetDD = parseInt(document.getElementById("DDBet").value);
	if (currentBankrollDD < playerBetDD) {
		alert("Not enough funds!");
		return
}
	currentBankrollDD = currentBankrollDD - playerBetDD;

	winningsDD = 0;
	let winnerResult = "";
	let bankRolls = dragonDiceRolls_Bank();
	let playerRolls = dragonDiceRolls_Player();
	let resultBank = bankRolls.shift();
	let resultPlayer = playerRolls.shift();
	if(resultBank > resultPlayer) {
		winnerResult = `Bank wins!\nYou lost ${playerBetDD} gold!`;
	} else if(resultPlayer > resultBank) {
		winningsDD = playerBetDD * 2;
		winnerResult = `Player wins!\nYou won ${playerBetDD} gold!`;
	} else {
		winnerResult = "Result is a tie!";
		winningsDD = playerBetDD;
	}
	currentBankrollDD = currentBankrollDD + winningsDD;

	let displayResultText = 
		`The bank's roll is ${resultBank}! (Rolls: ${bankRolls}). The player's roll is ${resultPlayer}! (Rolls: ${playerRolls}).`;
	let displayWinnerText = winnerResult;

	document.getElementById("DDResult1").innerHTML = displayResultText;
	document.getElementById("DDResult2").innerHTML = displayWinnerText;
	document.getElementById("currentBankroll").innerHTML = currentBankrollDD;
	
}