import web3 from '../blockchain/web3.js';
import PeoplePowerToken from '../blockchain/build/contracts/PeoplePowerToken.json';
import PeoplePowerTokenSale from '../blockchain/build/contracts/PeoplePowerTokenSale.json';

const peoplePowerTokenSale = new web3.eth.Contract(
    PeoplePowerTokenSale.abi, 
    PeoplePowerTokenSale.networks[77].address);

const peoplePowerToken = new web3.eth.Contract(
    PeoplePowerToken.abi, 
    PeoplePowerToken.networks[77].address);

export default {
    ppt: peoplePowerToken,
    ppts: peoplePowerTokenSale
}
