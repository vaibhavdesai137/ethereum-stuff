// Need to determine which version
pragma solidity ^0.4.19;

contract HelloWorld {
    
    // This will not be available for others to call on the network.
    // You will need some methods that get/set this variable.
    string greeting = "Hello World";

    // Executing this triggers a txn on blockchain. Incurs gas.
    function getGreeting1() public returns (string) {
        return greeting;
    }   

    // Since the above is just a getter, it doesn't make sense to initiate a txn on the blockchain.
    // So the best practise is to use "constant" in the function declaration.
    // EVM will destroy the block every time after executing this function.
    // No blocks will be added to the block chain.
    // Makes sense bcoz if we are simply viewing the contract, we shouldn't have to pay for it.
    function getGreeting2() public constant returns (string) {
        return greeting;
    }

    // New block will be created, txn will be initiated and after execution, block will be added to the chain. Incurs gas. 
    // Make sense because we are making the network change the state of contract and so this needs to be persisted on the blockchain.
    function setGreeting(string _greeting) public returns (string) {
        greeting = _greeting;
        return greeting;
    }       
    
}