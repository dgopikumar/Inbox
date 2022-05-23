// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const provider = new HDWalletProvider('benefit buzz rival lab deliver omit spirit cup script refuse forum uncover',
'https://rinkeby.infura.io/v3/45fe473f52374a91992b48a31be6e904');
const web3 = new Web3(provider);

const deploy = async() =>{
  const accounts = await web3.eth.getAccounts();
  console.log("Attepting to deploy from account:",accounts[0]);
  //const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({data:bytecode, arguments:['Hi there!']})
  //.send({from:accounts[0], gas:'1000000'});

  //console.log('Contract deployed to:',result.options.address);
  provider.engine.stop();
}
deploy();
