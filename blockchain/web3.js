import Web3 from 'web3';

let web3 = new Web3(Web3.currentProvider || 
  new Web3(new Web3.providers.HttpProvider("https://sokol.poa.network")));

export default web3;
