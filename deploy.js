const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'switch library consider liberty agree gossip law earth welcome broom gate dizzy',
    'https://rinkeby.infura.io/IejNaEpuRtlT7OBk9yiy'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting do deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi There!'] })
    .send({ gas: '1000000', from: accounts[0] });
  
     console.log('Contract deployed to', result.option.address);

}
deploy();