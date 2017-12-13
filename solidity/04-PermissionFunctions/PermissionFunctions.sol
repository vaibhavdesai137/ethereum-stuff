// Need to determine which version
pragma solidity ^0.4.0;

// For this example, we only want the CREATOR to be able to change state.
contract PermissionFunctions {
    
    string text = "Original Text";
    address issuer;

    // Constructor, called ONLY ONCE when contract is created.
    // Every time a txn is issued, an inbuilt "msg" is passed by the network.
    // msg.sender is the originator
    function Modifiers() {
        issuer = msg.sender;
    }

	function getText() constant returns (string) {
    	return text;
    }	

    // Note that everytime a txn is initiated, the "msg" object will be available with "sender" as the address of the node that initiated it.
    function setText(string _text) returns (string) {

        if (issuer != msg.sender) {
            return "You did not create the contract so NOT allowing to change state.";
        }

    	text = _text;
        return "You created the contract so allowing to change state.";
    }

    // Can be initiated by any node irrespective of which node created the contract.
    function setWhatever(string _text) returns (string) {
        return "Foo";
    }	    
    
}