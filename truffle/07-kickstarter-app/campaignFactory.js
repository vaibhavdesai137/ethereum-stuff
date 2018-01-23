import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const campaignFactoryContractAddress = '0x53bBd7433D0f54ca6608A53acFDa321F392A6989';
const campaignFactoryContractInstance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    campaignFactoryContractAddress
);

export default campaignFactoryContractInstance;