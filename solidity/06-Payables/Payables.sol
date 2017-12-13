// Need to determine which version
pragma solidity ^0.4.0;

contract Payables {
    
    // Do not add payable here
    function Payables() {
        
    }

	// "payable" indicates this function is accepting money.
	// Whatever the node decided to send will reflect on this contract's balance.
	// Acts as a gatekeeper for this contract to receive funds. No code needed.
	// Also, note that this is a setter because no "constant" is provided.
	// This means this will be mined on the network and the block will be added on the chain.
	// Makes sense bcoz we do want to persist all changed on chain.
    function receiveFunds() payable {
    	
    }	

	// Return the balance.
    function getBalance() constant returns (uint) {
        return this.balance;
    }	    
    
}