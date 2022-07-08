import { useCallback } from "react";
import { ethers } from "ethers";
import config from "../config";
// eslint-disable-next-line no-undef

const isMainnet = false;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const getContract = useCallback(async (address, abi) => {
    if (window.ethereum) {
      if (window.ethereum.isConnected()) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        return new ethers.Contract(address, abi, signer);
      } else {
        const provider = new ethers.providers.JsonRpcProvider(
          isMainnet ? config.mainnet.rpc : config.testnet.rpc,
          isMainnet ? config.mainnet.chainID : config.testnet.rpc
        );

        return new ethers.Contract(address, abi, provider);
      }
    }
  }, []);

  return { getContract };
};
