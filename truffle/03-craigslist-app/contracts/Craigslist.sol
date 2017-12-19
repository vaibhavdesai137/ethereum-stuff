pragma solidity ^0.4.11;

contract Craigslist {

	// internal variables
	address seller;
	string name;
	string desc;
	uint256 price;

	// declare events
	// "indexed" <--- allows to search/filer based on seller
	event listItemEvent(address indexed _seller, string _name, string _desc, uint256 _price);

	// list the item, will result in a txn
	function listItem(string _name, string _desc, uint256 _price) public {
		
		seller = msg.sender;
		name = _name;
		desc = _desc;
		price = _price;

		// trigger the event
		listItemEvent(seller, name, desc, price);
	}

	// get particular item, will NOT result in a txn since its constant
	function getItem() public constant returns (
	address _seller,
		string _name,
		string _desc,
		uint256 _price) {
		return (seller, name, desc, price);
	}
}
