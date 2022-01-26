require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remind arrow guess entry blue gift'; 
let testAccounts = [
"0xde2be09424d3a040c566f4fb469a5b17b8ef32787b987d3a3c0d4e6e2e4ed096",
"0x026e09f181d9d6770d6a4c162c4c5011d1cf50775d93f49352d19f75c592cfe2",
"0x416c9f7b6bafd143d169d87c5e6208fcab1e55a0252fb0fc9a4a37629f3b2f13",
"0x145b2610de0c9a59789a9d891631c5f83c3f7d77900ad0f3ca0312bb736359f8",
"0xab44fbca0cba7aa8ad81e805e110cf2598121c8d0983b1668f8f1bef4b496709",
"0x48362d899652e493271c52533d70ded9c62c610e8e02b75ad3b67f4d60022bfd",
"0xc5feba14203c88ad321a1fef72c2f4f76af134ef26c739decd228206854bf009",
"0x8dc86b142be838264fba74a60053519617f8034cedc38fd3fb829843fb73b6b5",
"0x089036d60acb41f01158bb1e7bd33ff428c66887d495ef9cc13493dd48de1fc5",
"0xcb56ac266eb9f91c86ea8b2ec7b021ef26c674c4239f8ce997fdb1336dad26af"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


