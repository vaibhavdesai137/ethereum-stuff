import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const campaignFactoryContractAddress = '0xf4FaFeeC4C90172a0662a4BD5c1987741B78ADB3';
const campaignFactoryContractInstance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    campaignFactoryContractAddress
);

export default campaignFactoryContractInstance;