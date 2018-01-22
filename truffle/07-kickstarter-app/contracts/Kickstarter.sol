pragma solidity ^0.4.19;

contract CampaignFactory {
    
    address[] public campaigns;
    
    function createCampaign(string _title, string _desc, uint _minimumContribution) public {
        address creator = msg.sender;
        address newCampaign = new Campaign(creator, _title, _desc, _minimumContribution);
        campaigns.push(newCampaign);
    }
    
    function getAllCampaigns() public view returns (address[]) {
        return campaigns;
    } 
}

contract Campaign {
    
    struct SpendingRequest {
        uint id;
        string desc;
        uint amount;
        address recipient;
        bool complete;
        mapping(address => bool) approvers;
        uint approversCount;
    }
    
    address public creator;
    string public title;
    string public desc;
    uint public minimumContribution;
    
    // Contributors
    mapping(address => uint) public contributors;
    uint public contributorsCount;
    
    // Spending Requests
    mapping(uint => SpendingRequest) public spendingRequests;
    uint public spendingRequestsCount;
    
    modifier onlyCreator()  {
        require(msg.sender == creator);
        _;
    }
    
    modifier needsMinimumContribution()  {
        require(msg.value >= minimumContribution);
        _;
    }
    
    modifier onlyContributors()  {
        require(contributors[msg.sender] > 0);
        _;
    }
    
    modifier ifNotVotedYet(uint spendingRequestId) {
        require(spendingRequests[spendingRequestId].approvers[msg.sender] == false);
        _;
    }
    
    modifier notFinalizedAlready(uint spendingRequestId) {
        require(spendingRequests[spendingRequestId].complete == false);
        _;
    }
    
    modifier hasEnoughApprovers(uint spendingRequestId) {
        require(spendingRequests[spendingRequestId].approversCount > (contributorsCount / 2));
        _;
    }
    
    function Campaign(address _creator, string _title, string _desc, uint _minimumContribution) public {
        creator = _creator;
        title = _title;
        desc = _desc;
        minimumContribution = _minimumContribution;
    }
    
    function contribute() public payable needsMinimumContribution {
        contributors[msg.sender] = msg.value;
        contributorsCount += 1;
    }
    
    function createSpendingRequest(string _desc, uint _amount, address _recipient) public 
        onlyCreator {
        
        SpendingRequest memory newSpendingRequest = SpendingRequest({
            id: 0,
            desc: _desc,
            amount: _amount,
            recipient: _recipient,
            complete: false,
            approversCount: 0
        });
        
        spendingRequests[spendingRequestsCount] = newSpendingRequest;
        spendingRequestsCount += 1;
    }
    
    function approveSpendingRequest(uint spendingRequestId) public 
        onlyContributors 
        ifNotVotedYet(spendingRequestId) {
                
        SpendingRequest storage sr = spendingRequests[spendingRequestId];
        sr.approvers[msg.sender] = true;
        sr.approversCount += 1;
    }
    
    function finalizeSpendingRequest(uint spendingRequestId) public 
        notFinalizedAlready(spendingRequestId) 
        hasEnoughApprovers(spendingRequestId) {
        
        SpendingRequest storage sr = spendingRequests[spendingRequestId];
        sr.recipient.transfer(sr.amount);
        sr.complete = true;
    }
   
}