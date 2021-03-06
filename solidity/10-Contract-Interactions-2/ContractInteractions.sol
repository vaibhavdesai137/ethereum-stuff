pragma solidity ^0.4.19;

// Same as prev example but called Contract's state CAN BE CHANGED
// Using the called contract's addres to get the contract will fetch the latest state from the blockchain.
contract CallingContract {

	// Use an existing contract via address. 
	// Will fetch the latest state.
	// The source code for CalledContract needs to be available even though it is invoked uing address.
	CalledContract calledContract = CalledContract(0x1526613135cbe54ee257c11dd17254328a774f4a);

	function getNumber() public constant returns (uint) {
		return calledContract.getNumber();
	}

}

contract CalledContract {

	uint number = 100;

	function CalledContract() public {
		
	}	

	function getNumber() public constant returns (uint) {
		return number;
	}
	
	function setNumber(uint _number) public {
		number = _number;
	}

}

// Create CalledContract first.
// Call getNumber() ---> 100
// Call setNumber(200)
// Call getNumber() ---> 200

// Create CallingContract.
// Call getNumber() ---> 200
// ^ this is because we used the address of CalledContract which will return the latest state from the blockchain.