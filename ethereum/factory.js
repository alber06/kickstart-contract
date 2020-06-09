import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x82d7E0CDa51315b29680da38e1b66aC82b1D5685'
);

export default instance;
