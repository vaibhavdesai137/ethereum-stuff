pragma solidity ^0.4.19;

// Called Contract's state CANNOT BE CHANGED since we are creating a new called contract everytime.
contract CallingContract {

	// Will create a new contract everytime. 
	// So even if the state of the contract is modified (by calling setNumber(200) on called contract),
	// our contract will still see the value as 100.
	CalledContract calledContract = new CalledContract();

	function getNumber() public constant returns (uint) {
		return calledContract.getNumber();
	}
	
	function getMsg() public constant returns (bytes32) {
		// This will throw compilation error if getMsg from the called contract returns a string.
		return calledContract.getMsg();
	}

}

contract CalledContract {

	uint number = 100;

	// A called contract cannot return a string, only bytes
	// string msg = "Hello World";
	bytes32 msg = "Hello World";

	function CalledContract() public {
		
	}	

	function getNumber() public constant returns (uint) {
		return number;
	}
	
	function setNumber(uint _number) public {
		number = _number;
	}

	function getMsg() public constant returns (bytes32) {
		return msg;
	}

}