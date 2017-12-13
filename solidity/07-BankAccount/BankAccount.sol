// Need to determine which version
pragma solidity ^0.4.0;

contract BankAccount {
    
    address client;
    bool withdrawStatus;

    function BankAccount() {
        client = msg.sender;    
        withdrawStatus = false;
    }

    // We ONLY want the contract creator to be able to deposit/withdraw
    modifier ifClient {

        if (client != msg.sender) {
            revert();
        }

        // continue
        _;

    }

    // No need for any input params because this method accepts whatever value was passed when the node initiated this txn.
    // Deposit money in this contract (which represents the client)
	function depositFunds() ifClient payable {
    	
    }	

    // Send the money back to the client's address
    function withdrawFunds(uint amount) ifClient {
        if (client.send(amount)) {
            withdrawStatus = true;
        } else {
            withdrawStatus = false;
        }
    }

	// Return the balance.
    // Ideally we need to return the client's balance but since our contract 
    // is working with just 1 client, its the same as returning the balance of this smart contract itself.
    function getBalance() constant returns (uint) {
        return this.balance;
    }	    
    
}