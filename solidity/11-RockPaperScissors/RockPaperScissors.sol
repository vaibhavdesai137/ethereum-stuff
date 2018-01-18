pragma solidity ^0.4.19;

contract RockPaperScissors {

	mapping(string => mapping(string => int)) payoutMap;

	address player1;
	address player2;

	string player1Choice;
	bool player1Played;
	string player2Choice;
	bool player2Played;
	
	uint betAmount = 10;
    
	// Initialize the map 
	// 0 ---> draw
	// 1 ---> player 1 winner
	// 2 ---> player 2 winner
	function RockPaperScissors() public {

		payoutMap["rock"]["rock"] = 0;
		payoutMap["rock"]["paper"] = 2;
		payoutMap["rock"]["scissor"] = 1;

		payoutMap["paper"]["rock"] = 1;
		payoutMap["paper"]["paper"] = 0;
		payoutMap["paper"]["scissor"] = 2;

		payoutMap["scissor"]["rock"] = 2;
		payoutMap["scissor"]["paper"] = 1;
		payoutMap["scissor"]["scissor"] = 0;

	}

    // Allow registration only if not registered
    modifier notRegisteredYet()
    {
        if (msg.sender == player1 || msg.sender == player2)
            revert();
        else
            _;
    }
    
    // 10 wei needed to register
    modifier verifyBetAmount()
    {
        if (msg.value != betAmount)
            revert();
        else
            _;
    }

	// Only 2 players can register.
	// Both players need to register with bet money.
	function register() public 
	    notRegisteredYet 
	    verifyBetAmount 
	    payable {

		if (player1 == 0)
			player1 = msg.sender;
		else if (player2 == 0)
			player2 = msg.sender;
		else 
			revert();

	}

	function play(string choice) public returns (int) {

		if (msg.sender == player1) {
		    player1Choice = choice;
		    player1Played = true;
		} else if (msg.sender == player2) {
			player2Choice = choice;
			player2Played = true;
		} else {
			revert();
		}

		// check if both player played their move
		if (player1Played && player2Played) {

			int winner = payoutMap[player1Choice][player2Choice];

			// Pay based on the winner
			if (winner == 1) {
				player1.transfer(this.balance);
			} else if (winner == 2) {
				player2.transfer(this.balance);
			} else {
				player1.transfer(this.balance/2);
				player2.transfer(this.balance);
			}

			return winner;
		}

	}

    // Getters
    function getMyBalance() public constant returns (uint amount) {
        return msg.sender.balance;
    }
    
	function getBetAmount() public constant returns (uint) {
		return this.balance;
	}

	function isPlayer1() public constant returns (bool) {
		return msg.sender == player1;
	}

	function isPlayer2() public constant returns (bool) {
		return msg.sender == player2;
	}
	
	function didPlayer1Play() public constant returns (bool) {
		return player1Played;
	}
	
	function didPlayer2Play() public constant returns (bool) {
		return player2Played;
	}

}