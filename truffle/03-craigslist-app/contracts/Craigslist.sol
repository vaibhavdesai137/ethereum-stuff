pragma solidity ^0.4.11;

contract Craigslist {

	// custom types
	// syntactic sugar, evm does not understand structs
	struct Item {
		uint id;
		address seller;
		address buyer;
		string name;
		string desc;
		uint256 price;
		string status;
	}
	
	// all items
	// we need an explicit counter since there is no iteration allowed on mappings
	// also it helps to check which item ids are invalid
	// for example: if 10 items, counter will be 10
	// this means we know that any item id > 10 is invalid
	// also since "items" is public, evm will create a getter by default
	mapping(uint => Item) public items;
	uint itemCount;

	// declare events
	// "indexed" <--- allows to search/filer
	event itemListedEvent(uint indexed _id, address indexed _seller, string _name, uint256 _price, string _status);
	event itemBoughtEvent(uint indexed _id, address indexed _seller, address indexed _buyer, string _name, uint256 _price, string _status);

	// sell the item, will result in a txn
	function listItem(string _name, string _desc, uint256 _price) public {
		
		// increment item count
		itemCount++;

		// create new item and put it on our map
		items[itemCount] = Item(itemCount, msg.sender, 0x0, _name, _desc, _price, "Available");

		// trigger the event
		itemListedEvent(itemCount, msg.sender, _name, _price, "Available");
	}

	// buy the item, will result in a txn
	// payable means this function can transfer ethers
	// without payable, you cannot send value to a function
	function buyItem(uint _id) payable public {
		
		// need to have atleast one item to buy
		require(itemCount > 0);

		// check if the item exists
		require(_id > 0 && _id <= itemCount);

		// retrieve the item from the map
		// "storage" is default for custom types
		// it keeps the state locally in contract for this execution
		Item storage item = items[_id];

		// item should still be available
		require(keccak256(item.status) == keccak256("Available"));

		// buyer cannot be the seller
		require(msg.sender != item.seller);

		// price offered should be the price of the item
		require(msg.value == item.price);

		// update internal states marking the item sold
		item.buyer = msg.sender;
		item.status = "Sold";
		item.seller.transfer(msg.value);
		
		// trigger the event
		itemBoughtEvent(_id, item.seller, item.buyer, item.name, item.price, item.status);
	}

	// helper
	// constant so no txn and no gas
	function getItemCount() public constant returns (uint) {
		return itemCount;
	}

	// helper
	// constant so no txn and no gas
	function getItemsOnSale() public constant returns (uint[]) {
		
		// need to have atleast one item listed
		if (itemCount == 0) {
			return new uint[](0);
		}

		// output array
		// max size = item count
		// "memory" tells EVM to not put this on storage since storage is expensive
		// by default evm uses "storage" for all structs, arrays, etc.
		// so we explicitly set it to "memory"
		uint[] memory itemIds = new uint[](itemCount);

		// iterate over all items
		uint forSaleItemCount = 0;
		for (uint i = 1; i <= itemCount; i++) {

			// we only need ones that are not sold yet
			if (keccak256(items[i].status) == keccak256("Available")) {
				itemIds[forSaleItemCount] = items[i].id;
				forSaleItemCount++;
			}
		}

		// our itemIds array size can be smaller than total item count because some items would have sold
		// we don't want to return an array with extra empty elements
		// so copy over to a smaller array and return that
		uint[] memory forSaleItemIds = new uint[](forSaleItemCount);
		for (uint j = 0; j < forSaleItemCount; j++) {
			forSaleItemIds[j] = itemIds[j];
		}

		return (forSaleItemIds);
	}
	
}
