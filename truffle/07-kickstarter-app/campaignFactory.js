import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const campaignFactoryContractAddress = '0xe30555B8453a86B52766dCa3336DdbCdb1340345';
const campaignFactoryContractInstance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    campaignFactoryContractAddress
);

export default campaignFactoryContractInstance;