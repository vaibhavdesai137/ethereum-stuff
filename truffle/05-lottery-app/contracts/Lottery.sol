// Need to determine which version
pragma solidity ^0.4.19;

contract Lottery {
    
    address public manager;
    address[] public players;

    modifier minAmount() {
        require(msg.value > 0.1 ether);
        _;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Lottery() public {
        manager = msg.sender;
    }

    function enter() public payable minAmount {
        players.push(msg.sender);
    }

    function pickWinner() public restricted {
        uint index = generateRandomWinner() % players.length;
        players[index].transfer(this.balance);
        players = new address[](0);
    }

    function generateRandomWinner() private view returns (uint) {
        return uint(keccak256(block.difficulty, now, players));
    }

    function getPlayers() public view returns (address[]) {
        return players;
    }
    
}