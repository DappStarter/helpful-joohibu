require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth predict unknown half enrich outer gaze'; 
let testAccounts = [
"0x19dba30b7c32f16dfbab34789837c513ddaf828b0382944d0474389a62fe82f3",
"0x60b13a2c00f332fe6e03dccba35506c4f8a977e0ca5518f7e6a64204898ef7e7",
"0x8c4c61033a01eef43dfe4eca396a1fadc76470f43c55dc7b1a00bb26b3230364",
"0x305db96ea858a6096eae909cfed8e657b6fcabea16128ca9fa36911665b597c8",
"0x0ad1eb90467e5ea13f380b5b0b918cc0db3a03362db2ed9f83f374dab8ac8008",
"0xf30bf54cb071c6fd528551ed5f323e25713dcae299e8eb3913ade613739b5d78",
"0x4a4963fc9abc15d3677f94561fe8bf42ab43fa3461ac562270fec0d32221d6d2",
"0x8288456257a1d7bdd6247939d15e83d6f9f117431d8f50be387d55690077569d",
"0x6df8a03efa749e1ae477175cbd6e2312fb4f7ea4fe93baa99e9bc73e4fe56f95",
"0xd011be7b9252c5b7edb568fd48fa9b5766805b30e3d2911c558f558eab05675a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
