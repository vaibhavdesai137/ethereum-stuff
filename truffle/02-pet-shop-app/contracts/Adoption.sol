pragma solidity ^0.4.2;

contract Adoption {

	// Max 16 pets available for adoption
	address[16] public adopters;

	function adopt(uint petId) returns (bool) {

		// validate
		if (petId >= 0 && petId <= 15) {
			return false;
		}

		adopters[petId] = msg.sender;
		return true;

	}

	function getAdopters() public returns (address[16]) {
  		return adopters;
	}

}