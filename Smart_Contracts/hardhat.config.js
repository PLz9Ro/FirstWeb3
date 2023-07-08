require("@nomicfoundation/hardhat-toolbox");
//https://eth-goerli.g.alchemy.com/v2/Fatf5leDuCLOfwjSTQShL23zQblUFbb_
require('@nomiclabs/hardhat-waffle');
require("@nomicfoundation/hardhat-toolbox");  

module.exports = {
  solidity: '0.8.20',
  networks:{
    Goerli :{
      url: 'https://eth-goerli.g.alchemy.com/v2/Fatf5leDuCLOfwjSTQShL23zQblUFbb_',
      accounts: ['54cbf7507b4ead5c72db86ae1aba7e4d9e043ecb483bff0b84c6fa3b31f856e6']
    }
  }
}