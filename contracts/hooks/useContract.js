import { useCallback } from "react";
import { ethers } from "ethers";
import config from "../config";
// eslint-disable-next-line no-undef

const isMainnet = false;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const getContract = useCallback(async (address, abi) => {
    const provider = new ethers.providers.JsonRpcProvider(
      isMainnet ? config.mainnet.rpc : config.testnet.rpc,
      isMainnet ? config.mainnet.chainID : config.testnet.chainID
    );

    return new ethers.Contract(address, abi, provider);
  }, []);

  const getContractWithSigner = useCallback(async (address, abi) => {
    if (window.ethereum) {
      await window.ethereum.enable();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      return new ethers.Contract(address, abi, signer);
    }

    return new ethers.Contract(address, abi, provider);
  }, []);

  return { getContract, getContractWithSigner };
};
