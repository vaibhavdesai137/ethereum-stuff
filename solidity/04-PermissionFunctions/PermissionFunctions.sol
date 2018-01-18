// Need to determine which version
pragma solidity ^0.4.19;

// For this example, we only want the CREATOR to be able to change state.
contract PermissionFunctions {
    
    string text = "Original Text";
    address issuer;

    // Constructor, called ONLY ONCE when contract is created.
    // Every time a txn is issued, an inbuilt "msg" is passed by the network.
    // msg.sender is the originator
    function PermissionFunctions() public {
        issuer = msg.sender;
    }

    function getText() public constant returns (string) {
        return text;
    }   

    // Note that everytime a txn is initiated, the "msg" object will be available with "sender" as the address of the node that initiated it.
    function setText(string _text) public {

        if (issuer != msg.sender) {
            return;
        }

        text = _text;
        
        // Cannot return anything from a function that changes state
        // This is becoz by default the txnhash has to be returned
        // return "You created the contract so allowing to change state.";
    }

    // Can be initiated by any node irrespective of which node created the contract.
    function getWhatever() public constant returns (string) {
        return "Foo";
    }       
    
}