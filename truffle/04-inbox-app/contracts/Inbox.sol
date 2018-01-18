// Need to determine which version
pragma solidity ^0.4.19;

contract Inbox {
    
    string message;

    function Inbox(string _message) public {
        message = _message;
    }

    function getMessage() public constant returns (string) {
        return message;
    }

    function setMessage(string _message) public {
        message = _message;
    }
    
}