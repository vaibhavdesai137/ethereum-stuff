pragma solidity ^0.4.11;

contract Owned {

	// contract owner
	address owner;
	
	// modifiers
	modifier onlyOwner() {
		
		// anyone other than owner will be rejected
		require(msg.sender == owner);

		// Continue if all above validations pass
		_;
	}

	// constructor to set the contract owner
	function Owned() {
		owner = msg.sender;
	}

	// deactivate the contract
	// only contract owner can deactivate
	function kill() onlyOwner {
		// all remaining funds owned by this contract will be transferred to the "owner"
		selfdestruct(owner);
	}
	
}
