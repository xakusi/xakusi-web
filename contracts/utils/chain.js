import config from "../config";

const isMainnet = false;

export const changeChainCorrect = async () => {
  let { chainId, name, rpc, coinCurrency } = isMainnet
    ? config.mainnet
    : config.testnet;

  chainId = "0x" + chainId.toString(16);

  //Comprobar si esta creada MUMBAI

  //SI no ho esta fer wallet_addEthereumChain

  const created = await window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: [
      {
        chainId: chainId,
        chainName: name,
        nativeCurrency: {
          name: name,
          symbol: coinCurrency, // 2-6 characters long
          decimals: 18,
        },
        rpcUrls: [rpc],
      },
    ],
  });
  if (created) {
  } else {
  }
};
