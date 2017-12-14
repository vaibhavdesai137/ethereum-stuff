// Need to determine which version
pragma solidity ^0.4.11;

contract Greetings {
    
    string message;

    function Greetings() public {
        message = "My value was set when smart contract was deployed on block chain. I am now ready to execute functions of my contract which you are doing right now";
    }

    function getGreetings() public constant returns (string) {
        return message;
    }

    function setGreetings(string _message) public {
        message = _message;
    }
    
}