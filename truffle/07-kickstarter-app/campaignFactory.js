import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const campaignFactoryContractAddress = '0xCC769268fC5B659d1Fe15CdD79F0008E2ab0b345';
const campaignFactoryContractInstance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    campaignFactoryContractAddress
);

export default campaignFactoryContractInstance;