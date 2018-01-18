// Need to determine which version
pragma solidity ^0.4.19;

contract NumberStore {
    
    uint number;
    
    // Invoked when deployed and created the 1st time ONLY
    function NumberStore() public {
        number = 100;
    }
    
    // Will incur gas
    function getTheNumber() public constant returns (uint) {
        return number;
    }
    
    // Will incur gas
    function setTheNumber(uint _number) public {
        number = _number;
    }
    
    // Will incur gas
    function incrementTheNumber() public {
        number++;
    }
    
    // Will incur gas
    function decrementTheNumber() public {
        number--;
    }
    
}