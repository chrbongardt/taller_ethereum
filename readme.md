Taller Hackathon
=========

Enlaces de interés
______

[https://github.com/chrbongardt/taller_ethereum](https://github.com/chrbongardt/taller_ethereum)

[https://ethereum.org](https://ethereum.org)

[https://www.rinkeby.io](https://www.rinkeby.io)

[https://web3js.readthedocs.io/en/1.0/](https://web3js.readthedocs.io/en/1.0/)

[https://github.com/ethereum/wiki/wiki/JavaScript-API](https://github.com/ethereum/wiki/wiki/JavaScript-API)

[https://solidity.readthedocs.io/en/develop/](https://solidity.readthedocs.io/en/develop/)

[https://metamask.io](https://metamask.io)


Launch test RPC with predefined account
_____

```
testrpc --account="0xaa73b5c98e60d589e71ce7cff59c02f82e12c7ce676ee356da8e058a285ccd61,0xFFFFFFFFFFFFFFFFFF"
```

Launch MIST and use local rpc client
_____

```
/Applications/Mist.app/Contents/MacOS/Mist —rpc http://localhost:8545 —swarmurl="http://swarm-gateways.net"
```

Launch Geth with rpc and personal API enabled
_____

```
path_to/geth --rinkeby --fast --cache 1024 --rpc --rpcapi=“db,eth,net,web3,personal,web3”
```
