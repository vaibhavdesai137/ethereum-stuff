pragma solidity ^0.4.11;

contract Craigslist {

	// internal variables
	address seller;
	address buyer;
	string name;
	string desc;
	uint256 price;
	string status;

	// declare events
	// "indexed" <--- allows to search/filer
	event itemListedEvent(address indexed _seller, string _name, uint256 _price);
	event itemBoughtEvent(address indexed _seller, address indexed _buyer, string _name, uint256 _price);

	// get particular item, will NOT result in a txn since its constant
	function getItemDetails() public constant returns (
		address _seller,
		address _buyer,
		string _name,
		string _desc,
		uint256 _price,
		string _status) {
		return (seller, buyer, name, desc, price, status);
	}

	// sell the item, will result in a txn
	function listItem(string _name, string _desc, uint256 _price) public {
		
		seller = msg.sender;
		buyer = 0x0;
		name = _name;
		desc = _desc;
		price = _price;
		status = "Available";

		// trigger the event
		itemListedEvent(seller, name, price);
	}

	// buy the item, will result in a txn
	// payable means this function can transfer ethers
	// without payable, you cannot send value to a function
	function buyItem() payable public {
		
		// this should be a legit item to buy
		require(seller != 0x0);

		// item should still be available
		keccak256(status) == keccak256("Available");

		// buyer cannot be the seller
		require(msg.sender != seller);

		// price offered should be the price of the item
		require(msg.value == price);

		// update internal states marking the item sold
		buyer = msg.sender;
		status = "Sold";
		seller.transfer(msg.value);
		
		// trigger the event
		itemBoughtEvent(seller, buyer, name, price);
	}
	
}
