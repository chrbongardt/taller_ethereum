const fs = require('fs');
const Eth = require('web3-eth');
const eth = new Eth('http://127.0.0.1:8545');

eth.defaultAccount = '0x22ddfe3c6439839edf8e2e56126c65c5fc5a2f40';

const solc = require('solc');
let code = fs.readFileSync('MiBlog.sol').toString();
let compiledCode = solc.compile(code);
let abiDefinition = JSON.parse(compiledCode.contracts[':Blog'].interface);
let myContract = new  eth.Contract(abiDefinition);
let byteCode = compiledCode.contracts[':Blog'].bytecode;

console.log(`ABI: ${compiledCode.contracts[':Blog'].interface}`);

myContract.deploy({
    data: `0x${byteCode}`,
    arguments: ['El muro del hackathon']
})
.send({
    from: eth.defaultAccount,
    gas: 4700000
})
.on('error', function(error){ console.error(error) })


.on('receipt', function(receipt){
   console.log(`Contract address ${receipt.contractAddress}`) 
})

.on('confirmation', function(confirmationNumber, receipt){ 
    console.log(`New confirmation with number ${confirmationNumber}`)
 })

 .then(function(newContractInstance){
    console.log('Contract instanced');
});