// Need to determine which version
pragma solidity ^0.4.0;

// Same as prev example but if we have LOTS of functions then it becomes messy to add the if (issuer) check everywhere.
// This example achieves the same in a simpler way using the "modifier" keyword.
contract Modifiers {
    
    string text = "Original Text";
    address issuer;

    function Modifiers() {
        issuer = msg.sender;
    }

    // Think of this as middleware in Node.
    modifier ifIssuer() {

        // Unfortunately, we lost the ability to send custom error msgs back.
        // Will be available with newer solidity versions.
        if (issuer != msg.sender) {
            revert();
        }

        // Continue with regular flow.
        _;
    }


	function getText() constant returns (string) {
    	return text;
    }	

    function setText(string _text) ifIssuer returns (string) {
        text = _text;
        return "You created the contract so allowing to change state.";
    }	    
    
}