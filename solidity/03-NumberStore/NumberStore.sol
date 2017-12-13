// Need to determine which version
pragma solidity ^0.4.0;

contract NumberStore {
    
    uint number;
    
    // Invoked when deployed and created the 1st time ONLY
    function NumberStore() {
        number = 100;
    }
    
    // Will incur gas
    function getTheNumber() constant returns (uint) {
        return number;
    }
    
    // Will incur gas
    function setTheNumber(uint _number) {
        number = _number;
    }
    
    // Will incur gas
    function incrementTheNumber() {
        number++;
    }
    
    // Will incur gas
    function decrementTheNumber() {
        number--;
    }
    
}