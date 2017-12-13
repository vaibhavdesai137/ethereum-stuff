pragma solidity ^0.4.0;

// Same as prev example but there in depositFunds(), there is no way to return any data from SETTERS.
// i.e. there is no transaction receipt.
// But we do want to track that a deposit was made.
// We can do this using EVENTS whoch will be recorded on the blockchain.
// Thus, we'll have a historical train of records.
// EVENTS can only be invoked within setters. 
// No point in getters because the block will be erased after execution. 
// Remember, only setter blocks are stored on the blockchain.


// With events, you can then query the blockchain for all history for a partiuclar contract.
// By default, blockchain doesn't want to keep a track of history. It only cares about verifying a block.
// This is why events are available. To log records of things that have happened within the contract.

contract Events {
    
    address client;
    bool withdrawStatus;

    // Only works with setters
    event UpdateStatus(string _msg, uint _amount);
    event UserStatus(string _msg, uint _amount, address sender);

    function Events() {
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

    // Removed the modifier check so anyone can send money to this contract
    function depositFunds() payable {
        UserStatus("User has deposited some money.", msg.value, msg.sender);
    }   

    // Send the money back to the client's address.
    // Only the contract creator can with the money.
    function withdrawFunds(uint amount) ifClient {
        if (client.send(amount)) {
            UpdateStatus("User has withdrawn some money.", amount);
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